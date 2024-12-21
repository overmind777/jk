import { Navigate } from 'react-router-dom';
import {useAppSelector} from "../helpers/hooks.ts";
import {selectAuthUser} from "../redux/auth/selectors.ts";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const {isLogin} = useAppSelector(selectAuthUser)
    console.log("PrivateRoute", isLogin)
    return isLogin ? children : <Navigate to="/login-error" replace />;
};

export default PrivateRoute