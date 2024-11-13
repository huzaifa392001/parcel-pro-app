// navigation/UserNavigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHeader from '../../components/UserHeader';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import Notifications from '../../screens/user/Notifications';
import UserHome from '../../screens/user/userDashboard/UserHome';
import Scooter from '../../screens/user/userDashboard/Scooter';
import Truck from '../../screens/user/userDashboard/Truck';
import HouseMoving from '../../screens/user/userDashboard/HouseMoving';
import Step1 from '../../screens/user/Order/Step1';
import Step2 from '../../screens/user/Order/Step2';

const Drawer = createDrawerNavigator();

const UserNavigation = () => {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation, route }) => ({
          header: () => (
            <UserHeader
              title={route.name}
              onBackPress={navigation.canGoBack() ? navigation.goBack : null}
              navigation={navigation}
            />
          ),
        })}
        initialRouteName='home'
      >
        <Drawer.Screen
          name="home"
          component={UserHome}
        />
        <Drawer.Screen
          name="notification"
          component={Notifications}
        />
        <Drawer.Screen
          name="scooter"
          component={Scooter}
        />
        <Drawer.Screen
          name="truck"
          component={Truck}
        />
        <Drawer.Screen
          name="houseMoving"
          component={HouseMoving}
        />
        <Drawer.Screen
          name="step1"
          component={Step1}
        />
        <Drawer.Screen
          name="step2"
          component={Step2}
        />
        {/* Add more screens if needed */}
      </Drawer.Navigator>
    </>
  )
}

export default UserNavigation;

const styles = StyleSheet.create({});
