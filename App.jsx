/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import 'react-native-gesture-handler';
import messaging, { firebase } from '@react-native-firebase/messaging';
import { SET_FCM_TOKEN } from './src/Redux/Store/Slices/General';


function App() {
  const requestPermission = async () => {
    try {
      const authorizationStatus = await messaging().requestPermission();
      console.log('iOS settings: ', settings.ios);
      if (authorizationStatus === messaging.AuthorizationStatus.AUTHORIZED) {
        console.log('User has notification permissions enabled.');
        getFCMToken();
      } else if (
        authorizationStatus === messaging.AuthorizationStatus.PROVISIONAL
      ) {
        console.log('User has provisional notification permissions.');
      } else {
        console.log('User has notification permissions disabled');
      }
    } catch (error) {
      console.log('error====>', error);
    }
  };
  const getFCMToken = async () => {
    // const dispatch = useDispatch();
    try {
      if (!messaging().isDeviceRegisteredForRemoteMessages) {
        await messaging().registerDeviceForRemoteMessages();
      }
      const token = await messaging().getToken();
      console.log('FCM token:', token);
      store.dispatch(SET_FCM_TOKEN(token))
      console.log("FCMTOKEN=> ", token)
      // Save or use the token as needed
    } catch (error) {
      console.log('Error getting FCM token:', error);
      console.log('Error getting FCM token:', error);
    }
  }
  useEffect(() => {
    firebase.initializeApp()
    requestPermission()
  },[]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
