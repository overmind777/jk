import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Modal from '../components/Modal/Modal.tsx';
import SinginForm from '../components/SinginForm.tsx';
import SingupForm from '../components/SingupForm.tsx';
import { useAppSelector } from '../helpers/hooks.ts';
import { selectModal } from '../redux/modal/modalSlice.ts';
import MenuUserModal from '../components/MenuUserModal.tsx';

const Layout = () => {
    const openModal = useAppSelector(selectModal)

    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            {openModal && (<Modal>{ openModal.modalType === 'Login' ? ( <SinginForm /> ) : (openModal.modalType === 'Register' ? ( <SingupForm /> ) : (<MenuUserModal/>)) }</Modal>)}
        </div>
    );
};

export default Layout;