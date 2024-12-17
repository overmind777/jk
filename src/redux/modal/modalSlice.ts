import { ModalState } from '../../helpers/types.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const initialState: ModalState = {
    isOpen: false,
    modalType: null,
};

const modalSlice = createSlice( {
    name: 'modal',
    initialState,
    reducers: {
        openModal: ( state, action: PayloadAction<{ isOpen: boolean; type: string }> ) => {
            state.isOpen = action.payload.isOpen;
            state.modalType = action.payload.type;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
        },
    },
} );

export const modalReducer = modalSlice.reducer;
export const selectModal = ( state: RootState ) => state.modal;
export const { openModal, closeModal } = modalSlice.actions;