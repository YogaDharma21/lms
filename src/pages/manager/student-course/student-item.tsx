import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useParams, useRevalidator } from "react-router";
import { deleteStudentCourse } from "../../../services/courseService";

export default function StudentItem({
    imageUrl,
    name,
    id,
}: {
    imageUrl: string;
    name: string;
    id: string;
}) {
    const revalidator = useRevalidator();
    const params = useParams();
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { isPending, mutateAsync } = useMutation({
        mutationFn: () =>
            deleteStudentCourse(
                {
                    studentId: id,
                },
                params.id as string,
            ),
    });

    const handleDelete = async () => {
        setErrorMessage("");
        try {
            await mutateAsync();
            revalidator.revalidate();
        } catch (error) {
            const err = error as { response?: { data?: { message?: string } } };
            setErrorMessage(err.response?.data?.message || "Failed to delete student. Please try again.");
        }
    };
    return (
        <>
            <div className="card flex items-center gap-5">
                <div className="relative flex shrink-0 w-20 h-20">
                    <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                        <img
                            src={imageUrl}
                            className="w-full h-full object-cover"
                            alt="photo"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                        {name}
                    </h3>
                </div>
                <div className="flex justify-end items-center gap-3">
                    <button
                        type="button"
                        className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
                        disabled={isPending}
                        onClick={handleDelete}
                    >
                        {isPending ? "Deleting..." : "Delete"}
                    </button>
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-sm mt-2">
                        {errorMessage}
                    </p>
                )}
            </div>
        </>
    );
}
