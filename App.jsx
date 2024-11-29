import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import 'react-native-gesture-handler';
import { handleNotificationPermission, handleForegroundNotification } from './src/utils/Utils';

function App() {
  useEffect(() => {
    handleNotificationPermission();
    handleForegroundNotification();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
