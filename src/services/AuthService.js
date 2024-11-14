import { store } from "../Redux/Store";
import { login as loginAction, logout as logoutAction, setLoading, } from '../Redux/Store/Slices/Auth';


export const AuthService = {
    login: async (credentials) => {
        store.dispatch(setLoading(true))
        try {
            store.dispatch(loginAction())
            store.dispatch(setLoading(false))
            return response.data;
        } catch (error) {
            console.log('Error making request:', error);
            // errorToast(error.response.data.message)
            store.dispatch(setLoading(false))
            throw error;
        }
    },

    logout: async () => {
        try {
            store.dispatch(logoutAction());
            return response.data;
        } catch (error) {
            console.log('Error making request:', error);
            // errorToast('Something Went Wrong')
            throw error;
        }
    },
}