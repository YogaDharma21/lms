import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";
import SignInPage from "./SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManagerHome />
    },
    {
        path: "/manager/sign-in",
        element: <SignInPage />
    }
])
 export default router;
