import { Link, useRouteLoaderData } from "react-router";
import { removeSecureItem } from "../utils/secureStorage";
import { MANAGER_SESSION, STORAGE_KEY, STUDENT_SESSION } from "../utils/const";

export default function Header({ type = "manager" }: { type: string }) {
    const session = useRouteLoaderData(
        type === "manager" ? MANAGER_SESSION : STUDENT_SESSION,
    );

    const handleLogout = () => {
        removeSecureItem(STORAGE_KEY);
        window.location.replace(`/${type}/sign-in`);
    };

    return (
        <div
            className="flex items-center justify-between gap-[30px]"
            id="TopBar"
        >
            <form className="flex items-center w-full max-w-[450px] rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
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
            <div className="relative flex items-center justify-end gap-[14px] group">
                <div className="text-right">
                    <p className="font-semibold">{session?.name}</p>
                    <p className="text-sm leading-[21px] text-[#838C9D]">
                        {session?.role}
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
                    className="absolute top-full hidden group-hover:block z-30"
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
                            <button onClick={handleLogout} type="button">
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
