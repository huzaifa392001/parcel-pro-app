import {
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
import React from 'react';
import {generalFontSize, GlobalStyle, textColor} from '../../../styles/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Step2 = ({navigation}) => {
  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={GlobalStyle.pageContainer}>
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
              <Text style={GlobalStyle.pageHeading}>Recipient's Details</Text>
            </View>
            <View style={GlobalStyle.formContainer}>
              <View style={[GlobalStyle.inputCont]}>
                <Text style={GlobalStyle.inputLabel}>Recipient's Name</Text>
                <TextInput
                  placeholder="Enter Recipient's Name"
                  placeholderTextColor={textColor}
                  style={GlobalStyle.input}
                />
              </View>
              <View style={[GlobalStyle.inputCont]}>
                <Text style={GlobalStyle.inputLabel}>
                  Recipient's Contact Number
                </Text>
                <TextInput
                  placeholder="Enter Recipient's Contact Number"
                  placeholderTextColor={textColor}
                  style={GlobalStyle.input}
                />
              </View>
              {/* <View style={[GlobalStyle.inputCont]}>
              <Text style={GlobalStyle.inputLabel}>Recipient's Name</Text>
              <TextInput
                placeholder="Enter Recipient's Name"
                placeholderTextColor={textColor}
                style={GlobalStyle.input}
              />
            </View> */}
              <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('step1')}
                  style={GlobalStyle.themeBtn}>
                  <Text style={GlobalStyle.themeBtnText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Step2;

const styles = StyleSheet.create({});
