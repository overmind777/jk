import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../shared/Button.tsx";
import { useAppDispatch } from "../helpers/hooks.ts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginThunk } from "../redux/auth/operations.ts";
import { loginSchema } from "../helpers/schemas.ts";
import { InputStyled } from "./SingupForm.tsx";
import * as yup from "yup";

type FormData = yup.InferType<typeof loginSchema>;

const SinginForm = () => {
    const dispatch = useAppDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>( {
        resolver: yupResolver( loginSchema ),
    } );
    const onSubmit = async ( data: FormData ) => {
        console.log( data )
        const user = await dispatch( loginThunk( data ) )
        console.log( `singUp 35 : ${ user }` )
    }
    return (
        <Wrapper>
            <h2>Вхід</h2>
            <FormStyled onSubmit={ handleSubmit( onSubmit ) }>
                <InputStyled { ...register( 'email' ) } placeholder={ 'Email' }/>
                <p>{ errors.email?.message }</p>
                <InputStyled { ...register( 'password' ) } placeholder={ 'Password' }/>
                <p>{ errors.password?.message }</p>
                <Button color={ '#1cb955' } text={ 'Увійти' }/>
                <p>Немає акаунту? <NavLinkStyled to={ "/register" }>Зареєструватися</NavLinkStyled></p>
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
`

export const NavLinkStyled = styled( NavLink )`
    color: #1cb955;
`
export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
