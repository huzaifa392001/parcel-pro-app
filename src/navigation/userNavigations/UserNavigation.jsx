// navigation/UserNavigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import UserHeader from '../../components/UserHeader';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import Notifications from '../../screens/user/Notifications';
import UserHome from '../../screens/user/userDashboard/UserHome';
import Scooter from '../../screens/user/userDashboard/Scooter';
import Truck from '../../screens/user/userDashboard/Truck';
import HouseMoving from '../../screens/user/userDashboard/HouseMoving';
import Step1 from '../../screens/user/Order/Step1';
import Step2 from '../../screens/user/Order/Step2';
import Step3 from '../../screens/user/Order/Step3';
import ThankYou from '../../screens/user/Order/ThankYou';
import Settings from '../../screens/user/Settings';
import AllOrders from '../../screens/user/Order/AllOrders';
import Profile from '../../screens/user/Profile';
import RiderRegistration from '../../screens/user/RiderRegistration';
import VendorNavigation from '../VendorNavigation/VendorNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  const isVendor = useSelector((state) => state.auth.isVendor);

  return (
    <>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          header: () => (
            <UserHeader title={route.name} navigation={navigation} />
          ),
        })}
        initialRouteName="home"
      >
        <Stack.Screen name="home" component={UserHome} />
        <Stack.Screen name="notification" component={Notifications} />
        <Stack.Screen name="scooter" component={Scooter} />
        <Stack.Screen name="truck" component={Truck} />
        <Stack.Screen name="houseMoving" component={HouseMoving} />
        <Stack.Screen name="step1" component={Step1} />
        <Stack.Screen name="step2" component={Step2} />
        <Stack.Screen name="step3" component={Step3} />
        <Stack.Screen
          name="thankyou"
          component={ThankYou}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="settings" component={Settings} />
        <Stack.Screen name="orders" component={AllOrders} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen
          name="registration"
          component={RiderRegistration}
          options={{ headerShown: false }}
        />
        {isVendor && (
          <Stack.Screen
            name="vendorNavigation"
            component={VendorNavigation}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
      <Sidebar />
    </>
  );
};

export default UserNavigation;

const styles = StyleSheet.create({});
