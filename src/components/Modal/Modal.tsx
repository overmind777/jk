import ReactModal from 'react-modal';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks.ts';
import { openModal, selectModal } from '../../redux/modal/modalSlice.ts';
import { ReactModalStyled } from './Modal.styled.ts';


interface Props {
    className?: string;
    contentClassName?: string;
    overlayClassName?: string;
    children?: React.ReactNode;
}

ReactModal.setAppElement( '#root' );

const Modal: React.FC<Props> = ( {
                                     children,
                                     className,
                                     contentClassName,
                                     overlayClassName,
                                 }: Props ) => {

    const { isOpen } = useAppSelector( selectModal );
    const dispatch = useAppDispatch();

    return (
        <>
            <ReactModalStyled
                portalClassName={className}
                className={contentClassName}
                overlayClassName={overlayClassName}
                isOpen={isOpen} // Переконайся, що це коректний стан
                onRequestClose={() => dispatch(openModal({ isOpen: false, type: '' }))}
                shouldCloseOnOverlayClick={true}>
                { children }
            </ReactModalStyled>
        </>
    );
};

export default Modal;