import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate } from "react-router";
import {
    createStudentSchema,
    updateStudentSchema,
} from "../../../utils/zodSchema";
import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { createStudent, updateStudent } from "../../../services/studentService";

export default function ManageStudentCreatePage() {
    const student = useLoaderData() as any;
    const isEditMode = student !== undefined && student !== null;

    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const inputFileRef = useRef<HTMLInputElement>(null);
    const objectUrlRef = useRef<string | null>(null);

    useEffect(() => {
        return () => {
            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (student?.photo_url) {
            setPreviewUrl(student.photo_url);
        }
    }, [student]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: zodResolver(
            isEditMode ? updateStudentSchema : createStudentSchema,
        ),
        defaultValues: {
            name: student?.name,
            email: student?.email,
        },
    });

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (objectUrlRef.current) {
                URL.revokeObjectURL(objectUrlRef.current);
            }

            setFile(file);
            setValue("photo" as any, file, { shouldValidate: true });
            const url = URL.createObjectURL(file);
            objectUrlRef.current = url;
            setPreviewUrl(url);
        }
    };

    const navigate = useNavigate();

    const mutateCreate = useMutation({
        mutationFn: (data: any) => createStudent(data),
    });

    const mutateUpdate = useMutation({
        mutationFn: (data: any) => updateStudent(data, student?._id),
    });

    const onSubmit = async (values: any) => {
        setErrorMessage(""); // Clear previous error
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            if (values.password) {
                formData.append("password", values.password);
            }
            if (file) {
                formData.append("avatar", file);
            }

            if (isEditMode) {
                await mutateUpdate.mutateAsync(formData);
            } else {
                await mutateCreate.mutateAsync(formData);
            }

            navigate("/manager/students");
        } catch (error: unknown) {
            const err = error as { response?: { data?: { message?: string } } };
            const message = err.response?.data?.message || "An error occurred. Please try again.";
            setErrorMessage(message);
        }
    };
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        {isEditMode ? "Edit Student" : "Add Student"}
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        {isEditMode ? "Edit existing student data" : "Create new future for company"}
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="#"
                        className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    >
                        Import from BWA
                    </Link>
                </div>
            </header>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="relative flex flex-col gap-[10px]">
                    <label htmlFor="thumbnail" className="font-semibold">
                        Add a Avatar
                    </label>
                    <div className="flex items-center gap-[14px]">
                        <div
                            id="thumbnail-preview-container"
                            className="relative flex shrink-0 w-20 h-20 rounded-[20px] border border-[#CFDBEF] overflow-hidden"
                        >
                            <button
                                type="button"
                                id="trigger-input"
                                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0 ${previewUrl ? "hidden" : ""}`}
                                onClick={() => inputFileRef?.current?.click()}
                            >
                                <img
                                    src="/assets/images/icons/gallery-add-black.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                            </button>
                            <img
                                id="thumbnail-preview"
                                src={previewUrl || ""}
                                className={`w-full h-full object-cover ${previewUrl ? "block" : "hidden"}`}
                                alt="thumbnail"
                            />
                            <button
                                type="button"
                                id="delete-preview"
                                className={`absolute right-1 bottom-1 w-8 h-8 rounded-full z-10 ${previewUrl ? "block" : "hidden"}`}
                                onClick={() => {
                                    setFile(null);
                                    setPreviewUrl(null);
                                    setValue("photo" as any, null as any);
                                    if (inputFileRef.current) {
                                        inputFileRef.current.value = "";
                                    }
                                }}
                            >
                                <img
                                    src="/assets/images/icons/delete.svg"
                                    alt="delete"
                                />
                            </button>
                        </div>
                    </div>
                    <input
                        {...register("photo" as any)}
                        type="file"
                        id="thumbnail"
                        ref={inputFileRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                    />
                    <span className="error-message text-[#FF435A]">
                        {((errors as any)?.photo?.message as string) || ""}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="name" className="font-semibold">
                        Full Name
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/note-favorite-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            {...register("name")}
                            type="text"
                            id="name"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Write your name"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.name?.message as string}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email" className="font-semibold">
                        Email Address
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/sms-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            {...register("email")}
                            type="email"
                            id="email"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Write your email address"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.email?.message as string}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="password" className="font-semibold">
                        Password {!isEditMode && "*"}
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/lock-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            {...register("password" as any)}
                            type="password"
                            id="password"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder={isEditMode ? "Leave blank to keep current password" : "Type password"}
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {((errors as any)?.password?.message as string) || ""}
                    </span>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button
                        type="button"
                        className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    >
                        Save as Draft
                    </button>
                    <button
                        type="submit"
                        disabled={
                            isEditMode
                                ? mutateUpdate.isPending
                                : mutateCreate.isPending
                        }
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                    >
                        {isEditMode ? "Update Now" : "Add Now"}
                    </button>
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-sm text-center mt-2">
                        {errorMessage}
                    </p>
                )}
            </form>
        </>
    );
}
