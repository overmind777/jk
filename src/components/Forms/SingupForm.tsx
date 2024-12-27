import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { handleError, useAppDispatch } from '../../helpers/hooks.ts';
import { registerThunk } from '../../redux/auth/operations.ts';
import { registerSchema } from '../../helpers/schemas.ts';
import { closeModal, openModal } from '../../redux/modal/modalSlice.ts';
import ButtonForm from '../../shared/ButtonForm.tsx';
import { toast } from 'react-toastify';

import { FormStyled, InputStyled, Wrapper } from './Forms.styled.tsx';

type FormData = yup.InferType<typeof registerSchema>;

const SingupForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>( {
        resolver: yupResolver( registerSchema ),
    } );

    const onSubmit = async ( data: FormData ) => {
        dispatch( closeModal() );
        try {
            const result = await dispatch( registerThunk( data ) ).unwrap();
            if (result) {
                localStorage.setItem( 'Authenticated', 'true' );
                reset();
                navigate( '/' );
            } else {
                localStorage.removeItem( 'Authenticated' );
            }
        } catch (error) {
            toast.error( handleError( ( error as Error ).message ) );
        }
    };


    return (
        <Wrapper>
            <h2>Реєстрація</h2>
            <FormStyled onSubmit={ handleSubmit( onSubmit ) }>
                <InputStyled { ...register( 'username' ) } placeholder={ 'Name' } />
                <p>{ errors.username?.message }</p>
                <InputStyled { ...register( 'email' ) } placeholder={ 'Email' } />
                <p>{ errors.email?.message }</p>
                <InputStyled { ...register( 'password' ) } placeholder={ 'Password' } />
                <p>{ errors.password?.message }</p>
                <ButtonForm color={ '#1cb955' } text={ 'Реєстрація' } />
                <ButtonForm color={ '#cccbc8' } text={ 'Google' } />
                <p>Вже є акаунт? <span onClick={ () => {
                    dispatch( openModal( { isOpen: true, type: 'Login' } ) );
                } }>Увійти</span></p>
            </FormStyled>
        </Wrapper>
    );
};

export default SingupForm;

