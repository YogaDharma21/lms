import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";
import SignInPage from "./SignIn";
import SignUpPage from "./SignUp";
import SuccessCheckoutPage from "./SuccessCheckout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManagerHome />
    },
    {
        path: "/manager/sign-in",
        element: <SignInPage />
    },
    {
        path: "/manager/sign-up",
        element: <SignUpPage />
    },
    {
        path: "/success-checkout",
        element: <SuccessCheckoutPage />
    }
])
export default router;
