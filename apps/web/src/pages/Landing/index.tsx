import { Link } from "react-router";

export default function Landing() {
    return (
        <div className="relative min-h-screen bg-[#060A23]">
            <div className="absolute inset-0 -z-10">
                <img
                    src="/assets/images/backgrounds/background-glow.png"
                    className="absolute bottom-0 transform -translate-x-1/2 left-1/2"
                    alt=""
                />
            </div>

            <nav className="flex items-center justify-between p-[30px]">
                <div className="flex items-center gap-[60px]">
                    <img
                        src="/assets/images/logos/logo.svg"
                        className="flex shrink-0"
                        alt="logo"
                    />
                </div>
            </nav>

            <section className="px-[100px] py-[60px]">
                <div className="flex items-center justify-between gap-[60px]">
                    <div className="flex-1">
                        <h1 className="font-extrabold text-[52px] leading-[78px] text-white">
                            Empower Your <br />
                            <span className="text-[#662FFF]">Learning Journey</span>
                        </h1>
                        <p className="text-lg text-[#A0A3BD] mt-[20px] max-w-[500px]">
                            A powerful learning management system where teachers create courses 
                            and students access their personalized learning content.
                        </p>
                    </div>

                    <div className="flex gap-[30px]">
                        <div className="w-[280px] rounded-[20px] border border-[#262A56] p-[30px] bg-[#080A2A] hover:border-[#662FFF] transition-all duration-300 group">
                            <div className="w-[60px] h-[60px] rounded-full bg-[#662FFF] flex items-center justify-center mb-[20px]">
                                <img
                                    src="/assets/images/icons/crown-white.svg"
                                    className="w-8 h-8"
                                    alt="Manager"
                                />
                            </div>
                            <h3 className="font-bold text-[22px] text-white mb-[10px]">
                                For Managers
                            </h3>
                            <p className="text-sm text-[#6B6C7F] mb-[20px]">
                                Create courses, enroll students, and track progress
                            </p>
                            <div className="flex flex-col gap-[12px]">
                                <Link
                                    to="/manager/sign-in"
                                    className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset] hover:opacity-90 transition-opacity"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/manager/sign-up"
                                    className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-[#662FFF] border-[#662FFF] hover:bg-[#662FFF] hover:text-white transition-all duration-300"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>

                        <div className="w-[280px] rounded-[20px] border border-[#262A56] p-[30px] bg-[#080A2A] hover:border-[#662FFF] transition-all duration-300 group">
                            <div className="w-[60px] h-[60px] rounded-full bg-[#3D9DFF] flex items-center justify-center mb-[20px]">
                                <img
                                    src="/assets/images/icons/profile-2user-white.svg"
                                    className="w-8 h-8"
                                    alt="Student"
                                />
                            </div>
                            <h3 className="font-bold text-[22px] text-white mb-[10px]">
                                For Students
                            </h3>
                            <p className="text-sm text-[#6B6C7F] mb-[20px]">
                                Access your courses and track your learning progress
                            </p>
                            <Link
                                to="/student/sign-in"
                                className="w-full rounded-full border p-[14px_20px] text-center font-semibold text-white bg-[#3D9DFF] border-[#5BB1FF] shadow-[-10px_-6px_10px_0_#3D9DFF_inset] hover:opacity-90 transition-opacity"
                            >
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-[100px] py-[60px] border-t border-[#262A56]">
                <div className="text-center mb-[50px]">
                    <h2 className="font-extrabold text-[36px] text-white mb-[15px]">
                        How It Works
                    </h2>
                    <p className="text-lg text-[#6B6C7F] max-w-[600px] mx-auto">
                        Teachers subscribe to create courses, then register their students 
                        to access the platform and start learning.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-[30px]">
                    <div className="rounded-[20px] border border-[#262A56] p-[30px] bg-[#080A2A]">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#662FFF] flex items-center justify-center mb-[20px]">
                            <img
                                src="/assets/images/icons/crown-white.svg"
                                className="w-6 h-6"
                                alt="Subscribe"
                            />
                        </div>
                        <h3 className="font-bold text-xl text-white mb-[10px]">
                            1. Teacher Subscribes
                        </h3>
                        <p className="text-sm text-[#6B6C7F]">
                            Teachers sign up and pay to access the platform's course creation tools.
                        </p>
                    </div>

                    <div className="rounded-[20px] border border-[#262A56] p-[30px] bg-[#080A2A]">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#662FFF] flex items-center justify-center mb-[20px]">
                            <img
                                src="/assets/images/icons/note-white.svg"
                                className="w-6 h-6"
                                alt="Create"
                            />
                        </div>
                        <h3 className="font-bold text-xl text-white mb-[10px]">
                            2. Create Courses
                        </h3>
                        <p className="text-sm text-[#6B6C7F]">
                            Build engaging courses with videos, text content, and materials.
                        </p>
                    </div>

                    <div className="rounded-[20px] border border-[#262A56] p-[30px] bg-[#080A2A]">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#662FFF] flex items-center justify-center mb-[20px]">
                            <img
                                src="/assets/images/icons/profile-2user-white.svg"
                                className="w-6 h-6"
                                alt="Enroll"
                            />
                        </div>
                        <h3 className="font-bold text-xl text-white mb-[10px]">
                            3. Enroll Students
                        </h3>
                        <p className="text-sm text-[#6B6C7F]">
                            Teachers add students who can then login and access their courses.
                        </p>
                    </div>
                </div>
            </section>

            <section className="px-[100px] py-[60px] border-t border-[#262A56]">
                <div className="text-center mb-[50px]">
                    <h2 className="font-extrabold text-[36px] text-white mb-[15px]">
                        Key Features
                    </h2>
                    <p className="text-lg text-[#6B6C7F] max-w-[600px] mx-auto">
                        Everything you need to manage and deliver online learning effectively.
                    </p>
                </div>

                <div className="grid grid-cols-4 gap-[30px]">
                    <div className="rounded-[20px] border border-[#262A56] p-[25px] bg-[#080A2A] text-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#FF6B6B] flex items-center justify-center mb-[15px] mx-auto">
                            <img
                                src="/assets/images/icons/video-play-white.svg"
                                className="w-6 h-6"
                                alt="Video"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-[8px]">
                            Video Courses
                        </h3>
                        <p className="text-xs text-[#6B6C7F]">
                            Upload and stream video content easily
                        </p>
                    </div>

                    <div className="rounded-[20px] border border-[#262A56] p-[25px] bg-[#080A2A] text-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#4ECDC4] flex items-center justify-center mb-[15px] mx-auto">
                            <img
                                src="/assets/images/icons/note-white.svg"
                                className="w-6 h-6"
                                alt="Text"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-[8px]">
                            Text Content
                        </h3>
                        <p className="text-xs text-[#6B6C7F]">
                            Rich text lessons and materials
                        </p>
                    </div>

                    <div className="rounded-[20px] border border-[#262A56] p-[25px] bg-[#080A2A] text-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#FFE66D] flex items-center justify-center mb-[15px] mx-auto">
                            <img
                                src="/assets/images/icons/profile-circle-black.svg"
                                className="w-6 h-6"
                                alt="Students"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-[8px]">
                            Student Management
                        </h3>
                        <p className="text-xs text-[#6B6C7F]">
                            Add and manage student enrollments
                        </p>
                    </div>

                    <div className="rounded-[20px] border border-[#262A56] p-[25px] bg-[#080A2A] text-center">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#A855F7] flex items-center justify-center mb-[15px] mx-auto">
                            <img
                                src="/assets/images/icons/3dcube-white.svg"
                                className="w-6 h-6"
                                alt="Analytics"
                            />
                        </div>
                        <h3 className="font-bold text-lg text-white mb-[8px]">
                            Progress Tracking
                        </h3>
                        <p className="text-xs text-[#6B6C7F]">
                            Monitor learning progress and completion
                        </p>
                    </div>
                </div>
            </section>

            <footer className="px-[100px] py-[30px] border-t border-[#262A56] text-center">
                <p className="text-sm text-[#6B6C7F]">
                    &copy; {new Date().getFullYear()} LMS Platform. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
