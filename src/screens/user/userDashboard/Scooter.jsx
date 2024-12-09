import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  generalFontSize,
  GlobalStyle,
  textColor,
  themeColor,
} from '../../../styles/Theme';
import QuickNav from '../../../components/QuickNav';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-native-date-picker';

// Import utility functions
import {
  formatTime,
  roundToNearest30Min,
  isValidTime,
} from '../../../utils/Utils';

const Scooter = ({ navigation }) => {
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  const [otherDescription, setOtherDescription] = useState();
  const [selectedPill, setSelectedPill] = useState(null);

  const handleConfirm = date => {
    const roundedDate = roundToNearest30Min(date);
    if (isValidTime(roundedDate)) {
      setOpen(false);
      setDate(roundedDate);
    } else {
      alert('Please select a time between 9 AM and 5 PM');
    }
  };

  const handlePillPress = pill => {
    setSelectedPill(pill);
    setOtherDescription(pill === 'Other');
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
          <View style={[GlobalStyle.container, { marginTop: 20 }]}>
            <Text style={GlobalStyle.secHeading}>Place an Order</Text>
            <View style={GlobalStyle.formContainer}>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Pickup Address</Text>
                <Text
                  style={[
                    GlobalStyle.inputLabel,
                    { fontSize: generalFontSize - 4 },
                  ]}>
                  * Share location using Google Map for precise location. *
                </Text>
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
                <Text
                  style={[
                    GlobalStyle.inputLabel,
                    { fontSize: generalFontSize - 4 },
                  ]}>
                </Text>
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
                <Text style={GlobalStyle.inputLabel}>Desired Pickup Time</Text>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faClock}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <View
                    style={[
                      GlobalStyle.inputWithIconCont.input,
                      { paddingLeft: 7 },
                    ]}>
                    <Text
                      style={{
                        fontFamily: 'Axiforma-Regular',
                        color: textColor,
                        fontSize: generalFontSize,
                      }}>
                      {date ? formatTime(date) : 'Select Time'}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Item Description</Text>
                <View style={GlobalStyle.pillsCont}>
                  {[
                    'Food',
                    'Documents',
                    'Clothings',
                    'Digital Products',
                    'Glass Product',
                    'Other',
                  ].map((pill, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        GlobalStyle.pill,
                        selectedPill === pill && GlobalStyle.activePill,
                      ]}
                      onPress={() => handlePillPress(pill)}>
                      <Text
                        style={[
                          GlobalStyle.pillsText,
                          selectedPill === pill && GlobalStyle.activePillText,
                        ]}>
                        {pill}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {otherDescription && (
                  <TextInput
                    placeholder="Item Description"
                    placeholderTextColor={textColor}
                    style={[
                      GlobalStyle.input,
                      GlobalStyle.textarea,
                      { marginTop: 10 },
                    ]}
                    multiline
                  />
                )}
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
      <DatePicker
        modal
        open={open}
        mode="time"
        date={date || new Date(2023, 11, 11, 9, 0)}
        onConfirm={handleConfirm}
        onCancel={() => {
          setOpen(false);
        }}
        minuteInterval={30}
      />
    </SafeAreaView>
  );
};

export default Scooter;
