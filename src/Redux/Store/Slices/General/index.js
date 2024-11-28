import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isActive: false,
    isOnlineTransfer: false,
    isNotificationActive: false,
    FCMToken: ''
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
        SET_NOTIFICATION_STATUS: (state, action) => {
            state.isNotificationActive = action.payload
        },
        SET_FCM_TOKEN: (state, action) => {
            state.FCMToken = action.payload
        }
    }
})

// Export the generated action creators and reducer
export const { setSidebar, SET_ONLINE_TRANSFER_STATE, SET_NOTIFICATION_STATUS, SET_FCM_TOKEN } = GeneralSlice.actions;
export default GeneralSlice.reducer;
