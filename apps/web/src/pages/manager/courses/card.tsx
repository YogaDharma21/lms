import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Link, useRevalidator } from "react-router";
import { deleteCourse } from "../../../services/courseService";

export default function CardCourse({
    id,
    imageUrl,
    name,
    totalStudent,
    category,
}: {
    id: string;
    imageUrl: string;
    name: string;
    totalStudent: number;
    category: string;
}) {
    const revalidator = useRevalidator();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { isPending, mutateAsync } = useMutation({
        mutationFn: () => deleteCourse(id),
    });

    const handleDelete = async () => {
        setErrorMessage("");
        try {
            await mutateAsync();
            revalidator.revalidate();
        } catch (error) {
            const err = error as { response?: { data?: { message?: string } } };
            setErrorMessage(err.response?.data?.message || "Failed to delete course. Please try again.");
        }
    };
    return (
        <div className="card flex items-center gap-5">
            <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                <img
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                    src={imageUrl}
                />
            </div>
            <div className="w-full">
                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                    {name}
                </h3>
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            className="w-5 h-5"
                            src="/assets/images/icons/profile-2user-purple.svg"
                        />
                        <p className="text-[#838C9D]">
                            {totalStudent} Students
                        </p>
                    </div>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            className="w-5 h-5"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">{category}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-end items-center gap-3">
                <Link
                    className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    to={`/manager/courses/students/${id}`}
                >
                    Students
                </Link>
                <button
                    className="w-fit rounded-full bg-red-500 border text-white p-[14px_20px] font-semibold text-nowrap"
                    type="button"
                    onClick={handleDelete}
                    disabled={isPending}
                >
                    {isPending ? "Deleting..." : "Delete"}
                </button>
                <Link
                    className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    to={`/manager/courses/${id}`}
                >
                    Manage
                </Link>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">
                        {errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
}
