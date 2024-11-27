import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import Home from "../pages/Home.tsx";
import Trainings from "../pages/Trainings.tsx";
import Trainers from "../pages/Trainers.tsx";
import Services from "../pages/Services.tsx";
import About from "../pages/About.tsx";
import Login from "../pages/Login.tsx";
import Registration from "../pages/Registration.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'trainings',
                element: <Trainings/>,
            },
            {
                path: 'trainers',
                element: <Trainers/>,
            },
            {
                path: 'services',
                element: <Services/>,
            },
            {
                path: 'about',
                element: <About/>,
            },
            {
                path: 'login',
                element: <Login/>,
            },
            {
                path: 'register',
                element: <Registration/>,
            }
        ]
    }
])

export default router