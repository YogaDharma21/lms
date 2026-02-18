import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { mutateContentSchema } from "../../../utils/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { createContent } from "../../../services/courseService";
import { useNavigate, useParams } from "react-router";

export default function ManageContentCreatePage() {
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(mutateContentSchema),
    });

    const type = watch("type");

    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data: any) => createContent(data),
    });

    const { id } = useParams();

    const navigate = useNavigate();

    const onSubmit = async (values: any) => {
        try {
            await mutateAsync({
                ...values,
                courseId: id,
            });

            navigate(`/manager/courses/detail/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div
                id="Breadcrumb"
                className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5"
            >
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
                    Manage Course
                </span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
                    Course
                </span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
                    Add Content
                </span>
            </div>
            <header className="flex items-center justify-between gap-[30px]">
                <div className="flex items-center gap-[30px]">
                    <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                        <img
                            src="/assets/images/thumbnails/th-1.png"
                            className="w-full h-full object-cover"
                            alt="thumbnail"
                        />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">
                            Add Content
                        </h1>
                        <p className="text-[#838C9D] mt-[1]">
                            Give a best content for the course
                        </p>
                    </div>
                </div>
            </header>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="title" className="font-semibold">
                        Content Title
                    </label>
                    <div
                        className={`flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF] ${errors.title ? "border-red-500" : ""}`}
                    >
                        <img
                            src="/assets/images/icons/note-favorite-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            type="text"
                            id="title"
                            {...register("title")}
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Write better name for your course"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.title?.message}
                    </span>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="type" className="font-semibold">
                        Select Type
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/crown-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <select
                            id="type"
                            {...register("type")}
                            className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                        >
                            <option value="" hidden>
                                Choose content type
                            </option>
                            <option value="video">Video</option>
                            <option value="text">Text</option>
                        </select>
                        <img
                            src="/assets/images/icons/arrow-down.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        {errors?.type?.message}
                    </span>
                </div>
                {type === "video" && (
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="video" className="font-semibold">
                            Youtube Video ID
                        </label>
                        <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                            <img
                                src="/assets/images/icons/bill-black.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                            <input
                                type="text"
                                id="youtubeId"
                                {...register("youtubeId")}
                                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] bg-transparent!"
                                placeholder="Write tagline for better copy"
                            />
                        </div>
                        <span className="error-message text-[#FF435A]">
                            {errors?.youtubeId?.message}
                        </span>
                    </div>
                )}

                {type === "text" && (
                    <div className="flex flex-col gap-[10px]">
                        <label className="font-semibold">Content Text</label>
                        <div
                            className={`bg-white rounded-[20px] overflow-hidden ${errors.text ? "ring-2 ring-red-500" : ""}`}
                            id="editor"
                        >
                            <Controller
                                name="text"
                                control={control}
                                render={({ field }) => (
                                    <ReactQuill
                                        theme="snow"
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="h-[300px] mb-10"
                                    />
                                )}
                            />
                        </div>
                        <span className="error-message text-[#FF435A]">
                            {errors?.text?.message}
                        </span>
                    </div>
                )}
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
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap disabled:opacity-50"
                    >
                        {isPending ? "Adding Content..." : "Add Content Now"}
                    </button>
                </div>
            </form>
        </>
    );
}
