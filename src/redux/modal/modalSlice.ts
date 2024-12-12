import { ModalState } from '../../helpers/types.ts';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store.ts';

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice( {
    name: 'modal',
    initialState,
    reducers: {
        openModal: ( state, { payload } ) => {
            state.isOpen = payload;
        },
    },
} );

export const modalReducer = modalSlice.reducer;
export const selectModal = ( state: RootState ) => state.modal.isOpen;
export const { openModal } = modalSlice.actions;