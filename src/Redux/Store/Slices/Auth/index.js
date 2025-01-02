import { createSlice } from '@reduxjs/toolkit';

// Initial state should be synchronous
const initialState = {
    loading: false,
    isAuthenticated: false,
    isVendor: false,
    signUpNumber: ""
};

// Slice definition
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        SET_AUTH_LOADING: (state, action) => {
            state.loading = action.payload;
        },
        SET_LOGIN: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        SET_LOGOUT: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        SET_VENDOR: (state, action) => {
            state.isVendor = action.payload;
        },
        SET_SIGNUP_NUMBER: (state, action) => {
            state.signUpNumber = action.payload;
        }
    }
});

// Async function to initialize state from AsyncStorage
export const initializeAuth = () => async (dispatch) => {
    const authData = await AsyncStorage.getItem('auth-data');
    const token = await AsyncStorage.getItem('token');
    if (authData && token) {
        dispatch(login({ data: { token, detail: JSON.parse(authData) } }));
    }
};

// Export the generated action creators and reducer
export const { SET_AUTH_LOADING, SET_LOGIN, SET_LOGOUT, SET_VENDOR, SET_SIGNUP_NUMBER } = authSlice.actions;
export default authSlice.reducer;
