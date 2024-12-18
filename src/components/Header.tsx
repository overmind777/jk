import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonHeader from '../shared/ButtonHeader.tsx';
import { useAppDispatch, useAppSelector } from '../helpers/hooks.ts';
import { openModal } from '../redux/modal/modalSlice.ts';
import { UserState } from '../helpers/types.ts';
import { selectUser } from '../redux/user/userSlice.ts';

const Header = () => {
    const dispatch = useAppDispatch();
    const isAuthenticatedLocal = localStorage.getItem( 'Authenticated' );
    console.log(isAuthenticatedLocal)
    let user: UserState = useAppSelector( selectUser );
    const userData = sessionStorage.getItem( 'userData' );

    if (userData) {
        try {
            const parsedData = JSON.parse( userData );
            user = parsedData?.user || user; // Перевірка наявності user
        } catch (error) {
            console.error( 'Error parsing userData:', error );
        }
    }


    const handleClick = ( type: string ): void => {
        dispatch( openModal( { isOpen: true, type: type } ) );
    };

    return (
        <Wrapper>
            <NavLinkStyled to={ '/' }>Головна</NavLinkStyled>
            <NavLinkStyled to={ '/trainings' }>Тренінги</NavLinkStyled>
            <NavLinkStyled to={ '/trainers' }>Тренери</NavLinkStyled>
            <NavLinkStyled to={ '/services' }>Послуги</NavLinkStyled>
            <NavLinkStyled to={ '/about' }>Про нас</NavLinkStyled>
            <MenuWrapper>
                { user.username ? (
                    <ButtonHeader text={ user.username } onClick={ () => handleClick( 'Menu' ) } />
                ) : (
                    <ButtonHeader
                        text={ isAuthenticatedLocal ? 'Login' : 'Register' }
                        onClick={ () => handleClick( isAuthenticatedLocal ? 'Login' : 'Register' ) }
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
    z-index: 10;
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