import ReactModal from 'react-modal';
import React from 'react';
import {useAppDispatch, useAppSelector} from '../../helpers/hooks.ts';
import {openModal, selectModal} from '../../redux/modal/modalSlice.ts';
import {ReactModalStyled} from "./Modal.styled.ts";

ReactModal.setAppElement('#root');

const Modal = ({children}: { children: React.ReactNode }) => {

    const isOpen = useAppSelector(selectModal);
    const dispatch = useAppDispatch()

    return (
        <>
            <ReactModalStyled
                isOpen={isOpen.isOpen}
                onRequestClose={() => dispatch(openModal(false))}>
                {children}
            </ReactModalStyled>
        </>
    );
};

export default Modal;