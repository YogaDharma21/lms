import { Link } from "react-router";

export default function ManageStudentCreatePage() {
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        Add Student
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Create new future for company
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to="#"
                        className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    >
                        Import from BWA
                    </Link>
                </div>
            </header>
            <form
                action="manage-student.html"
                className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="relative flex flex-col gap-[10px]">
                    <label htmlFor="thumbnail" className="font-semibold">
                        Add a Avatar
                    </label>
                    <div className="flex items-center gap-[14px]">
                        <div
                            id="thumbnail-preview-container"
                            className="relative flex shrink-0 w-20 h-20 rounded-[20px] border border-[#CFDBEF] overflow-hidden"
                        >
                            <button
                                type="button"
                                id="trigger-input"
                                className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0"
                                onClick={() =>
                                    document.getElementById("thumbnail").click()
                                }
                            >
                                <img
                                    src="/assets/images/icons/gallery-add-black.svg"
                                    className="w-6 h-6"
                                    alt="icon"
                                />
                            </button>
                            <img
                                id="thumbnail-preview"
                                src=""
                                className="w-full h-full object-cover hidden"
                                alt="thumbnail"
                            />
                        </div>
                        <button
                            type="button"
                            id="delete-preview"
                            className="w-12 h-12 rounded-full z-10 hidden"
                        >
                            <img
                                src="/assets/images/icons/delete.svg"
                                alt="delete"
                            />
                        </button>
                    </div>
                    <input
                        type="file"
                        name="thumbnail"
                        id="thumbnail"
                        accept="image/*"
                        className="absolute bottom-0 left-1/4 -z-10"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="name" className="font-semibold">
                        Full Name
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/note-favorite-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Write your name"
                            required=""
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="email" className="font-semibold">
                        Email Address
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/sms-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Write your email address"
                            required=""
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="password" className="font-semibold">
                        Password
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            src="/assets/images/icons/lock-black.svg"
                            className="w-6 h-6"
                            alt="icon"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            placeholder="Type password"
                            required
                        />
                    </div>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button
                        type="submit"
                        className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                    >
                        Save as Draft
                    </button>
                    <button
                        type="submit"
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                    >
                        Add Now
                    </button>
                </div>
            </form>
        </>
    );
}
