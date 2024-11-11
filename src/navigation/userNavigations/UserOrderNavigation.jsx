import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Step1 from '../../screens/user/Order/step1'

const Stack = createNativeStackNavigator

const UserOrderNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='step1'>
            <Stack.Screen
                name="step"
                component={Step1}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default UserOrderNavigation