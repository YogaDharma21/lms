import CardCourse from "./CardCourse";


export default function StudentPage() {
    return (
        <section
            className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            id="LatestCourse"
        >
            <h2 className="font-extrabold text-[22px] leading-[33px]">
                Latest Courses
            </h2>
            <CardCourse
                id={1}
                imageUrl="/assets/images/thumbnails/th-1.png"
                title="Responsive Design Triclorem Lorem, ipsum dolor."
                category="Programming"
            />
        </section>
    );
}
