import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Modal from '../components/Modal/Modal.tsx';
import SinginForm from '../components/SinginForm.tsx';
import SingupForm from '../components/SingupForm.tsx';
import { useAppSelector } from '../helpers/hooks.ts';
import { selectModal } from '../redux/modal/modalSlice.ts';

const Layout = () => {
    const registred = localStorage.getItem( 'Authenticated' );
    const isOpenModal = useAppSelector(selectModal)
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            {isOpenModal ? (<Modal>{ registred ? ( <SinginForm /> ) : ( <SingupForm /> ) }</Modal>) : null}
        </div>
    );
};

export default Layout;