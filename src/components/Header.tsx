import { NavLink } from "react-router-dom";
import styled from "styled-components";


const Header = () => {

    const registred = localStorage.getItem("Authenticated");
    console.log(registred);

    return (
        <Wrapper>
            <NavLinkStyled to={ '/' }>Головна</NavLinkStyled>
            <NavLinkStyled to={ '/trainings' }>Тренінги</NavLinkStyled>
            <NavLinkStyled to={ '/trainers' }>Тренери</NavLinkStyled>
            <NavLinkStyled to={ '/services' }>Послуги</NavLinkStyled>
            <NavLinkStyled to={ '/about' }>Про нас</NavLinkStyled>
            <MenuWrapper>
                {registred ? (
                    <NavLinkStyled to={'/login'}>Увійти</NavLinkStyled>
                ):(
                    <NavLinkStyled to={'/register'}>Register</NavLinkStyled>
                )}
                <h3>UA</h3>
            </MenuWrapper>
        </Wrapper>
    );
};

export default Header;

export const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    background: linear-gradient(to right, #1cb955, #2d7d46, #1cb955);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
`
export const NavLinkStyled = styled( NavLink )`
    color: var(--dark-text);
`

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`