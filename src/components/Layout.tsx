import { Outlet, useMatch } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function LayoutDashboard() {
    const isPreviewPage = useMatch("/manager/courses/:id/preview");
    console.log(isPreviewPage);
    return (
        <>
            {isPreviewPage !== null ? (
                <Outlet />
            ) : (
                <div className="flex min-h-screen">
                    <Sidebar />
                    <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                        <Header />
                        <Outlet />
                    </main>
                </div>
            )}
        </>
    );
}
