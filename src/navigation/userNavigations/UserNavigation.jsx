// navigation/UserNavigation.js
import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import UserHeader from '../../components/UserHeader';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import Notifications from '../../screens/user/Notifications';
import UserHome from '../../screens/user/userDashboard/UserHome';
import Scooter from '../../screens/user/userDashboard/Scooter';
import Truck from '../../screens/user/userDashboard/Truck';
import HouseMoving from '../../screens/user/userDashboard/HouseMoving';
import Step1 from '../../screens/user/Order/Step1';
import Step2 from '../../screens/user/Order/Step2';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sidebar from '../../components/Sidebar';
import Step3 from '../../screens/user/Order/Step3';
import ThankYou from '../../screens/user/Order/ThankYou';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <>
      <Stack.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={({navigation, route}) => ({
          header: () => (
            <UserHeader
              title={route.name}
              onBackPress={navigation.canGoBack() ? navigation.goBack : null}
              navigation={navigation}
            />
          ),
        })}
        initialRouteName="step3">
        <Stack.Screen name="home" component={UserHome} />
        <Stack.Screen name="notification" component={Notifications} />
        <Stack.Screen name="scooter" component={Scooter} />
        <Stack.Screen name="truck" component={Truck} />
        <Stack.Screen name="houseMoving" component={HouseMoving} />
        <Stack.Screen name="step1" component={Step1} />
        <Stack.Screen name="step2" component={Step2} />
        <Stack.Screen name="step3" component={Step3} />
        <Stack.Screen name="thankyou" component={ThankYou} />
        {/* Add more screens if needed */}
      </Stack.Navigator>

      <Sidebar />
    </>
  );
};

export default UserNavigation;

const styles = StyleSheet.create({});
