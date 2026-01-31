import { Link } from "react-router";

export default function LayoutDashboard() {
    return (
        <div className="flex min-h-screen">
            <aside className="sidebar-container fixed h-[calc(100vh-20px)] w-full max-w-[280px] my-[10px] ml-[10px] bg-[#060A23] overflow-hidden flex flex-1 rounded-[20px]">
                <div className="scroll-container flex w-full overflow-y-scroll hide-scrollbar">
                    <nav className="flex flex-col w-full h-fit p-[30px] gap-10 z-10">
                        <Link to="#">
                            <img
                                alt="logo"
                                src="/assets/images/logos/logo.svg"
                            />
                        </Link>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">
                                GENERAL
                            </p>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/3dcube-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Overview
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/note-favorite-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Courses
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/crown-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Categories
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/profile-2user-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Students
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul className="flex flex-col gap-4">
                            <p className="font-semibold text-xs leading-[18px] text-white">
                                OTHERS
                            </p>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/security-card-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Subscription
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/cup-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Rewards
                                        </span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <div className="flex items-center gap-3 w-full rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] shadow-[-10px_-6px_10px_0_#181A35_inset]">
                                        <img
                                            alt="icon"
                                            className="w-6 h-6"
                                            src="/assets/images/icons/setting-2-white.svg"
                                        />
                                        <span className="font-semibold text-white">
                                            Settings
                                        </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <img
                    alt="background"
                    className="absolute object-contain object-bottom bottom-0"
                    src="/assets/images/backgrounds/sidebar-glow.png"
                />
            </aside>
            <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                <div
                    className="flex items-center justify-between gap-[30px]"
                    id="TopBar"
                >
                    <form
                        action=""
                        className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
                    >
                        <input
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D]"
                            id="search"
                            name="search"
                            placeholder="Search course, student, other file..."
                            type="text"
                        />
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/search-normal.svg"
                        />
                    </form>
                    <div className="relative flex items-center justify-end gap-[14px]">
                        <div className="text-right">
                            <p className="font-semibold">Shayna Angga</p>
                            <p className="text-sm leading-[21px] text-[#838C9D]">
                                Manager
                            </p>
                        </div>
                        <button
                            className="flex shrink-0 w-[50px] h-[50px] rounded-full overflow-hidden"
                            id="profileButton"
                            type="button"
                        >
                            <img
                                alt="profile photos"
                                className="w-full h-full object-cover"
                                src="/assets/images/photos/photo-1.png"
                            />
                        </button>
                        <div
                            className="absolute top-full hidden"
                            id="ProfileDropdown"
                        >
                            <ul className="flex flex-col w-[200px] rounded-[20px] border border-[#CFDBEF] p-5 gap-4 bg-white mt-4">
                                <li className="font-semibold">
                                    <Link to="#">My Account</Link>
                                </li>
                                <li className="font-semibold">
                                    <Link to="#">Subscriptions</Link>
                                </li>
                                <li className="font-semibold">
                                    <Link to="#">Settings</Link>
                                </li>
                                <li className="font-semibold">
                                    <Link to="#">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <header className="flex items-center justify-between gap-[30px]">
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">
                            Overview
                        </h1>
                        <p className="text-[#838C9D] mt-[1]">
                            Grow your company quickly
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <a
                            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                            href="#"
                        >
                            Customize
                        </a>
                        <a
                            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                            href=""
                        >
                            Export Data
                        </a>
                    </div>
                </header>
                <section
                    className="flex rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
                    id="Stats"
                >
                    <div className="grid grid-cols-2 w-[500px] gap-[30px]">
                        <div className="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                            <img
                                alt="icon"
                                className="w-[46px] h-[46px]"
                                src="/assets/images/icons/profile-2user-purple.svg"
                            />
                            <div>
                                <p className="font-extrabold text-2xl leading-[36px]">
                                    189,498
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
                                    7,221
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
                                    893,891
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
                                    12,812
                                </p>
                                <p className="text-[#838C9D]">Text Content</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]">
                        <div className="relative flex items-center justify-center shrink-0 m-auto rounded-full w-[230px] h-[230px]">
                            <div
                                className="absolute rounded-full w-[230px] h-[230px] z-10"
                                style={{
                                    background:
                                        "conic-gradient(#C2ACFF 0% 25%, #662FFF 25% 100%)",
                                }}
                            ></div>
                            <div className="flex justify-center items-center w-[130px] h-[130px] rounded-full bg-white z-10">
                                <p className="w-fit h-fit text-center font-bold text-lg leading-[27px]">
                                    Our
                                    <br />
                                    Rapport
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#662FFF]" />
                                <p className="font-semibold text-sm leading-[21px]">
                                    Completed 75%
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#C2ACFF]" />
                                <p className="font-semibold text-sm leading-[21px]">
                                    Not Completed 25%
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="grid grid-cols-2 gap-[30px]">
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
                                <a
                                    className="font-bold text-xl leading-[30px] line-clamp-1"
                                    href="#"
                                >
                                    Responsive Design Triclorem Lorem, ipsum
                                    dolor.
                                </a>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        Programming
                                    </p>
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
                                <a
                                    className="font-bold text-xl leading-[30px] line-clamp-1"
                                    href="#"
                                >
                                    HTMX JavaScript 2020
                                </a>
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
                                <a
                                    className="font-bold text-xl leading-[30px] line-clamp-1"
                                    href="#"
                                >
                                    Mastering React
                                </a>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        Data Science
                                    </p>
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
                                <a
                                    className="font-bold text-xl leading-[30px] line-clamp-1"
                                    href="#"
                                >
                                    Responsive Design Triclorem Lorem, ipsum
                                    dolor.
                                </a>
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
                                <a
                                    className="font-bold text-xl leading-[30px] line-clamp-1"
                                    href="#"
                                >
                                    Company Profile Multilorem Lorem, ipsum
                                    dolor.
                                </a>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        Data Science
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
                        id="LatestStudents"
                    >
                        <h2 className="font-extrabold text-[22px] leading-[33px]">
                            Latest Students
                        </h2>
                        <div className="card flex items-center gap-5">
                            <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/photos/photo-2.png"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                    Yulia Putri
                                </h3>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        183 Course Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card flex items-center gap-5">
                            <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/photos/photo-3.png"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                    Angga Risky Setiawan
                                </h3>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        183 Course Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card flex items-center gap-5">
                            <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/photos/photo-4.png"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                    Shayna Wo
                                </h3>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        183 Course Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card flex items-center gap-5">
                            <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/photos/photo-5.png"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                    Imanual Kod
                                </h3>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        183 Course Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card flex items-center gap-5">
                            <div className="flex shrink-0 w-20 h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
                                <img
                                    alt="thumbnail"
                                    className="w-full h-full object-cover"
                                    src="/assets/images/photos/photo-3.png"
                                />
                            </div>
                            <div className="w-full">
                                <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
                                    Battita Gunber
                                </h3>
                                <div className="flex items-center gap-[6px] mt-[6px]">
                                    <img
                                        alt="icon"
                                        src="/assets/images/icons/crown-purple.svg"
                                    />
                                    <p className="text-[#838C9D]">
                                        183 Course Joined
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
