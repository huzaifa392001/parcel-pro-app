// navigation/VendorNavigation.js
import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const VendorNavigation = () => {
    return (
        <>
            {/* <Stack.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation, route }) => ({
          header: () => (
            <UserHeader
              title={route.name}
              navigation={navigation}
            />
          ),
        })}
        initialRouteName="home">
        
      </Stack.Navigator> */}
        </>
    );
};

export default VendorNavigation;

const styles = StyleSheet.create({});
