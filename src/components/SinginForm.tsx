import styled from "styled-components";
import { NavLink } from "react-router-dom";


const SinginForm = () => {
    return (
        <Wrapper>
            <h2>Вхід</h2>
            <FormStyled action="">
                <InputStyled type="text" placeholder="Логін або Email"/>
                <InputStyled type="text" placeholder="Пароль"/>
                <ButtonStyled type="submit">Увійти</ButtonStyled>
                <p>Немає акаунту? <NavLinkStyled to={ "/ragister" }>Зареєструватися</NavLinkStyled></p>
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

export const InputStyled = styled.input`
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(28, 185, 85, 0.2);
    background: rgba(28, 185, 85, 0.03);
    color: var(--dark-text);
    font-size: 16px;
`

export const ButtonStyled = styled.button`
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    color: var(--dark-text);
    background: #1cb955;
    transition: all 0.3s ease;

    &:hover {
        background-color: #2d7d46;
        transform: translateY(-2px);
    }

`
