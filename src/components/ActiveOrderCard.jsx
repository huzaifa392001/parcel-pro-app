import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  bgColor,
  generalFontSize,
  secondaryColor,
  textColor,
  themeColor,
  whiteColor,
} from '../styles/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBox} from '@fortawesome/free-solid-svg-icons';

const ActiveOrderCard = props => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.mainText}>ID: {props?.id ?? '000000'}</Text>
        <Text style={styles.staus}>{props?.status ?? 'Pending'}</Text>
      </View>
      <View style={styles.tranking}>
        <View style={styles.trackingLine} />
        <View style={[styles.startingPoint, styles.point]}>
          <View style={styles.innerPoint} />
        </View>
        <View
          style={[
            styles.currentPoint,
            styles.point,
            {left: props?.status ?? '50%'},
          ]}>
          <View style={[styles.innerPoint, {backgroundColor: 'transparent'}]}>
            <FontAwesomeIcon icon={faBox} color={whiteColor} />
          </View>
        </View>
        <View style={[styles.endingPoint, styles.point]}>
          <View style={styles.innerPoint} />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.lightText}>From</Text>
          <Text style={styles.mainText}>Karachi</Text>
          <Text style={styles.lightText}>12th August 2024</Text>
        </View>
        <View>
          <Text style={styles.lightText}>To</Text>
          <Text style={styles.mainText}>Lahore</Text>
          <Text style={styles.lightText}>28th August 2024</Text>
        </View>
      </View>
    </View>
  );
};

export default ActiveOrderCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: themeColor,
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  staus: {
    backgroundColor: whiteColor,
    borderRadius: 30,
    color: textColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'Axiforma-Bold',
  },
  mainText: {
    fontSize: generalFontSize + 2,
    fontFamily: 'Axiforma-Bold',
    color: whiteColor,
  },
  lightText: {
    fontSize: generalFontSize - 2,
    fontFamily: 'Axiforma-Regular',
    color: whiteColor,
  },
  tranking: {
    position: 'relative',
    height: 60,
  },
  trackingLine: {
    position: 'absolute',
    borderStyle: 'dashed',
    borderWidth: 2,
    width: '100%',
    borderColor: whiteColor,
    top: 30,
  },
  point: {
    width: 30,
    height: 30,
    backgroundColor: secondaryColor,
    position: 'absolute',
    top: 17,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerPoint: {
    width: 15,
    height: 15,
    backgroundColor: whiteColor,
    borderRadius: 100,
    position: 'relative',
    zIndex: 1,
  },
  endingPoint: {
    right: 0,
  },
});
