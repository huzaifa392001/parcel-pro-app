import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {bgColor, generalFontSize, GlobalStyle, isIpad, windowWidth} from '../styles/Theme';

const AccountInfo = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={isModalVisible}
        animationOutTiming={500}
        hasBackdrop={true}
        onBackdropPress={null} // Enable or disable based on canHide
        onSwipeComplete={null} // Enable or disable based on canHide
        swipeDirection="down"
        style={styles.modal}
        avoidKeyboard={true}>
        <View style={styles.modalContent}>
          <Text
            style={[GlobalStyle.mainTitle, {fontSize: generalFontSize + 4}]}>
            {title}
          </Text>
        </View>
      </Modal>
    </View>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        paddingBottom: 30,
      },
      android: {
        paddingBottom: 60,
      },
    }),
  },
  modal: {
    margin: 0,
  },
  modalContent: {
    backgroundColor: bgColor,
    paddingHorizontal: 0,
    width: '100%',
    minHeight: windowWidth / 2,
    paddingVertical: 20,
    borderRadius: isIpad ? 20 : 10,
    marginHorizontal: 'auto',
    maxWidth: isIpad ? windowWidth / 2 : '',
  },
});
