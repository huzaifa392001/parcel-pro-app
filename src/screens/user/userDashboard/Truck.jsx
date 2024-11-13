import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { bgColor, generalFontSize, GlobalStyle, textColor, themeColor, windowWidth } from '../../../styles/Theme'
import QuickNav from '../../../components/QuickNav'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import DatePicker from 'react-native-date-picker'
import ImagePicker from 'react-native-image-crop-picker';

// Import utility functions
import { formatTime, roundToNearest30Min, isValidTime } from '../../../utils/Utils'

const Truck = ({ navigation }) => {
  const [date, setDate] = useState(null)
  const [open, setOpen] = useState(false)
  const [otherDescription, setOtherDescription] = useState()
  const [selectedPill, setSelectedPill] = useState(null)
  const [imageUri, setImageUri] = useState(null) // New state to store image URI

  const handleConfirm = (date) => {
    const roundedDate = roundToNearest30Min(date)
    if (isValidTime(roundedDate)) {
      setOpen(false)
      setDate(roundedDate)
    } else {
      alert("Please select a time between 9 AM and 5 PM")
    }
  }

  const openImagePicker = () => {
    ImagePicker.openPicker({
      cropping: true
    }).then(image => {
      setImageUri(image.path) // Set image URI
    }).catch(error => console.log("Image Picker Error:", error))
  }

  const openCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
    }).then(image => {
      setImageUri(image.path) // Set image URI
    }).catch(error => console.log("Camera Error:", error))
  }

  const handlePillPress = (pill) => {
    setSelectedPill(pill)
    setOtherDescription(pill === 'Other')
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
                <Text style={GlobalStyle.inputLabel}>Pickup Address</Text>
                <View style={GlobalStyle.inputWithIconCont}>
                  <FontAwesomeIcon
                    icon={faLocationPin}
                    size={generalFontSize}
                    color={themeColor}
                  />
                  <TextInput
                    placeholder='Pickup Address'
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
                    placeholder='Dropoff Address'
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
                    <Text style={{ fontFamily: "Axiforma-Regular", color: textColor, fontSize: generalFontSize }}>
                      {date ? formatTime(date) : "Select Time"}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={GlobalStyle.inputCont}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Text style={GlobalStyle.inputLabel}>Item Picture</Text>
                  <Text style={[GlobalStyle.inputLabel, { fontSize: generalFontSize - 4 }]}>* Picture will be hidden from Rider *</Text>
                </View>
                <View style={GlobalStyle.pictureBtn}>
                  <View style={GlobalStyle.picturePreview} >
                    {imageUri ? (
                      <Image source={{ uri: imageUri }} style={GlobalStyle.dummyPicturePreview} />
                    ) : (
                      <Image style={GlobalStyle.dummyPicturePreview} source={require("../../../assets/images/dummy.png")} />
                    )}
                    <View style={GlobalStyle.uploadBtnCont}>
                      <TouchableOpacity onPress={openImagePicker} style={GlobalStyle.uploadBtn}>
                        <Text style={GlobalStyle.pictureText}>
                          Click to Upload Image
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={openCamera} style={[GlobalStyle.uploadBtn, { borderLeftWidth: 2, borderLeftColor: bgColor }]}>
                        <Text style={GlobalStyle.pictureText}>
                          Click to Open Camera
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={GlobalStyle.inputCont}>
                <Text style={GlobalStyle.inputLabel}>Item Description</Text>
                <View style={GlobalStyle.pillsCont}>
                  {["Food", "Documents", "Clothings", "Digital Products", "Glass Product", "Other"].map((pill, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[
                        GlobalStyle.pill,
                        selectedPill === pill && GlobalStyle.activePill
                      ]}
                      onPress={() => handlePillPress(pill)}
                    >
                      <Text style={[
                        GlobalStyle.pillsText,
                        selectedPill === pill && GlobalStyle.activePillText
                      ]}>
                        {pill}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                {otherDescription && (
                  <TextInput
                    placeholder='Item Description'
                    placeholderTextColor={textColor}
                    style={[GlobalStyle.input, GlobalStyle.textarea, { marginTop: 10 }]}
                    multiline
                  />
                )}
              </View>
              <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont]}>
                <TouchableOpacity onPress={() => navigation.navigate("step1")} style={GlobalStyle.themeBtn}>
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
        mode="time"
        date={date || new Date(2023, 11, 11, 9, 0)}
        onConfirm={handleConfirm}
        onCancel={() => {
          setOpen(false)
        }}
        minuteInterval={30}
      />
    </SafeAreaView>
  )
}

export default Truck

const styles = StyleSheet.create({})