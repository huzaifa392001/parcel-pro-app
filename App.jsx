import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import { Provider } from 'react-redux';
import { persistor, store } from './src/Redux/Store';
import 'react-native-gesture-handler';
import { handleNotificationPermission, handleForegroundNotification } from './src/utils/Utils';
import { PersistGate } from 'redux-persist/integration/react';
import Toast from 'react-native-toast-message';

function App() {
  useEffect(() => {
    handleNotificationPermission();
    handleForegroundNotification();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainNav />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
