import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        </Stack.Navigator>
    )
}

export default UserNavigation

const styles = StyleSheet.create({})