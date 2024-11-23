import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { generalFontSize, GlobalStyle, textColor } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Step3 = ({ navigation }) => {
  const isOnlineTransfer = useSelector((state) => state.general.isOnlineTransfer)
  const [imageUri, setImageUri] = useState(null);

  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => console.log('Image Picker Error:', error));
  };

  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={[
          GlobalStyle.pageContainer,
          GlobalStyle.floatingBtnPageContainer,
        ]}
      >
        <ScrollView>
          <View style={GlobalStyle.container}>
            <View style={GlobalStyle.pageHeadingCont}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={GlobalStyle.pageHeadingBackBtn}
              >
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  color={textColor}
                  size={generalFontSize + 4}
                />
              </TouchableOpacity>
              <Text style={GlobalStyle.pageHeading}>Payment Details</Text>
            </View>
            {isOnlineTransfer ? (
              <View style={GlobalStyle.formContainer}>
                <View style={[GlobalStyle.inputCont]}>
                  <Text style={GlobalStyle.inputLabel}>Online Transfer Proof</Text>
                  <Text
                    style={[
                      GlobalStyle.inputLabel,
                      { fontSize: generalFontSize - 4 },
                    ]}>
                    * Attached Payment Screenshot *
                  </Text>
                  <View style={GlobalStyle.pictureBtn}>
                    <View style={GlobalStyle.picturePreview}>
                      {imageUri ? (
                        <Image
                          source={{ uri: imageUri }}
                          style={GlobalStyle.dummyPicturePreview}
                        />
                      ) : (
                        <Image
                          style={GlobalStyle.dummyPicturePreview}
                          source={require('../../../assets/images/dummy.png')}
                        />
                      )}
                      <View style={GlobalStyle.uploadBtnCont}>
                        <TouchableOpacity
                          onPress={openImagePicker}
                          style={[GlobalStyle.uploadBtn, { width: '100%' }]}>
                          <Text style={GlobalStyle.pictureText}>
                            Click to Upload Image
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View style={GlobalStyle.formContainer}>
                <View style={[GlobalStyle.inputCont]}>
                  <Text style={GlobalStyle.inputLabel}>Card Holder Name</Text>
                  <TextInput
                    placeholder="Enter Card Holder Name"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.input}
                  />
                </View>
                <View style={[GlobalStyle.inputCont]}>
                  <Text style={GlobalStyle.inputLabel}>Card Number</Text>
                  <TextInput
                    placeholder="Enter Card Number"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.input}
                  />
                </View>
                <View style={[GlobalStyle.inputCont]}>
                  <Text style={GlobalStyle.inputLabel}>Expirt Date</Text>
                  <TextInput
                    placeholder="12/25"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.input}
                  />
                </View>
                <View style={[GlobalStyle.inputCont]}>
                  <Text style={GlobalStyle.inputLabel}>CVC</Text>
                  <TextInput
                    placeholder="Enter CVC"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.input}
                    secureTextEntry
                  />
                </View>
              </View>
            )}
          </View>
        </ScrollView>
        <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont, GlobalStyle.floatingBtn]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('thankyou')}
            style={GlobalStyle.themeBtn}>
            <Text style={GlobalStyle.themeBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Step3;

const styles = StyleSheet.create({});
