import styled from "styled-components";

interface ButtonProps {
    text?: string;
    onClick?: () => void;
    color?: string;
}

const Button = ({text, onClick, color}: ButtonProps) => {
    return (
        <>
            <ButtonStyled onClick={onClick} color={color}>{text}</ButtonStyled>
        </>
    );
};

export default Button;

export const ButtonStyled = styled.button<ButtonProps>`
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
    color: var(--dark-text);
    //background-color: ;
    background-color: ${({color}) => color};
    
    transition: all 0.3s ease;

    &:hover {
        background-color: #2d7d46;
        transform: translateY(-2px);
    }
`