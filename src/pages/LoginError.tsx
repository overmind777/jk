import styled from 'styled-components';

const LoginError = () => {
    return (
        <Wrapper>
            <h2>'Для перегляду потрібно виконати вхід'</h2>
            <button>Login</button>
        </Wrapper>
    );
};

export default LoginError;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`