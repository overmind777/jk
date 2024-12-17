import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../helpers/hooks.ts';
import { closeModal, openModal } from '../redux/modal/modalSlice.ts';
import { logout } from '../redux/user/userSlice.ts';
import React from "react";

const MenuUserModal = () => {
    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLParagraphElement>): void => {
        const text = (e.target as HTMLButtonElement).innerText;
        if (text !== 'Вийти'){
            dispatch( closeModal() );
        } else {
            dispatch( openModal( { isOpen: false, type: '' } ))
            dispatch(logout())
        }
    };

    return (
        <ModalMenuStyled>
            <ul>
                <li><Link to={ '/profile' } onClick={ handleClick }><p>Профіль</p></Link></li>
                <li><Link to={ '/settings' } onClick={ handleClick }><p>Налаштування</p></Link></li>
                <li>
                    <p onClick={ handleClick }>Вийти</p>
                </li>
            </ul>
        </ModalMenuStyled>
    );
};

export default MenuUserModal;

const ModalMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    background-color: white;

    ul {
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
