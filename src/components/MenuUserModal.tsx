import styled from 'styled-components';

const MenuUserModal = () => {
    return (
        <div>
                <ModalMenuStyled>
                    <h2>Меню користувача</h2>
                    <ul>
                        <li>Профіль</li>
                        <li>Налаштування</li>
                        <li>Вийти</li>
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
