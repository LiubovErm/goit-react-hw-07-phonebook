import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: '',
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,

    reducers: {
        changeFilter(state, action) {
            state.filter = action.payload;
        },
    }
})

export const { changeFilter } = contactsSlice.actions;
export const getFilter = state => state.filter;
export default contactsSlice.reducer;