import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import QuickNav from '../../../components/QuickNav'
import { generalFontSize, GlobalStyle, textColor, themeColor } from '../../../styles/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'

const HouseMoving = () => {
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
            <Text style={GlobalStyle.generalDescription}>After placing order, One of our Representative will contact you for further details.</Text>
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
                <Text style={GlobalStyle.inputLabel}>Item(s) Description</Text>
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
    </SafeAreaView>
  )
}

export default HouseMoving

const styles = StyleSheet.create({})