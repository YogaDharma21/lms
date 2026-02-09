import { createBrowserRouter, redirect } from "react-router";
import { getSecureItem } from "../utils/secureStorage";
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const";
import ManagerHome from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/Layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-courses";
import ManageCourseDetailPage from "../pages/manager/course-detail";
import ManageContentCreatePage from "../pages/manager/course-content-create";
import ManageCoursePreviewPage from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student/StudentOverview";
import ManageStudentCreatePage from "../pages/manager/students-create";

interface Session {
    role: string;
    [key: string]: unknown;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManagerHome />,
    },
    {
        path: "/manager/sign-in",
        element: <SignInPage />,
    },
    {
        path: "/manager/sign-up",
        element: <SignUpPage />,
    },
    {
        path: "/success-checkout",
        element: <SuccessCheckoutPage />,
    },
    {
        path: "/manager/",
        id: MANAGER_SESSION,
        loader: async () => {
            const session = getSecureItem<Session>(STORAGE_KEY);

            if (!session || session.role !== "manager") {
                throw redirect("/manager/sign-in");
            }

            return session;
        },
        element: <LayoutDashboard isAdmin={true} />,
        children: [
            {
                index: true,
                element: <ManagerHome />,
            },
            {
                path: "/manager/courses",
                element: <ManageCoursePage />,
            },
            {
                path: "/manager/courses/create",
                element: <ManageCreateCoursePage />,
            },
            {
                path: "/manager/courses/:id",
                element: <ManageCourseDetailPage />,
            },
            {
                path: "/manager/courses/:id/create",
                element: <ManageContentCreatePage />,
            },
            {
                path: "/manager/courses/:id/preview",
                element: <ManageCoursePreviewPage />,
            },
            {
                path: "/manager/students",
                element: <ManageStudentsPage />,
            },
            {
                path: "/manager/students/create",
                element: <ManageStudentCreatePage />,
            },
        ],
    },
    {
        path: "/student",
        element: <LayoutDashboard isAdmin={false} />,
        children: [
            {
                index: true,
                element: <StudentPage />,
            },
            {
                path: "/student/detail-course/:id",
                element: <ManageCoursePreviewPage />,
            },
        ],
    },
]);
export default router;
