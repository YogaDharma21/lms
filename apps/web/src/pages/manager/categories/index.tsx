import { Link, useLoaderData, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createCategory } from "../../../services/categoryService";
import CategoryItem from "./category-item";

export default function ManageCategoriesPage() {
    const categories = useLoaderData() as any[];
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isCreating, setIsCreating] = useState(false);

    const { mutateAsync, isPending } = useMutation({
        mutationFn: createCategory,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");
        setIsCreating(true);

        try {
            await mutateAsync({ name });
            setName("");
            navigate("/manager/categories");
        } catch (error: unknown) {
            const err = error as { response?: { data?: { message?: string } } };
            const message = err.response?.data?.message || "Failed to create category";
            setErrorMessage(message);
        } finally {
            setIsCreating(false);
        }
    };

    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Manage Categories
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Organize your courses with categories
                    </p>
                </div>
            </header>
            <section className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <form onSubmit={handleSubmit} className="flex gap-3 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-semibold mb-2">
                            Category Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter category name"
                            className="w-full rounded-full border border-[#060A23] px-5 py-3"
                            required
                            minLength={3}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isPending || !name.trim()}
                        className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap disabled:opacity-50"
                    >
                        {isPending ? "Creating..." : "Add Category"}
                    </button>
                </form>
                {errorMessage && (
                    <p className="text-red-500 text-sm">{errorMessage}</p>
                )}

                {categories && categories.length > 0 ? (
                    categories.map((item: any) => (
                        <CategoryItem 
                            key={item._id} 
                            name={item.name} 
                            id={item._id} 
                            totalCourses={Number(item.total_courses) || item.courses?.length || 0} 
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <p className="text-[#838C9D] text-lg font-semibold">
                                No categories yet
                            </p>
                            <p className="text-[#838C9D] mt-2">
                                Create your first category to get started
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
