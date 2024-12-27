import { useNavigate } from 'react-router-dom';
import { handleError, useAppDispatch } from '../../helpers/hooks.ts';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginThunk } from '../../redux/auth/operations.ts';
import { loginSchema } from '../../helpers/schemas.ts';
import * as yup from 'yup';
import { closeModal, openModal } from '../../redux/modal/modalSlice.ts';
import ButtonForm from '../../shared/ButtonForm.tsx';
import { login } from '../../redux/auth/authSlice.ts';
import { toast } from 'react-toastify';
import { createUserData } from '../../redux/user/operations.ts';
import { FormStyled, Wrapper, SpanStyled, InputStyled } from './Forms.styled.tsx';

type FormData = yup.InferType<typeof loginSchema>;

const SinginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>( {
        resolver: yupResolver( loginSchema ),
    } );

    const onSubmit = async ( data: FormData ) => {
        dispatch( closeModal() );
        try {
            const result = await dispatch( loginThunk( data ) ).unwrap();
            reset();
            navigate( '/' );
            if (result) {
                await dispatch( createUserData( data.email ) );
                dispatch( login( { email: data.email, status: 200 } ) );
                localStorage.setItem( 'Authenticated', 'true' );
                sessionStorage.setItem( 'tokens', JSON.stringify( result ) );
            }
        } catch (error) {
            toast.error( handleError( ( error as Error ).message ) );
            throw handleError( ( error as Error ).message );
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
                <p>Немає акаунту? <SpanStyled onClick={ () => {
                    dispatch( openModal( { isOpen: true, type: 'Register' } ) );
                } }>Зареєструватися</SpanStyled></p>
            </FormStyled>
        </Wrapper>
    );
};

export default SinginForm;

