import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  bgColor,
  generalFontSize,
  GlobalStyle,
  textColor,
} from '../../../styles/Theme';
import ImagePicker from 'react-native-image-crop-picker';
import SizeBox from '../../../components/SizeBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Step1 = ({navigation}) => {
  const sizes = [
    {
      heading: 'Small',
      measures: 'Max. 25kg, 8 x 38 x 64 cm',
      description: 'Fits in an Envelope',
      image: require('../../../assets/images/smallBox.png'),
    },
    {
      heading: 'Medium',
      measures: 'Max. 25kg, 19 x 38 x 64 cm',
      description: 'Fits in a shoe box',
      image: require('../../../assets/images/mediumBox.png'),
    },
    {
      heading: 'Large',
      measures: 'Max. 25kg, 41 x 38 x 64 cm',
      description: 'Fits in a Cardbox box',
      image: require('../../../assets/images/largeBox.png'),
    },
    {
      heading: 'Custom',
      measures: 'Max: 30kg or 300cm',
      description: 'Fits on a skid',
      image: require('../../../assets/images/customBox.png'),
    },
  ];

  const [selectedSize, setSelectedSize] = useState(null);
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

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    })
      .then(image => {
        setImageUri(image.path);
      })
      .catch(error => console.log('Camera Error:', error));
  };

  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={[GlobalStyle.pageContainer, GlobalStyle.floatingBtnPageContainer]}>
        <ScrollView>
          <View style={GlobalStyle.container}>
            <View style={GlobalStyle.pageHeadingCont}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={GlobalStyle.pageHeadingBackBtn}>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  color={textColor}
                  size={generalFontSize + 4}
                />
              </TouchableOpacity>
              <Text style={GlobalStyle.pageHeading}>Order Size</Text>
            </View>
            <View style={GlobalStyle.inputCont}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={GlobalStyle.inputLabel}>Item Picture</Text>
                <Text
                  style={[
                    GlobalStyle.inputLabel,
                    {fontSize: generalFontSize - 4},
                  ]}>
                  * Picture will be hidden from Rider *
                </Text>
              </View>
              <View style={GlobalStyle.pictureBtn}>
                <View style={GlobalStyle.picturePreview}>
                  {imageUri ? (
                    <Image
                      source={{uri: imageUri}}
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
                      style={GlobalStyle.uploadBtn}>
                      <Text style={GlobalStyle.pictureText}>
                        Click to Upload Image
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={openCamera}
                      style={[
                        GlobalStyle.uploadBtn,
                        {borderLeftWidth: 2, borderLeftColor: bgColor},
                      ]}>
                      <Text style={GlobalStyle.pictureText}>
                        Click to Open Camera
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={[GlobalStyle.inputCont, {gap: 10}]}>
              {sizes.map((item, index) => (
                <SizeBox
                  key={index}
                  data={item}
                  isSelected={selectedSize === index}
                  onSelect={() => setSelectedSize(index)}
                />
              ))}
            </View>

            {selectedSize === 3 && (
              <>
                <View style={[GlobalStyle.inputCont, {marginTop: 10}]}>
                  <Text style={GlobalStyle.inputLabel}>Custom Size</Text>
                  <TextInput
                    placeholder="Enter Size or Weight"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.input}
                  />
                </View>
              </>
            )}
          </View>
        </ScrollView>
        <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont, GlobalStyle.floatingBtn]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('step2')}
            style={GlobalStyle.themeBtn}>
            <Text style={GlobalStyle.themeBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Step1;
