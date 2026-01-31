import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/Layout";
import ManageCoursePage from "../pages/manager/courses";

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
        ],
    },
]);
export default router;
