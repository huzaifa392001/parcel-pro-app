import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebar } from '../Redux/Store/Slices/General';
import {
  generalFontSize,
  textColor,
  themeColor,
  whiteColor,
  windowHeight,
  windowWidth,
} from '../styles/Theme';
import { useNavigation } from '@react-navigation/native';
import { AuthService } from '../services/AuthService';

const Sidebar = () => {
  const isActive = useSelector(state => state.general.isActive) || false;
  const sidebarAnim = useRef(new Animated.Value(-250)).current;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(sidebarAnim, {
      toValue: isActive ? 0 : -250, // Sidebar animates to 0 when active
      duration: 300, // Animation duration in ms
      useNativeDriver: true,
    }).start();
  }, [isActive]);

  const toggleDrawer = () => {
    dispatch(setSidebar(false));
  };

  const navigateToUrl = url => {
    navigation.navigate(url);
    toggleDrawer();
  };

  const listItems = [
    { name: 'home', url: 'home' },
    { name: 'Orders', url: 'scooter' },
    { name: 'Address', url: 'scooter' },
    { name: 'Profile', url: 'houseMoving' },
    { name: 'Settings', url: 'houseMoving' },
  ];

  const handleLogout = () => {
    AuthService.logout()
  }

  return (
    <>
      {isActive && (
        <TouchableOpacity onPress={toggleDrawer} style={[styles.backdrop]} />
      )}

      <Animated.View
        style={[styles.sidebar, { transform: [{ translateX: sidebarAnim }] }]}>
        <View style={styles.profileCont}>
          <View style={styles.userImgCont}>
            <Image
              style={styles.userImg}
              source={require('../assets/images/user.png')}
            />
          </View>
          <Text style={styles.userName}>Huzaifa Iqbal</Text>
        </View>
        <FlatList
          data={listItems}
          contentContainerStyle={styles.listCont}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigateToUrl(item?.url)}
              style={styles.linkBtn}>
              <Text style={styles.linkBtnText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <TouchableOpacity onPress={handleLogout} style={[styles.linkBtn, styles.logoutBtn]}>
          <Text style={[styles.linkBtnText, styles.logoutBtnText]}>Logout</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: '#0006',
    position: 'absolute',
    top: 0,
    left: 0, // Start backdrop after sidebar
    width: windowWidth, // Cover rest of the screen width
    height: windowHeight,
    zIndex: 1, // Lower than sidebar
  },
  sidebar: {
    position: 'absolute',
    width: 250,
    backgroundColor: whiteColor,
    overflow: 'hidden',
    shadowColor: '#0005',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    elevation: 5,
    height: '100%',
    paddingTop: 30,
    left: 0,
    zIndex: 2, // Higher than backdrop
  },
  profileCont: {
    paddingHorizontal: 20,
  },
  userImgCont: {
    width: 120,
    height: 120,
    borderRadius: 100,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    elevation: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  userImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  userName: {
    fontFamily: 'Axiforma-Bold',
    color: textColor,
    fontSize: generalFontSize + 4,
    marginBottom: 5,
    textAlign: 'center',
    marginTop: 5,
  },
  linkBtn: {
    backgroundColor: whiteColor,
    shadowColor: themeColor,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    elevation: 10,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  linkBtnText: {
    fontFamily: 'Axiforma-Medium',
    color: textColor,
    fontSize: generalFontSize,
    textTransform: 'capitalize',
  },
  listCont: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoutBtn: {
    marginHorizontal: 20,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    paddingVertical: 10,
    shadowColor: '#dc3545',
  },
  logoutBtnText: {
    color: whiteColor,
    textAlign: 'center',
    fontFamily: 'Axiforma-Bold',
  },
});
