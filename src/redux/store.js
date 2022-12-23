import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi'
import contactsSlice from './contactSlice'

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        filter: contactsSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(contactsApi.middleware),
})
