import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 40px;
    background: var(--background-color);
    border-radius: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SpanStyled = styled.span`
    cursor: pointer;
    color: aqua;
    &:hover {
        color: blue;
    }
`

export const InputStyled = styled.input`
    padding: 15px;
    border-radius: 10px;
    border: 1px solid rgba(28, 185, 85, 0.2);
    background: rgba(28, 185, 85, 0.03);
    color: var(--text-color);
    font-size: 16px;
`