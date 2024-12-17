import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonHeader from '../shared/ButtonHeader.tsx';
import { useAppDispatch, useAppSelector } from '../helpers/hooks.ts';
import { openModal, selectModal } from '../redux/modal/modalSlice.ts';
import { selectAuth } from '../redux/auth/selectors.ts';
import { selectUser } from '../redux/user/userSlice.ts';
import { UserState } from '../helpers/types.ts';

const Header = () => {
    const dispatch = useAppDispatch();
    const isAuthenticatedState = useAppSelector( selectAuth );
    const isAuthenticatedLocal = localStorage.getItem( 'Authenticated' );
    const user: UserState = useAppSelector( selectUser );
    const {isOpen} = useAppSelector(selectModal)

    const handleClick = ( type: string ): void => {
        if (!isOpen) {
            dispatch(openModal({ isOpen: true, type: type }));
        }
    };

    const isAuthenticated = isAuthenticatedState.isAuthenticated || isAuthenticatedLocal;

    return (
        <Wrapper>
            <NavLinkStyled to={ '/' }>Головна</NavLinkStyled>
            <NavLinkStyled to={ '/trainings' }>Тренінги</NavLinkStyled>
            <NavLinkStyled to={ '/trainers' }>Тренери</NavLinkStyled>
            <NavLinkStyled to={ '/services' }>Послуги</NavLinkStyled>
            <NavLinkStyled to={ '/about' }>Про нас</NavLinkStyled>
            <MenuWrapper>
                { user.name ? (
                    <ButtonHeader text={ user.name } onClick={()=> handleClick('Menu') } />
                ) : (
                    <ButtonHeader
                        text={ isAuthenticated ? 'Login' : 'Register' }
                        onClick={ () => handleClick( isAuthenticated ? 'Login' : 'Register' ) }
                    />
                ) }
                <ButtonHeader text={ 'UA' } />
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
`;

export const NavLinkStyled = styled( NavLink )`
    color: var(--dark-text);
`;

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
