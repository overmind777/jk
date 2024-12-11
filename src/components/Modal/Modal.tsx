import ReactModal from 'react-modal';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks.ts';
import { openModal, selectModal } from '../../redux/modal/modalSlice.ts';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

ReactModal.setAppElement( '#root' );

const Modal = ({children}: { children: React.ReactNode }) => {

    const isOpen = useAppSelector(selectModal);
    const dispatch = useAppDispatch()

    return (
        <div>
            <ReactModal
            isOpen={isOpen}
            onRequestClose={() => dispatch(openModal(false))}
            style={customStyles}>
                {children}
            </ReactModal>
        </div>
    );
};

export default Modal;