import {useEffect} from 'react';
import {logout} from '../redux/auth/authSlice.ts'; // Ваш Redux slice
import {useAppDispatch} from "../helpers/hooks.ts";
import {refreshThunk} from "../redux/auth/operations.ts";

const AuthProvider = ({children}: { children: JSX.Element }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const tokens = sessionStorage.getItem('tokens');
        if (tokens) {
            const token = JSON.parse(tokens);
            dispatch(refreshThunk(token.refreshToken))
                .unwrap()
                .then(item => {
                        sessionStorage.setItem('tokens', JSON.stringify(item))
                    }
                )
                .catch(() => {
                    dispatch(logout());
                    sessionStorage.removeItem('tokens');
                    sessionStorage.removeItem('isLogin');
                });
        } else {
            dispatch(logout());
        }
    }, [dispatch]);

    return <>{children}</>;
};

export default AuthProvider;
