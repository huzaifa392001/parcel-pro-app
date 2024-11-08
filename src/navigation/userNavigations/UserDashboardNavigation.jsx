import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserHome from '../../screens/user/userDashboard/UserHome';
import Profile from '../../screens/user/Profile';
import Tacking from '../../screens/user/userDashboard/Tacking';
import BottomNavTabs from '../../components/BottomNavTabs';

const Tab = createBottomTabNavigator();

const UserDashboardNavigation = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <BottomNavTabs {...props} />}
            screenOptions={{
                headerShown: false, // Hide headers by default
            }}
        >
            <Tab.Screen name="home" component={UserHome} options={{ title: 'Welcome' }} />
            <Tab.Screen name="tracking" component={Tacking} options={{ title: 'Tacking' }} />
            <Tab.Screen name="profile" component={Profile} options={{ title: 'Profile' }} />
        </Tab.Navigator>
    );
};

export default UserDashboardNavigation;
