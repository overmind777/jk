import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const LoginError = () => {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <h2>'Для перегляду потрібно виконати вхід'</h2>
            <button>Login</button>
            <button onClick={()=>navigate('/')}>Home</button>
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