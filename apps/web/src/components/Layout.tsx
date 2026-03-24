import { Outlet, useLoaderData, useMatch } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function LayoutDashboard({
    isAdmin = true,
}: {
    isAdmin: boolean;
}) {
    const session = useLoaderData();
    const isManagerPreviewPage = useMatch("/manager/courses/:id/preview");
    const isStudentPreviewPage = useMatch("/student/detail-course/:id");
    return (
        <>
            {isManagerPreviewPage !== null || isStudentPreviewPage !== null ? (
                <Outlet />
            ) : (
                <div className="flex min-h-screen">
                    <Sidebar isAdmin={isAdmin} />
                    <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
                        <Header type={session?.role} />
                        <Outlet />
                    </main>
                </div>
            )}
        </>
    );
}
