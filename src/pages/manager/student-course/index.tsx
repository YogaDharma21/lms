import { Link, useLoaderData, useParams } from "react-router";
import StudentItem from "./student-item";

export default function StudentCourseList() {
    const { id } = useParams();
    const course = useLoaderData();
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Students
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Keep your students happy
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to={`/manager/courses/students/${id}/add`}
                        className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                    >
                        Add Student
                    </Link>
                </div>
            </header>
            <section
                id="CourseList"
                className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                {course?.students && course.students.length > 0 ? (
                    <>
                        {course?.students?.map((item: any, i: number) => (
                            <StudentItem
                                key={i}
                                imageUrl={item.photo_url}
                                name={item.name}
                                id={item._id}
                            />
                        ))}
                    </>
                ) : (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <p className="text-[#838C9D] text-lg font-semibold">
                                No student in this course yet
                            </p>
                            <p className="text-[#838C9D] mt-2">
                                Add students to get started
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
