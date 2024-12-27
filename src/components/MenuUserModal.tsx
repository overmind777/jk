import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../helpers/hooks.ts';
import {closeModal} from '../redux/modal/modalSlice.ts';
import React from "react";
import {logoutThunk} from "../redux/auth/operations.ts";
import ThemeSwitcher from './ThemeSwitcher.tsx';

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
            const tokens = sessionStorage.getItem('tokens');
            if (tokens && tokens.length > 0) {
                const {accessToken} = JSON.parse(tokens)
                dispatch(logoutThunk(accessToken))
            }
            sessionStorage.removeItem('tokens');
        }
    };

    return (
        <ModalMenuStyled>
            <ListStyled>
                <ItemStyled><SpanStyled onClick={handleClickProfile}>Профіль</SpanStyled></ItemStyled>
                <ItemStyled><SpanStyled onClick={handleClick}>Налаштування</SpanStyled></ItemStyled>
                <ItemStyled><ThemeSwitcher /></ItemStyled>
                <ItemStyled>
                    <SpanStyled onClick={handleClick}>Вийти</SpanStyled>
                </ItemStyled>
            </ListStyled>
        </ModalMenuStyled>
    );
};

export default MenuUserModal;

const ModalMenuStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const ListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    margin: 0;
    padding: 0;
    list-style: none;
`

const ItemStyled = styled.li`
    color: black;
`

export const SpanStyled = styled.span`
    cursor: pointer;
    &:hover {
        color: #747bff;
    }
`
