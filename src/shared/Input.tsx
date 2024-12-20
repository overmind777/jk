import styled from 'styled-components';
import React from 'react';

interface InputProps {
    text: string;
    value: string;
    onChange: (value: string) => void;
}

const Input = ( { text, value, onChange }: InputProps ) => {

    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
        onChange( e.target.value );
    };

    return (
        <>
            <InputStyled
                type="text"
                placeholder={ text }
                value={ value }
                onChange={ handleChange }
            />
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
`;