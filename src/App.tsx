import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router.tsx';
import AuthProvider from './components/AuthProvider.tsx';
import ThemesProvider from './components/Themes/ThemesProvider.tsx';

function App() {


    return (
        <AuthProvider>
            <ThemesProvider>
                <RouterProvider router={ router } />
            </ThemesProvider>
        </AuthProvider>
    );
}

export default App;
