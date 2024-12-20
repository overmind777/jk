import {NavLink, useNavigate} from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from "../helpers/hooks.ts";
import { registerThunk } from "../redux/auth/operations.ts";
import { registerSchema } from "../helpers/schemas.ts";
import {closeModal, openModal} from '../redux/modal/modalSlice.ts';

import styled from "styled-components";
import ButtonForm from '../shared/ButtonForm.tsx';


type FormData = yup.InferType<typeof registerSchema>;

const SingupForm = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<FormData>( {
        resolver: yupResolver( registerSchema ),
    } );

    const onSubmit = async (data: FormData) => {
        dispatch(closeModal())
        try {
            const result = await dispatch(registerThunk(data))//.unwrap();
            if (result) {
                localStorage.setItem("Authenticated", "true");
                reset();
                navigate( '/' );
            } else {
                localStorage.removeItem("Authenticated");
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Wrapper>
            <h2>Реєстрація</h2>
            <FormStyled onSubmit={ handleSubmit( onSubmit ) }>
                <InputStyled { ...register( 'username' ) } placeholder={ 'Name' }/>
                <p>{ errors.username?.message }</p>
                <InputStyled { ...register( 'email' ) } placeholder={ 'Email' }/>
                <p>{ errors.email?.message }</p>
                <InputStyled { ...register( 'password' ) } placeholder={ 'Password' }/>
                <p>{ errors.password?.message }</p>
                <ButtonForm color={ '#1cb955' } text={ 'Реєстрація'}/>
                <ButtonForm color={ '#cccbc8' } text={ 'Google' }/>
                <p>Вже є акаунт? <span onClick={ () => {
                    dispatch( openModal( { isOpen: true, type: 'Login' } ) );
                } }>Увійти</span></p>
            </FormStyled>
        </Wrapper>
    );
};

export default SingupForm;

export const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 40px;
    background: var(--dark);
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
`

export const NavLinkStyled = styled( NavLink )`
    color: #1cb955;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const InputStyled = styled.input`
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(28, 185, 85, 0.2);
    background: rgba(28, 185, 85, 0.03);
    color: var(--dark-text);
    font-size: 16px;
`