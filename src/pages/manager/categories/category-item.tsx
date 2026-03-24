import { useMutation } from "@tanstack/react-query";
import { Link, useRevalidator } from "react-router";
import { deleteCategory } from "../../../services/categoryService";
import { useState } from "react";

export default function CategoryItem({
    name,
    id,
    totalCourses,
}: {
    name: string;
    id: string;
    totalCourses: number;
}) {
    const revalidator = useRevalidator();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { isPending, mutateAsync } = useMutation({
        mutationFn: () => deleteCategory(id),
    });

    const handleDelete = async () => {
        setErrorMessage("");
        try {
            await mutateAsync();
            revalidator.revalidate();
        } catch (error: unknown) {
            const err = error as { response?: { data?: { message?: string } } };
            const message = err.response?.data?.message || "Failed to delete category. Please try again.";
            setErrorMessage(message);
        }
    };

    return (
        <>
            <div className="card flex items-center justify-between gap-5">
                <div className="w-full">
                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                        {name}
                    </h3>
                    <p className="text-[#838C9D] text-sm mt-1">
                        {totalCourses} {totalCourses === 1 ? "course" : "courses"}
                    </p>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <Link
                        to={`/manager/categories/edit/${id}`}
                        className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={isPending}
                        className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </button>
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2 col-span-full">
                        {errorMessage}
                    </p>
                )}
            </div>
        </>
    );
}
