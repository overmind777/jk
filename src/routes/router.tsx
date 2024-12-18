import {createBrowserRouter, Navigate} from "react-router-dom";
import Layout from "../pages/Layout.tsx";
import Home from "../pages/Home.tsx";
import Trainings from "../pages/Trainings.tsx";
import Trainers from "../pages/Trainers.tsx";
import Services from "../pages/Services.tsx";
import About from "../pages/About.tsx";
import Login from "../pages/Login.tsx";
import Registration from "../pages/Registration.tsx";
import AdminPanel from '../pages/AdminPanel.tsx';
import UserProfile from '../pages/UserProfile.tsx';
import ProfileEdit from '../pages/ProfileEdit.tsx';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = true; // Замініть на реальну логіку перевірки
    return isAuthenticated ? children : <Navigate to="/login" />;
};

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
            },
            {
                path: 'profile',
                element: <UserProfile/>,
            },
            {
                path: 'profileEdit',
                element: <ProfileEdit/>,
            }
        ]
    },
    {
        path: '/admin/*',
        element: (<PrivateRoute><AdminPanel /></PrivateRoute>),
    },
])

export default router