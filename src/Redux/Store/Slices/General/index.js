import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    isOnlineTransfer: false,
};

export const GeneralSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.isActive = action.payload;
        },
        SET_ONLINE_TRANSFER_STATE: (state, action) => {
            state.isOnlineTransfer = action.payload;
        },
    }
})

// Export the generated action creators and reducer
export const { setSidebar, SET_ONLINE_TRANSFER_STATE } = GeneralSlice.actions;
export default GeneralSlice.reducer;
