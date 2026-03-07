import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import { addStudentCourseSchema } from "../../../utils/zodSchema";
import { useMutation } from "@tanstack/react-query";
import { addStudentCourse } from "../../../services/courseService";

export default function StudentForm() {
    const data = useLoaderData();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(addStudentCourseSchema),
    });

    const navigate = useNavigate();

    const { isPending, mutateAsync } = useMutation({
        mutationFn: (data: FormData) => addStudentCourse(data, id as string),
    });

    const onSubmit = async (values: any) => {
        try {
            await mutateAsync(values);
            navigate(`/manager/courses/students/${id}`);
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
                        Add new student to course
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
                            id="studentId"
                            {...register("studentId")}
                        >
                            <option hidden value="">
                                Choose one student
                            </option>
                            {data?.map(
                                (item: { _id: number; name: string }) => (
                                    <option
                                        key={item._id}
                                        value={String(item._id)}
                                    >
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
                        {errors?.studentId?.message}
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
                        disabled={isPending}
                    >
                        {isPending ? "Adding..." : "Add Now"}
                    </button>
                </div>
            </form>
        </>
    );
}
