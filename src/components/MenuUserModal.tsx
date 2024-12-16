import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../helpers/hooks.ts';
import { closeModal } from '../redux/modal/modalSlice.ts';

const MenuUserModal = () => {
    const dispatch = useAppDispatch()

    const handleClick = ()=>{
        dispatch(closeModal())
    }

    return (
        <div>
            <ModalMenuStyled>
                <h2>Меню користувача</h2>
                <ul>
                    <li><Link to={ '/profile' } onClick={handleClick}>Профіль</Link></li>
                    <li><Link to={ '/settings' } onClick={handleClick}>Налаштування</Link></li>
                    <li><Link to={ '/' }>Вийти</Link>
                    </li>
                </ul>
            </ModalMenuStyled>
        </div>
    );
};

export default MenuUserModal;

const ModalMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    ul {
        list-style: none;
        padding: 0;

        li {
            margin: 10px 0;
            cursor: pointer;

            &:hover {
                color: #1cb955;
            }
        }
    }
`;
