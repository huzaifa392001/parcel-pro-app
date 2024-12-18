import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faMapMarkerAlt, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {
  bgColor,
  generalFontSize,
  textColor,
  themeColor,
  whiteColor,
} from '../styles/Theme';
import { store } from '../Redux/Store';
import { setSidebar } from '../Redux/Store/Slices/General';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const UserHeader = ({ navigation }) => {
  const [sidebarStatus] = useState(useSelector((state) => state.general.isActive))
  const route = useRoute();
  const toggleDrawer = () => {
    if (sidebarStatus) {
      store.dispatch(setSidebar(false))
    }
    else {
      store.dispatch(setSidebar(true))
    }
  };

  const isHomeRoute = route.name === 'home' || route.name === 'thankyou'; // Check if the current route is "home"

  return (
    <>
      <View style={styles.headerCont}>
        <View style={styles.userCont}>
          {isHomeRoute ? (
            <TouchableOpacity
              onPress={() => toggleDrawer()}
              style={styles.userImgCont}>
              <Image
                source={require('../assets/images/user.png')}
                style={styles.userImg}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backBtn}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                color={themeColor}
                size={generalFontSize + 4}
              />
            </TouchableOpacity>
          )}
          <View>
            <Text style={styles.welcome}>Good Day,</Text>
            <Text style={styles.userName}>Huzaifa Iqbal</Text>
            {/* <TouchableOpacity style={styles.locationBtn}>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                color={themeColor}
                size={generalFontSize}
              />
              <Text style={styles.locationBtnText}>Karachi</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('notification')}
          style={styles.notificationBtn}>
          <FontAwesomeIcon
            icon={faBell}
            size={generalFontSize + 4}
            color={themeColor}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  headerCont: {
    backgroundColor: bgColor,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userCont: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  userImgCont: {
    height: 60,
    width: 60,
    borderRadius: 100,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    backgroundColor: whiteColor,
  },
  userImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f6f6f6',
  },
  backBtn: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: whiteColor,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontFamily: 'Axiforma-Medium',
    color: textColor,
    fontSize: generalFontSize + 2,
  },
  userName: {
    fontFamily: 'Axiforma-Bold',
    color: textColor,
    fontSize: generalFontSize + 4,
  },
  locationBtn: {
    flexDirection: 'row',
  },
  locationBtnText: {
    fontFamily: 'Axiforma-Regular',
    color: textColor,
    fontSize: generalFontSize,
  },
  notificationBtn: {
    backgroundColor: whiteColor,
    height: 50,
    width: 50,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
