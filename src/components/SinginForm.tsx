import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Input from "../shared/Input.tsx";
import Button from "../shared/Button.tsx";


const SinginForm = () => {
    return (
        <Wrapper>
            <h2>Вхід</h2>
            <FormStyled action="">
                <Input text={'Email'}/>
                <Input text={'Password'}/>
                <Button color={'#1cb955'} text={'Увійти'}/>
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
