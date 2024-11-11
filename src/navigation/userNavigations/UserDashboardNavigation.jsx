// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import UserHome from '../../screens/user/userDashboard/UserHome';
// import Profile from '../../screens/user/Profile';
// import Tacking from '../../screens/user/userDashboard/Tacking';
// import BottomNavTabs from '../../components/BottomNavTabs';
// import UserHeader from '../../components/UserHeader';
// import Scooter from '../../screens/user/userDashboard/Scooter';
// import Truck from '../../screens/user/userDashboard/Truck';
// import HouseMoving from '../../screens/user/userDashboard/HouseMoving';

// const Tab = createBottomTabNavigator();

// const UserDashboardNavigation = () => {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <BottomNavTabs {...props} />}
//       screenOptions={({ navigation, route }) => ({
//         header: () => (
//           <UserHeader
//             title={route.name}
//             onBackPress={navigation.canGoBack() ? navigation.goBack : null}
//             navigation={navigation}
//           />
//         ),
//       })}
//       initialRouteName='scooter'
//     >
//       <Tab.Screen
//         name="home"
//         component={UserHome}
//       />
//       <Tab.Screen
//         name="scooter"
//         component={Scooter}
//       />
//       <Tab.Screen
//         name="truck"
//         component={Truck}
//       />
//       <Tab.Screen
//         name="houseMoving"
//         component={HouseMoving}
//       />
//     </Tab.Navigator>
//   );
// };

// export default UserDashboardNavigation;
