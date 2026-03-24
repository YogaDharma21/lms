import { useLoaderData } from "react-router";
import Courses from "./courses";
import Students from "./students";

export default function ManagerHome() {
    const overviews = useLoaderData();
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Overview
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Grow your company quickly
                    </p>
                </div>
            </header>
            <section
                className="grid grid-cols-4 rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
                id="Stats"
            >
                <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                    <img
                        alt="icon"
                        className="w-[46px] h-[46px]"
                        src="/assets/images/icons/profile-2user-purple.svg"
                    />
                    <div>
                        <p className="font-extrabold text-2xl leading-[36px]">
                            {overviews.totalStudents}
                        </p>
                        <p className="text-[#838C9D]">Total Students</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                    <img
                        alt="icon"
                        className="w-[46px] h-[46px]"
                        src="/assets/images/icons/note-favorite-purple.svg"
                    />
                    <div>
                        <p className="font-extrabold text-2xl leading-[36px]">
                            {overviews.totalCourses}
                        </p>
                        <p className="text-[#838C9D]">Total Courses</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                    <img
                        alt="icon"
                        className="w-[46px] h-[46px]"
                        src="/assets/images/icons/video-play-purple.svg"
                    />
                    <div>
                        <p className="font-extrabold text-2xl leading-[36px]">
                            {overviews.totalVideos}
                        </p>
                        <p className="text-[#838C9D]">Video Content</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                    <img
                        alt="icon"
                        className="w-[46px] h-[46px]"
                        src="/assets/images/icons/note-purple.svg"
                    />
                    <div>
                        <p className="font-extrabold text-2xl leading-[36px]">
                            {overviews.totalTexts}
                        </p>
                        <p className="text-[#838C9D]">Text Content</p>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-2 gap-[30px]">
                <Courses />
                <Students />
            </div>
        </>
    );
}
