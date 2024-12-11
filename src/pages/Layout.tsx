import { Outlet } from 'react-router-dom';
import Header from '../components/Header.tsx';
import Modal from '../components/Modal/Modal.tsx';
import SinginForm from '../components/SinginForm.tsx';
import SingupForm from '../components/SingupForm.tsx';

const Layout = () => {
    const registred = localStorage.getItem( 'Authenticated' );
    return (
        <div>
            <Header />
            <div>
                <Outlet />
            </div>
            <Modal>{ registred ? ( <SinginForm /> ) : ( <SingupForm /> ) }</Modal>
        </div>
    );
};

export default Layout;