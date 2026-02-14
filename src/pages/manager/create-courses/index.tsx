import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLoaderData } from "react-router";
import { createCourseSchema } from "../../../utils/zodSchema";
import { useRef, useState } from "react";

export default function ManageCreateCoursePage() {
    const categories = useLoaderData();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm({
        resolver: zodResolver(createCourseSchema),
    });

    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFile(file);
            setValue("thumbnail", file, { shouldValidate: true });
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const thumbnail = watch("thumbnail");

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        New Course
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Create new future for company
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        to="/manager/courses"
                    >
                        Back To Course List
                    </Link>
                </div>
            </header>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="title">
                        Course Name
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/note-favorite-black.svg"
                        />
                        <input
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="title"
                            placeholder="Write better name for your course"
                            type="text"
                            {...register("name")}
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.name?.message}
                    </span>
                </div>
                <div className="relative flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="thumbnail">
                        Add a Thumbnail
                    </label>
                    <div
                        className="relative flex shrink-0 w-full h-[200px] rounded-[20px] border border-[#CFDBEF] overflow-hidden"
                        id="thumbnail-preview-container"
                    >
                        <button
                            className={`absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0 ${previewUrl ? "hidden" : ""}`}
                            id="trigger-input"
                            onClick={() => inputFileRef?.current?.click()}
                            type="button"
                        >
                            <img
                                alt="icon"
                                className="w-6 h-6"
                                src="/assets/images/icons/gallery-add-black.svg"
                            />
                            <span className="text-[#838C9D]">
                                Add an attachment
                            </span>
                        </button>
                        <img
                            alt="thumbnail"
                            className={`w-full h-full object-cover ${previewUrl ? "block" : "hidden"}`}
                            id="thumbnail-preview"
                            src={previewUrl || ""}
                        />
                        <button
                            className={`absolute right-[10px] bottom-[10px] w-12 h-12 rounded-full z-10 ${previewUrl ? "block" : "hidden"}`}
                            id="delete-preview"
                            type="button"
                            onClick={() => {
                                setFile(null);
                                setPreviewUrl(null);
                                setValue("thumbnail", null as any);
                                if (inputFileRef.current) {
                                    inputFileRef.current.value = "";
                                }
                            }}
                        >
                            <img
                                alt="delete"
                                src="/assets/images/icons/delete.svg"
                            />
                        </button>
                    </div>
                    <input
                        ref={inputFileRef}
                        accept="image/*"
                        className="hidden"
                        id="thumbnail"
                        type="file"
                        onChange={handleThumbnailChange}
                    />
                    <span className="error-message text-[#FF435A]">
                        {errors?.thumbnail?.message as string}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="tagline">
                        Course Tagline
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/bill-black.svg"
                        />
                        <input
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="tagline"
                            placeholder="Write tagline for better copy"
                            type="text"
                            {...register("tagline")}
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.tagline?.message}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="category">
                        Select Category
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/bill-black.svg"
                        />
                        <select
                            className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="category"
                            {...register("categoryId")}
                        >
                            <option hidden value="">
                                Choose one category
                            </option>
                            {categories?.data.map(
                                (item: { id: number; name: string }) => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ),
                            )}
                        </select>
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/arrow-down.svg"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.categoryId?.message}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="desc">
                        Description
                    </label>
                    <div className="flex w-full rounded-[20px] border border-[#CFDBEF] gap-3 p-5  transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/note-black.png"
                        />
                        <textarea
                            className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="desc"
                            placeholder="Explain what this course about"
                            rows={5}
                            {...register("description")}
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.description?.message}
                    </span>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button
                        className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        type="button"
                    >
                        Save as Draft
                    </button>
                    <button
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                        type="submit"
                    >
                        Create Now
                    </button>
                </div>
            </form>
        </>
    );
}
