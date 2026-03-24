import { Link, useLoaderData, useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { updateCategory } from "../../../services/categoryService";

export default function ManageCategoryEditPage() {
    const category = useLoaderData() as any;
    const navigate = useNavigate();
    const [name, setName] = useState(category?.name || "");
    const [errorMessage, setErrorMessage] = useState("");

    const { mutateAsync, isPending } = useMutation({
        mutationFn: updateCategory,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            await mutateAsync({ name }, category._id);
            navigate("/manager/categories");
        } catch (error: unknown) {
            const err = error as { response?: { data?: { message?: string } } };
            const message = err.response?.data?.message || "Failed to update category";
            setErrorMessage(message);
        }
    };

    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Edit Category
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Update category details
                    </p>
                </div>
            </header>
            <section className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
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
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={isPending || !name.trim()}
                            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap disabled:opacity-50"
                        >
                            {isPending ? "Saving..." : "Save Changes"}
                        </button>
                        <Link
                            to="/manager/categories"
                            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </section>
        </>
    );
}
