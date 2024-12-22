import styled from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../helpers/hooks.ts';
import {closeModal} from '../redux/modal/modalSlice.ts';
import {logout} from '../redux/user/userSlice.ts';
import React from "react";
import {logoutThunk} from "../redux/auth/operations.ts";

const MenuUserModal = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickProfile = () => {
        navigate('/profile')
        dispatch(closeModal())

    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLParagraphElement>): void => {
        const text = (e.target as HTMLButtonElement).innerText;
        if (text !== 'Вийти') {
            dispatch(closeModal());
        } else {
            navigate('/')
            dispatch(closeModal())
            dispatch(logout())
            const tokens = sessionStorage.getItem('tokens');
            if (tokens && tokens.length > 0) {
                const {accessToken} = JSON.parse(tokens)
                dispatch(logoutThunk(accessToken))
            }
            sessionStorage.removeItem('userData');
        }
    };

    return (
        <ModalMenuStyled>
            <ul>
                <li><Link to={'/profile'} onClick={handleClickProfile}><p>Профіль</p></Link></li>
                <li><Link to={'/settings'} onClick={handleClick}><p>Налаштування</p></Link></li>
                <li>
                    <p onClick={handleClick}>Вийти</p>
                </li>
            </ul>
        </ModalMenuStyled>
    );
};

export default MenuUserModal;

const ModalMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
        list-style: none;
        padding: 0;

        li {
            cursor: pointer;

            p {
                margin: 0;
                color: black;

                &:hover {
                    color: #1cb955;
                }
            }
        }
    }
`;
