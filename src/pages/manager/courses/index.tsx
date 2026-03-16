import { Link, useLoaderData } from "react-router";
import CardCourse from "./card";

export default function ManageCoursePage() {
    const courses = useLoaderData();
    
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Manage Courses
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Give the best future for your great employees
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                        to="/manager/courses/create"
                    >
                        New Course
                    </Link>
                </div>
            </header>
            <section
                className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
                id="CourseList"
            >
                {courses?.data && courses.data.length > 0 ? (
                    <>
                        {courses.data.map(
                            (item: {
                                _id: number;
                                name: string;
                                thumbnail_url: string;
                                total_students: number;
                                category: { name: string };
                            }) => (
                                <CardCourse
                                    key={item._id}
                                    category={item.category.name}
                                    id={item._id}
                                    imageUrl={item.thumbnail_url}
                                    name={item.name}
                                    totalStudent={item.total_students}
                                />
                            ),
                        )}

                        <div
                            className="flex items-center gap-3"
                            id="Pagination"
                        >
                            <button
                                className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
                                type="button"
                            >
                                <span className="font-semibold text-sm leading-[21px]">
                                    1
                                </span>
                            </button>
                            <button
                                className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                                type="button"
                            >
                                <span className="font-semibold text-sm leading-[21px]">
                                    2
                                </span>
                            </button>
                            <button
                                className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                                type="button"
                            >
                                <span className="font-semibold text-sm leading-[21px]">
                                    3
                                </span>
                            </button>
                            <button
                                className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                                type="button"
                            >
                                <span className="font-semibold text-sm leading-[21px]">
                                    4
                                </span>
                            </button>
                            <button
                                className="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
                                type="button"
                            >
                                <span className="font-semibold text-sm leading-[21px]">
                                    5
                                </span>
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <p className="text-[#838C9D] text-lg font-semibold">
                                No courses yet
                            </p>
                            <p className="text-[#838C9D] mt-2">
                                Create your first course to get started
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
