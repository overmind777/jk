import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../helpers/hooks.ts';
import { closeModal, openModal } from '../redux/modal/modalSlice.ts';
import { logout } from '../redux/user/userSlice.ts';

const MenuUserModal = () => {
    const dispatch = useAppDispatch();

    const handleClick = (e) => {
        console.log(e)
        if (e.target.innerText !== 'Вийти'){
            dispatch( closeModal() );
        } else {
            dispatch( openModal( { isOpen: false, type: '' } ))
            dispatch(logout())
        }
    };

    return (
        <ModalMenuStyled>
            <ul>
                <li><Link to={ '/profile' } onClick={ handleClick }>Профіль</Link></li>
                <li><Link to={ '/settings' } onClick={ handleClick }>Налаштування</Link></li>
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
    padding: 10px;
    background-color: white;

    ul {
        list-style: none;
        padding: 0;

        li {
            margin: 10px 0;
            cursor: pointer;

            &:hover {
                color: #1cb955;
            }

            p {
                color: black;
            }
        }
    }
`;
