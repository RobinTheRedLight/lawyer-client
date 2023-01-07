import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import LoginPage from "../Login/LoginPage/LoginPage";
import Registration from "../Login/Registration/Registration";
import Home from "../Pages/Home/Home";
import Reviews from "../Pages/Reviews/Reviews";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <h1 className="text-7xl text-center">404 Not Found</h1>
    },
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
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/review',
                element:<Reviews></Reviews>
            }
        ]
    }
])