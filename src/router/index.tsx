import { createBrowserRouter } from "react-router";
import ManagerHome from "../pages/manager/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ManagerHome />
    }
])
 export default router;
