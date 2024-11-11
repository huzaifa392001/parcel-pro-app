import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import QuickNav from '../../../components/QuickNav'
import { generalFontSize, GlobalStyle, textColor, themeColor } from '../../../styles/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-native-date-picker'

// Import utility functions
import { formatTime, roundToNearest30Min, isValidTime } from '../../../utils/Utils'

const Truck = () => {
  const [date, setDate] = useState(null) // Initialize as null to show "Select Time"
  const [open, setOpen] = useState(false)

  const handleConfirm = (date) => {
    const roundedDate = roundToNearest30Min(date)
    if (isValidTime(roundedDate)) {
      setOpen(false)
      setDate(roundedDate)
    } else {
      alert("Please select a time between 9 AM and 5 PM")
    }
  }

  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={GlobalStyle.pageContainer}
      >
        <ScrollView>
          <QuickNav />
          <View style={[GlobalStyle.container, { marginTop: 20 }]}>
            <Text style={GlobalStyle.secHeading}>Place an Order</Text>
            <View style={GlobalStyle.formContainer}>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Pickup Location</Text>
                <View style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <TextInput
                    placeholder='Pickup Location'
                    placeholderTextColor={textColor}
                    style={GlobalStyle.inputWithIconCont.input}
                  />
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Dropoff Location</Text>
                <View style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <TextInput
                    placeholder='Dropoff Location'
                    placeholderTextColor={textColor}
                    style={GlobalStyle.inputWithIconCont.input}
                  />
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Desired Pickup Time</Text>
                <TouchableOpacity onPress={() => setOpen(true)} style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faClock}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <View style={[GlobalStyle.inputWithIconCont.input, { paddingLeft: 7 }]}>
                    <Text style={{ fontFamily: "Axiforma-Regular", color: textColor, fontSize: generalFontSize + 2 }}>
                      {date ? formatTime(date) : "Select Time"} {/* Display formatted time with AM/PM */}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Item Description</Text>
                <TextInput
                  placeholder='Item Description'
                  placeholderTextColor={textColor}
                  style={[GlobalStyle.input, GlobalStyle.textarea]}
                  multiline
                />
              </View>
              <View style={GlobalStyle.inputCont}>
                <TouchableOpacity style={GlobalStyle.themeBtn}>
                  <Text style={GlobalStyle.themeBtnText}>Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <DatePicker
        modal
        open={open}
        mode="time" // Set mode to 'time' to pick only the time
        date={date || new Date(2023, 11, 11, 9, 0)} // Default to 9 AM if no date is selected
        onConfirm={handleConfirm} // Custom onConfirm to validate time
        onCancel={() => {
          setOpen(false)
        }}
        minuteInterval={30} // Ensure 30-minute intervals
      />
    </SafeAreaView>
  )
}

export default Truck

const styles = StyleSheet.create({})