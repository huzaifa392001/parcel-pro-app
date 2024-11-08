/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNav from './src/navigation/MainNav';
import { Provider } from 'react-redux';
import { store } from './src/Redux/Store';
import 'react-native-gesture-handler';

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
