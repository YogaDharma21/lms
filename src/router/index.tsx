import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/Layout";
import ManageCoursePage from "../pages/manager/courses";
import ManageCreateCoursePage from "../pages/manager/create-courses";
import ManageCourseDetailPage from "../pages/manager/course-detail";

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
        element: <LayoutDashboard />,
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
            }
        ],
    },
]);
export default router;
