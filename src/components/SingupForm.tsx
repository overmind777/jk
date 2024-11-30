import Input from "../shared/Input.tsx";
import Button from "../shared/Button.tsx";
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const SingupForm = () => {
    return (
        <Wrapper>
            <h2>Реєстрація</h2>
            <FormStyled action="">
                <Input text={'Name'}/>
                <Input text={'Email'}/>
                <Input text={'Password'}/>
                <Button color={'#1cb955'} text={'Реєстрація'}/>
                <Button color={'#cccbc8'} text={'Google'}/>
                <p>Вже є акаунт? <NavLinkStyled to={ "/login" }>Увійти</NavLinkStyled></p>
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