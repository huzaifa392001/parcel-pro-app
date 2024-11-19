import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  generalFontSize,
  textColor,
  themeColor,
  whiteColor,
} from '../styles/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLongArrowRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const Banner = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.banner}>
      <Text style={styles.heading}>Let's Get your Package Delivered!</Text>
      <View style={styles.imgCont}>
        <Image
          style={styles.img}
          source={require('../assets/images/homeBanner.png')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('scooter')}
        style={styles.themeBtn}>
        <Text style={styles.themeBtnText}>Get Started</Text>
        <FontAwesomeIcon
          icon={faLongArrowRight}
          color={whiteColor}
          size={generalFontSize + 6}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: whiteColor,
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    minHeight: 300,
    shadowColor: textColor,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 10,
  },
  heading: {
    color: textColor,
    fontSize: generalFontSize * 2.35,
    fontFamily: 'Axiforma-Bold',
    lineHeight: generalFontSize * 3.25,
    textAlign: 'center',
  },
  imgCont: {
    height: 250,
    width: '100%',
    overflow: 'hidden',
    marginTop: 10,
  },
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
  },
  themeBtn: {
    width: '100%',
    backgroundColor: themeColor,
    borderRadius: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginTop: 20,
    gap: 10,
  },
  themeBtnText: {
    fontFamily: 'Axiforma-Bold',
    color: whiteColor,
    fontSize: generalFontSize,
    textTransform: 'uppercase',
  },
});
