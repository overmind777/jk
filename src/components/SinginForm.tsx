import styled from 'styled-components';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../helpers/hooks.ts';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginThunk} from '../redux/auth/operations.ts';
import {loginSchema} from '../helpers/schemas.ts';
import {InputStyled} from './SingupForm.tsx';
import * as yup from 'yup';
import {openModal} from '../redux/modal/modalSlice.ts';
import ButtonForm from '../shared/ButtonForm.tsx';
import {selectUser} from "../redux/user/userSlice.ts";

type FormData = yup.InferType<typeof loginSchema>;

const SinginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const select = useAppSelector(selectUser)

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>( {
        resolver: yupResolver( loginSchema ),
    } );

    const onSubmit = async ( data: FormData ) => {
        dispatch(openModal(false))
        try {
            const result = await dispatch(loginThunk(data)).unwrap();
            reset();
            navigate('/');
            if (result) {
                console.log('ok')
                sessionStorage.setItem('accessToken', result.tokens.accessToken);
                select.user.isLogin = true;
            }
        } catch (error) {
            console.error("Registration failed:", error);
            localStorage.setItem("Authenticated", "false");
        }
    };

    return (
        <Wrapper>
            <h2>Вхід</h2>
            <FormStyled onSubmit={ handleSubmit( onSubmit ) }>
                <InputStyled { ...register( 'email' ) } placeholder={ 'Email' } />
                <p>{ errors.email?.message }</p>
                <InputStyled { ...register( 'password' ) } placeholder={ 'Password' } />
                <p>{ errors.password?.message }</p>
                <ButtonForm color={ '#1cb955' } text={ 'Увійти' } />
                <p>Немає акаунту? <NavLinkStyled to={ '/register' }>Зареєструватися</NavLinkStyled></p>
            </FormStyled>
        </Wrapper>
    );
};

export default SinginForm;

export const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 40px;
    background: var(--dark);
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
`;

export const NavLinkStyled = styled( NavLink )`
    color: #1cb955;
`;
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
