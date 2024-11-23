import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import { bgColor, blackColor, generalFontSize, GlobalStyle, isIpad, textColor, windowWidth } from '../styles/Theme';

const AccountInfo = ({ modalIsVisible, onClose, title, canHide }) => {
  return (
    <Modal
      isVisible={modalIsVisible}
      animationOutTiming={500}
      hasBackdrop={true}
      onBackdropPress={() => {
        if (canHide) onClose(); // Trigger onClose if closing is allowed
      }}
      onSwipeComplete={() => {
        if (canHide) onClose(); // Trigger onClose if closing is allowed
      }}
      swipeDirection="down"
      style={styles.modal}
      avoidKeyboard={true}
    >
      <View style={styles.modalContent}>
        <Text style={[GlobalStyle.mainTitle, { fontSize: generalFontSize + 4, marginBottom: 20, fontFamily: 'Axiforma-Bold' }]}>
          Business's Account Info
        </Text>
        <View style={styles.row}>
          <Text style={[styles.text, { fontWeight: '700', fontFamily: 'Axiforma-Bold' }]}>Account Holder Name: </Text>
          <Text style={styles.text}>Huzaifa Iqbal</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, { fontWeight: '700', fontFamily: 'Axiforma-Bold' }]}>Bank: </Text>
          <Text style={styles.text}>ABC Local Bank</Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.text, { fontWeight: '700', fontFamily: 'Axiforma-Bold' }]}>Account Number: </Text>
          <Text style={styles.text}>0000 0000 0000 0000</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (canHide) onClose(); // Trigger onClose if closing is allowed
          }}
          style={[GlobalStyle.themeBtn, { width: "100%", marginTop: 10 }]}
        >
          <Text style={GlobalStyle.themeBtnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 10
  },
  modalContent: {
    backgroundColor: bgColor,
    paddingHorizontal: 20,
    width: '100%',
    minHeight: windowWidth / 2,
    paddingVertical: 20,
    borderRadius: isIpad ? 20 : 10,
    marginHorizontal: 'auto',
    maxWidth: isIpad ? windowWidth / 2 : '',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10
  },
  text: {
    color: textColor,
    fontSize: generalFontSize,
    fontFamily: 'Axiforma-Regular',

  }
});
