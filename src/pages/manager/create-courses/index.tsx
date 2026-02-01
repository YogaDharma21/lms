import { Link } from "react-router";

export default function ManageCreateCoursePage() {
    return (
        <>
            <header className="flex items-center justify-between gap-[30px]">
                <div>
                    <h1 className="font-extrabold text-[28px] leading-[42px]">
                        New Course
                    </h1>
                    <p className="text-[#838C9D] mt-[1]">
                        Create new future for company
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        to="/manager/courses"
                    >
                        Back To Course List
                    </Link>
                </div>
            </header>
            <form
                className="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
            >
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="title">
                        Course Name
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/note-favorite-black.svg"
                        />
                        <input
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="title"
                            name="title"
                            placeholder="Write better name for your course"
                            required
                            type="text"
                        />
                    </div>
                </div>
                <div className="relative flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="thumbnail">
                        Add a Thumbnail
                    </label>
                    <div
                        className="relative flex shrink-0 w-full h-[200px] rounded-[20px] border border-[#CFDBEF] overflow-hidden"
                        id="thumbnail-preview-container"
                    >
                        <button
                            className="absolute top-0 left-0 w-full h-full flex justify-center items-center gap-3 z-0"
                            id="trigger-input"
                            onclick="document.getElementById('thumbnail').click()"
                            type="button"
                        >
                            <img
                                alt="icon"
                                className="w-6 h-6"
                                src="/assets/images/icons/gallery-add-black.svg"
                            />
                            <span className="text-[#838C9D]">
                                Add an attachment
                            </span>
                        </button>
                        <img
                            alt="thumbnail"
                            className="w-full h-full object-cover hidden"
                            id="thumbnail-preview"
                            src=""
                        />
                        <button
                            className="absolute right-[10px] bottom-[10px] w-12 h-12 rounded-full z-10 hidden"
                            id="delete-preview"
                            type="button"
                        >
                            <img
                                alt="delete"
                                src="/assets/images/icons/delete.svg"
                            />
                        </button>
                    </div>
                    <input
                        accept="image/*"
                        className="absolute bottom-0 left-1/4 -z-10"
                        id="thumbnail"
                        name="thumbnail"
                        required
                        type="file"
                    />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="tagline">
                        Course Tagline
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/bill-black.svg"
                        />
                        <input
                            className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="tagline"
                            name="tagline"
                            placeholder="Write tagline for better copy"
                            type="text"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="category">
                        Select Category
                    </label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/bill-black.svg"
                        />
                        <select
                            className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="category"
                            name="category"
                        >
                            <option hidden value="">
                                Choose one category
                            </option>
                            <option value="">test</option>
                            <option value="">test</option>
                            <option value="">test</option>
                        </select>
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/arrow-down.svg"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold" htmlFor="desc">
                        Description
                    </label>
                    <div className="flex w-full rounded-[20px] border border-[#CFDBEF] gap-3 p-5  transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF] ring-2 ring-[#FF435A]">
                        <img
                            alt="icon"
                            className="w-6 h-6"
                            src="/assets/images/icons/note-black.png"
                        />
                        <textarea
                            className="appearance-none outline-none w-full font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
                            id="desc"
                            name="desc"
                            placeholder="Explain what this course about"
                            rows="5"
                        />
                    </div>
                    <span className="error-message text-[#FF435A]">
                        The description is required
                    </span>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button
                        className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
                        type="submit"
                    >
                        Save as Draft
                    </button>
                    <button
                        className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
                        type="submit"
                    >
                        Create Now
                    </button>
                </div>
            </form>
        </>
    );
}
