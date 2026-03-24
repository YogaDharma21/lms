import { Link } from "react-router";
import ContentItem from "./content-item";

export default function TableContent({
    details,
    courseId,
}: {
    details: any[];
    courseId: string;
}) {
    return (
        <>
            <section
                id="CourseList"
                className="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="header flex items-center justify-between">
                    <h2 className="font-bold text-[22px] leading-[33px]">
                        Course Content
                    </h2>
                    <Link
                        to={`/manager/courses/${courseId}/create`}
                        className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                    >
                        Add Content
                    </Link>
                </div>

                {details && details.length > 0 ? (
                    details.map((item: any, i: number) => (
                        <ContentItem
                            key={item._id}
                            id={item._id}
                            index={i + 1}
                            type={item.type}
                            title={item.title}
                            courseId={courseId}
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                            <p className="text-[#838C9D] text-lg font-semibold">
                                No content yet
                            </p>
                            <p className="text-[#838C9D] mt-2">
                                Add your first content to get started
                            </p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
