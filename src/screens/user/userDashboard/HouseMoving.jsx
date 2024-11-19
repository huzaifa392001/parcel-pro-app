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
import QuickNav from '../../../components/QuickNav';
import {
  generalFontSize,
  GlobalStyle,
  textColor,
  themeColor,
} from '../../../styles/Theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationPin} from '@fortawesome/free-solid-svg-icons';
import ItemQuantitySelector from '../../../components/ItemQuantitySelector';

const HouseMoving = () => {
  const items = [
    'Bed(s)',
    'Bedside Table(s)',
    'Cupboards',
    'TV(s)',
    'Sofa(s)',
    'Dinning Table(s)',
  ];
  const [counters, setCounters] = useState(
    items.reduce((acc, item) => ({...acc, [item]: 0}), {}), // Initialize each item counter to 0
  );

  const updateCounter = (item, newCount) => {
    setCounters(prevCounters => ({
      ...prevCounters,
      [item]: newCount,
    }));
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
          <QuickNav />
          <View style={[GlobalStyle.container, {marginTop: 20}]}>
            <Text style={[GlobalStyle.secHeading, {marginBottom: 0}]}>
              Place an Order
            </Text>
            <Text style={GlobalStyle.generalDescription}>
              After placing order, One of our Representatives will contact you
              for further details.
            </Text>
            <View style={GlobalStyle.formContainer}>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Pickup Address</Text>
                <View style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <TextInput
                    placeholder="Pickup Address"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.inputWithIconCont.input}
                  />
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Dropoff Address</Text>
                <View style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <TextInput
                    placeholder="Dropoff Address"
                    placeholderTextColor={textColor}
                    style={GlobalStyle.inputWithIconCont.input}
                  />
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Items</Text>
                <View style={{gap: 10}}>
                  {items.map((item, index) => (
                    <ItemQuantitySelector
                      item={item}
                      key={index}
                      counter={counters[item]}
                      setCounter={newCount => updateCounter(item, newCount)}
                    />
                  ))}
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Other Item(s)</Text>
                <TextInput
                  placeholder="Item(s)"
                  placeholderTextColor={textColor}
                  style={[GlobalStyle.input, GlobalStyle.textarea]}
                  multiline
                />
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
    </SafeAreaView>
  );
};

export default HouseMoving;
