import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const isAuthenticated = sessionStorage.getItem( 'userData' );
    return isAuthenticated ? children : <Navigate to="/login-error" replace />;
};

export default PrivateRoute