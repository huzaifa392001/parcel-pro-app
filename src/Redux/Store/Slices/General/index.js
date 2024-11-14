import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false
};

export const GeneralSlice = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.isActive = action.payload;
        },
    }
})

// Export the generated action creators and reducer
export const { setSidebar } = GeneralSlice.actions;
export default GeneralSlice.reducer;
