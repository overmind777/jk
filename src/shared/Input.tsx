import styled from "styled-components";

interface InputProps {
    text: string;
}

const Input = ({text}: InputProps)=> {

    return (
        <>
            <InputStyled type="text" placeholder={text}/>
        </>
    );
};

export default Input;



export const InputStyled = styled.input`
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(28, 185, 85, 0.2);
    background: rgba(28, 185, 85, 0.03);
    color: var(--dark-text);
    font-size: 16px;
`