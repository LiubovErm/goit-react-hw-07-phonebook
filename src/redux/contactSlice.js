import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { initialContacts } from '../components/List/initialContacts.js';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: initialContacts,
        filter: '',
    },
    reducers: {
        addContact(state, action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state, action) {
            state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
        },
        changeFilter(state, action) {
            state.filter = action.payload;
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage
};

export const persistedContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

// Selectors
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

