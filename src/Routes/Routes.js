import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../Login/Registration/Registration";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            }
        ]
    }
])