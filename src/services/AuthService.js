import { store } from "../Redux/Store";
import { SET_AUTH_LOADING, SET_LOGIN, SET_LOGOUT, SET_SIGNUP_NUMBER, SET_VENDOR } from '../Redux/Store/Slices/Auth';
import { errorToast, successToast } from "../utils/Utils";
import axios from "axios"
import { customerApiRoute } from "./Constant";

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
            store.dispatch(SET_VENDOR(false));
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
    },

    signup: async (number) => {
        try {
            store.dispatch(SET_SIGNUP_NUMBER(number))
            successToast("Success", "Number Saved")
        }
        catch (e) {
            errorToast(e)
        }
    },

    register: async (data) => {
        try {
            const res = await axios.post(`${customerApiRoute}/register`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log("Success Response=> ", res);
            successToast("Registered Successfully!");
        } catch (e) {
            // Check if the error is an AxiosError
            if (axios.isAxiosError(e)) {
                console.log("errors: ", e.response.data)
                if (e.response) {
                    // Handle validation errors from the response
                    if (e.response.data.errors) {
                        const errorMessages = e.response.data.errors;
                        let errorString = "";

                        // Prioritize specific error fields
                        if (errorMessages.email && errorMessages.email.length > 0) {
                            errorString += `Email: ${errorMessages.email.join(', ')}\n`;
                        }
                        if (errorMessages.cnic && errorMessages.cnic.length > 0) {
                            errorString += `CNIC: ${errorMessages.cnic.join(', ')}\n`;
                        }
                        if (errorMessages.phoneNumber && errorMessages.phoneNumber.length > 0) {
                            errorString += `Phone Number: ${errorMessages.phoneNumber.join(', ')}\n`;
                        }

                        // If no specific field errors, show all errors
                        if (!errorString) {
                            errorString = "Please fix the following errors:\n";
                            for (const field in errorMessages) {
                                if (errorMessages[field].length > 0) {
                                    errorString += `${field}: ${errorMessages[field].join(', ')}\n`;
                                }
                            }
                        }

                        // Show the validation errors
                        errorToast(errorString);
                    } else {
                        errorToast(`Error: ${e.response.data.message || 'An error occurred'}`);
                    }
                } else if (e.request) {
                    // The request was made but no response was received
                    console.log("Error request:", e.request);
                    errorToast("No response received from server.");
                } else {
                    // Something happened in setting up the request
                    console.log("Error message:", e.message);
                    errorToast(`Error: ${e.message}`);
                }
            } else {
                console.error(e);
                errorToast("An unexpected error occurred.");
            }
        }
    }
}