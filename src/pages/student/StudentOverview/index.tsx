import React from "react";
import CardCourse from "./CardCourse";
import { useLoaderData } from "react-router";

export default function StudentPage() {
    const courses = useLoaderData();

    return (
        <section
            id="LatestCourse"
            className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
        >
            <h2 className="font-extrabold text-[22px] leading-[33px]">
                Latest Courses
            </h2>
            {courses?.map((item: any) => (
                <CardCourse
                    key={item._id}
                    title={item.name}
                    category={item.category.name}
                    id={item._id}
                    imageUrl={item.thumbnail_url}
                />
            ))}
        </section>
    );
}
