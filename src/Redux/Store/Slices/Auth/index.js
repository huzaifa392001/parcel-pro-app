import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { resetCart } from '../Cart';

// Initial state should be synchronous
const initialState = {
    isAuthenticated: false,
    data: null,
    token: '',
    loading: false,
};

// Slice definition
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        login: (state, action) => {
            state.isAuthenticated = true;
            // if (action.payload?.data?.token) {
            //     state.isAuthenticated = true;
            //     state.token = action.payload?.data?.token;
            //     state.data = action.payload?.data?.detail;

            //     // AsyncStorage operations should be handled outside of reducers
            //     AsyncStorage.setItem('token', action.payload?.data?.token);
            //     AsyncStorage.setItem('auth-data', JSON.stringify(action.payload?.data?.detail));
            // }
        },
        logout: (state, action) => {
            // state.data = null;
            // state.token = '';
            state.isAuthenticated = false;
            // AsyncStorage operations should be handled outside of reducers
            // AsyncStorage.clear();
            // action.payload.dispatch(resetCart());
        },
        updateUserProfile: (state, action) => {
            state.data = action.payload?.data?.user;
            // AsyncStorage operations should be handled outside of reducers
            // AsyncStorage.setItem('auth-data', JSON.stringify(action.payload?.data?.user));
        },
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
export const { setLoading, login, logout, updateUserProfile } = authSlice.actions;
export default authSlice.reducer;
