import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi'
import contactsSlice from './contactSlice'
import { modalSlice } from './modalSlice';

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: contactsSlice,
        [modalSlice.name]: modalSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),
})
