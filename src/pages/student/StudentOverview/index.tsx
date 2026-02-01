import { Link } from "react-router";

export default function StudentPage() {
    return (
        <section
            className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            id="LatestCourse"
        >
            <h2 className="font-extrabold text-[22px] leading-[33px]">
                Latest Courses
            </h2>
            <div className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        src="/assets/images/thumbnails/th-1.png"
                    />
                </div>
                <div className="w-full">
                    <Link
                        className="font-bold text-xl leading-[30px] line-clamp-1"
                        to="#"
                    >
                        Responsive Design Triclorem Lorem, ipsum dolor.
                    </Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">Programming</p>
                    </div>
                </div>
            </div>
            <div className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        src="/assets/images/thumbnails/th-2.png"
                    />
                </div>
                <div className="w-full">
                    <Link
                        className="font-bold text-xl leading-[30px] line-clamp-1"
                        to="#"
                    >
                        HTMX JavaScript 2020
                    </Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">Marketing</p>
                    </div>
                </div>
            </div>
            <div className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        src="/assets/images/thumbnails/th-3.png"
                    />
                </div>
                <div className="w-full">
                    <Link
                        className="font-bold text-xl leading-[30px] line-clamp-1"
                        to="#"
                    >
                        Mastering React
                    </Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">Data Science</p>
                    </div>
                </div>
            </div>
            <div className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        src="/assets/images/thumbnails/th-2.png"
                    />
                </div>
                <div className="w-full">
                    <Link
                        className="font-bold text-xl leading-[30px] line-clamp-1"
                        to="#"
                    >
                        Responsive Design Triclorem Lorem, ipsum dolor.
                    </Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">Marketing</p>
                    </div>
                </div>
            </div>
            <div className="card flex items-center gap-5">
                <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                    <img
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        src="/assets/images/thumbnails/th-3.png"
                    />
                </div>
                <div className="w-full">
                    <Link
                        className="font-bold text-xl leading-[30px] line-clamp-1"
                        to="#"
                    >
                        Company Profile Multilorem Lorem, ipsum dolor.
                    </Link>
                    <div className="flex items-center gap-[6px] mt-[6px]">
                        <img
                            alt="icon"
                            src="/assets/images/icons/crown-purple.svg"
                        />
                        <p className="text-[#838C9D]">Data Science</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
