// navigation/VendorNavigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import VendorDashboard from '../../screens/vendor/VendorDashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorHeader from '../../components/VendorHeader';

const Stack = createNativeStackNavigator();

const VendorNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        header: () => (
          <VendorHeader title={route.name} navigation={navigation} />
        ),
      })}
      initialRouteName="vendorDashboard"
    >
      <Stack.Screen name="vendorDashboard" component={VendorDashboard} />
      {/* Add more vendor-related screens here */}
    </Stack.Navigator>
  );
};

export default VendorNavigation;

const styles = StyleSheet.create({});
