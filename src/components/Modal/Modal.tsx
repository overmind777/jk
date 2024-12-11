import ReactModal from 'react-modal';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks.ts';
import { openModal, selectModal } from '../../redux/modal/modalSlice.ts';
import {ReactModalStyled, WrapperStyled} from "./Modal.styled.ts";

ReactModal.setAppElement( '#root' );

const Modal = ({children}: { children: React.ReactNode }) => {

    const isOpen = useAppSelector(selectModal);
    const dispatch = useAppDispatch()

    return (
        <WrapperStyled>
            <ReactModalStyled
            isOpen={isOpen}
            onRequestClose={() => dispatch(openModal(false))}>
                {children}
            </ReactModalStyled>
        </WrapperStyled>
    );
};

export default Modal;