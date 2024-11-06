import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserHome from '../screens/user/UserHome';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={UserHome}
                options={{ title: 'Welcome' }}
            />
        </Stack.Navigator>
    )
}

export default UserNavigation

const styles = StyleSheet.create({})