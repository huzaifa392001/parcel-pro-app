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
import React, {useState} from 'react';
import {
  generalFontSize,
  GlobalStyle,
  textColor,
  themeColor,
  whiteColor,
} from '../../../styles/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronLeft,
  faCreditCard,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons';
import AccountInfo from '../../../components/AccountInfo';

const Step2 = ({navigation}) => {
  const [paymentMethod, setPaymentMethod] = useState();

  const handlePaymentMethod = status => {
    setPaymentMethod(status);
  };

  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={[
          GlobalStyle.pageContainer,
          GlobalStyle.floatingBtnPageContainer,
        ]}>
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
              <View style={[GlobalStyle.inputCont]}>
                <Text style={GlobalStyle.inputLabel}>Payment Method</Text>
                <View style={{gap: 10}}>
                  <TouchableOpacity
                    onPress={() => handlePaymentMethod(0)}
                    style={[
                      GlobalStyle.altrThemeBtn,
                      paymentMethod === 0 ? GlobalStyle.activeBtn : '',
                    ]}>
                    <Text
                      style={[
                        GlobalStyle.altrThemeBtnText,
                        paymentMethod === 0 ? GlobalStyle.activeBtnText : '',
                      ]}>
                      Online Transfer
                    </Text>
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      color={paymentMethod === 0 ? whiteColor : themeColor}
                      size={generalFontSize + 4}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handlePaymentMethod(1)}
                    style={[
                      GlobalStyle.altrThemeBtn,
                      paymentMethod === 1 ? GlobalStyle.activeBtn : '',
                    ]}>
                    <Text
                      style={[
                        GlobalStyle.altrThemeBtnText,
                        paymentMethod === 1 ? GlobalStyle.activeBtnText : '',
                      ]}>
                      Cash On Delivery (COD)
                    </Text>
                    <FontAwesomeIcon
                      icon={faMoneyBill}
                      color={paymentMethod === 1 ? whiteColor : themeColor}
                      size={generalFontSize + 4}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        style={[
          GlobalStyle.inputCont,
          GlobalStyle.submitBtnCont,
          GlobalStyle.floatingBtn,
        ]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('step1')}
          style={GlobalStyle.themeBtn}>
          <Text style={GlobalStyle.themeBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
      <AccountInfo />
    </SafeAreaView>
  );
};

export default Step2;

const styles = StyleSheet.create({});
