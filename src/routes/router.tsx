import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout.tsx';
import Home from '../pages/Home.tsx';
import Trainings from '../pages/Trainings.tsx';
import Trainers from '../pages/Trainers.tsx';
import Services from '../pages/Services.tsx';
import About from '../pages/About.tsx';
import AdminPanel from '../pages/AdminPanel.tsx';
import ProfileEdit from '../pages/ProfileEdit.tsx';
import NotFound from '../pages/NotFound.tsx';
import Profile from '../pages/Profile.tsx';
import LoginError from '../pages/LoginError.tsx';
import PrivateRoute from '../components/PrivateRoute.tsx';

const router = createBrowserRouter( [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'trainings', element: <Trainings /> },
            { path: 'trainers', element: <Trainers /> },
            { path: 'services', element: <Services /> },
            { path: 'about', element: <About /> },
            { path: 'login-error', element: <LoginError /> },
            {
                path: 'admin/*',
                element: (
                    <PrivateRoute>
                        <AdminPanel />
                    </PrivateRoute>
                ),
            },
            {
                path: 'user/*',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
                children: [
                    {
                        path: 'profile-edit',
                        element: <ProfileEdit />,
                    },
                ],
            },
            // 404 сторінка як дочірній маршрут Layout
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },

] );

export default router;