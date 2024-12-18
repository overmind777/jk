import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Modal from '../components/Modal/Modal.tsx';
import SinginForm from '../components/SinginForm.tsx';
import SingupForm from '../components/SingupForm.tsx';
import { useAppSelector } from '../helpers/hooks.ts';
import { selectModal } from '../redux/modal/modalSlice.ts';
import MenuUserModal from '../components/MenuUserModal.tsx';

const Layout = () => {
    const { isOpen, modalType } = useAppSelector( selectModal );

    // Об'єкт для рендерингу відповідних компонентів
    const modalContent: Record<string, JSX.Element> = {
        Login: <SinginForm />,
        Register: <SingupForm />,
        Menu: <MenuUserModal />,
    };

    const modalClasses: Record<string, string> = {
        Login: 'modal-login',
        Register: 'modal-register',
        Menu: 'modal-menu',
    };

    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            { isOpen && (
                <Modal
                    className={modalType ? modalClasses[modalType] : ''}
                    contentClassName={`modal-content ${modalType ? modalClasses[modalType] : ''}`}
                    overlayClassName={`modal-overlay ${modalType ? modalClasses[modalType] : ''}`}
                >
                    { modalType && modalContent[modalType] }
                </Modal>
            ) }
        </div>
    );
};

export default Layout;
