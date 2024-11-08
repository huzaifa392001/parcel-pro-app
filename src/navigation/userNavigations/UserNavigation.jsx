// navigation/UserNavigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import UserHeader from '../../components/UserHeader';
import UserDashboard from '../../screens/user/UserDashboard';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const UserNavigation = () => {
  return (
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
    >
      <Drawer.Screen
        name="dashboard"
        component={UserDashboard}
        options={{ title: 'Welcome' }}
      />
      {/* Add more screens if needed */}
    </Drawer.Navigator>
  )
}

export default UserNavigation;

const styles = StyleSheet.create({});
