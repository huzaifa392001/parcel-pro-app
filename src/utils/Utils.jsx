// timeUtils.js

import messaging from '@react-native-firebase/messaging';
import { store } from "../Redux/Store"
import { SET_FCM_TOKEN, SET_NOTIFICATION_STATUS } from '../Redux/Store/Slices/General';
import { PermissionsAndroid, Alert } from 'react-native';
import notifee from "@notifee/react-native"
import Toast from 'react-native-toast-message';

// Function to format time as 12-hour format with AM/PM
export const formatTime = (date) => {
    let hours = date.getHours()
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const period = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12
    hours = hours ? hours : 12 // Hour '0' should be '12'
    return `${hours}:${minutes} ${period}` // Format to '12:30 PM'
}

// Function to round time to the nearest 30 minutes
export const roundToNearest30Min = (date) => {
    let minutes = date.getMinutes()
    const remainder = minutes % 30
    if (remainder !== 0) {
        date.setMinutes(minutes + (30 - remainder)) // Round up to the nearest 30 minutes
    }
    return date
}

// Function to validate if the time is between 9 AM and 5 PM
export const isValidTime = (time) => {
    const hours = time.getHours()
    return hours >= 9 && hours <= 17 // Ensure time is between 9 AM and 5 PM
}

export const handleNotificationPermission = async () => {
    try {
        // Request notification permissions
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Notification permission granted.');
            store.dispatch(SET_NOTIFICATION_STATUS(true));

            // Fetch and store FCM token
            const token = await messaging().getToken();
            if (token) {
                console.log('FCM Token:', token);
                store.dispatch(SET_FCM_TOKEN(token));
            } else {
                console.log('No FCM token found.');
            }
        } else {
            console.log('Notification permission denied.');
            store.dispatch(SET_NOTIFICATION_STATUS(false));
        }
    } catch (error) {
        console.error('Error handling notification permission:', error);
    }
};

export const handleForegroundNotification = () => {
    messaging().onMessage(async (remoteMessage) => {
        const noti = JSON.stringify(remoteMessage.notification);
        console.log(noti)
        // Alert.alert('New Notification!', JSON.stringify(remoteMessage.notification));
        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'noti?.title',
            body: 'noti?.body',

        });
    });
};

export const errorToast = (text) => {
    Toast.show({
        type: "error",
        text1: "An Error Occurred!",
        text2: text
    })
}

export const successToast = (text1, text2) => {
    Toast.show({
        type: "success",
        text1: text1,
        text2: text2 || null
    })
}