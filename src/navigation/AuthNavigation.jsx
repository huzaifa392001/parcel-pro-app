import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthWelcome from '../screens/auth/AuthWelcome';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='signup'>
      <Stack.Screen
        name="welcome"
        component={AuthWelcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})