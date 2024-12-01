import {NavLink} from "react-router-dom";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from "../shared/Button.tsx";

import styled from "styled-components";
import { yupResolver } from '@hookform/resolvers/yup';


const schema = yup.object({
    name: yup.string().min(1, "Name must contain more than 1 character")
        .max(32, "Name must contain less than 32").required(),
    email: yup.string().email("Email is not valid").required("Email is required").matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Email must match the format: example@mail.com"
    ),
    password: yup.string().min(8, "Enter a valid Password")
        .max(64, "Enter a valid Password").required(),
}).required();

type FormData = yup.InferType<typeof schema>;

const SingupForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <Wrapper>
            <h2>Реєстрація</h2>
            <FormStyled onSubmit={handleSubmit(onSubmit)}>
                <InputStyled {...register('name')} />
                <p>{errors.name?.message}</p>
                <InputStyled {...register('email')} />
                <p>{errors.email?.message}</p>
                <InputStyled {...register('password')} />
                <p>{errors.password?.message}</p>
                <Button color={'#1cb955'} text={'Реєстрація'} />
                <Button color={'#cccbc8'} text={'Google'} />
                <p>Вже є акаунт? <NavLinkStyled to={'/login'}>Увійти</NavLinkStyled></p>
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