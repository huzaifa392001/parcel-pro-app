import { store } from "../Redux/Store";
import { SET_AUTH_LOADING, SET_LOGIN, SET_LOGOUT, SET_VENDOR } from '../Redux/Store/Slices/Auth';


export const AuthService = {
    login: async () => {
        store.dispatch(SET_AUTH_LOADING(true))
        try {
            store.dispatch(SET_LOGIN(true))
            store.dispatch(SET_AUTH_LOADING(false))
        } catch (error) {
            console.log('Error making request:', error);
            // errorToast(error.response.data.message)
            store.dispatch(SET_AUTH_LOADING(false))
            throw error;
        }
    },

    logout: async () => {
        try {
            store.dispatch(SET_LOGOUT(false));
        } catch (error) {
            console.log('Error making request:', error);
            // errorToast('Something Went Wrong')
            throw error;
        }
    },

    vendor: async () => {
        store.dispatch(SET_AUTH_LOADING(true));
        try {
            // Simulate vendor action (replace with actual API call)
            store.dispatch(SET_VENDOR(true));
        } catch (err) {
            console.error('Error making request:', err);
            throw err;
        } finally {
            store.dispatch(SET_AUTH_LOADING(false));
        }
    },

    delete: async () => {
        store.dispatch(SET_AUTH_LOADING(true));
        try {
            // Simulate vendor action (replace with actual API call)
            store.dispatch(SET_LOGOUT(false));
        } catch (err) {
            console.error('Error making request:', err);
            throw err;
        } finally {
            store.dispatch(SET_AUTH_LOADING(false));
        }
    }
}