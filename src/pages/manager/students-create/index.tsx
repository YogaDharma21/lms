import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { createStudentSchema } from "../../../utils/zodSchema";
import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { createStudent } from "../../../services/studentService";

export default function ManageStudentCreatePage() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        resolver: zodResolver(createStudentSchema),
    });

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            setValue("photo", file, { shouldValidate: true });
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const navigate = useNavigate();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data: any) => createStudent(data),
    });

    const onSubmit = async (values: any) => {
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("password", values.password);
            if (file) {
                formData.append("avatar", file);
            }

            await mutateAsync(formData);

            navigate("/manager/students");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Add Student
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Create new future for company
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
                                    setValue("photo", null as any, {
                                        shouldValidate: true,
                                    });
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
                        {...register("photo")}
                        type="file"
                        id="thumbnail"
                        ref={inputFileRef}
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                    />
                    <span className="error-message text-[#FF435A]">
                        {errors?.photo?.message as string}
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
                        {errors?.name?.message}
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
                        {errors?.email?.message}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/lock-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            {...register("password")}
                            type="password"
                            id="password"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Type password"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.password?.message}
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
                        disabled={isPending}
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                    >
                        Add Now
                    </button>
                </div>
            </form>
        </>
    );
}
