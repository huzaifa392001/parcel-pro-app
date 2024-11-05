import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { generalFontSize, GlobalStyle, whiteColor } from '../../styles/Theme'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated';
import { router } from 'expo-router';
import Logo from '../../components/Logo';

const signup = () => {
  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="height"
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
          bounces={false}
          style={GlobalStyle.pageContainer}
        >
          <View style={GlobalStyle.logoCont}>
            <Logo />
          </View>
          <View style={[GlobalStyle.loginContainer, {}]}>
            <View style={[GlobalStyle.container, { backgroundColor: 'transparent' }]}>
              <Text style={[GlobalStyle.pageHeading, { fontSize: generalFontSize * 3, marginBottom: 'auto' }]}>Create Profile</Text>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='default'
                  placeholder='First Name'
                  placeholderTextColor={whiteColor}
                />
              </Animated.View>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='default'
                  placeholder='Last Name'
                  placeholderTextColor={whiteColor}
                />
              </Animated.View>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='email-address'
                  placeholder='Email Address'
                  placeholderTextColor={whiteColor}
                />
              </Animated.View>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='number-pad'
                  placeholder='Phone Number'
                  placeholderTextColor={whiteColor}
                />
              </Animated.View>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='default'
                  placeholder='Password'
                  placeholderTextColor={whiteColor}
                  secureTextEntry
                />
              </Animated.View>
              <Animated.View
                entering={FadeIn.duration(500)}
                style={GlobalStyle.inputCont}
              >
                <TextInput
                  style={[GlobalStyle.input, GlobalStyle.altrInput]}
                  keyboardType='default'
                  placeholder='Confirm Password'
                  placeholderTextColor={whiteColor}
                  secureTextEntry
                />
              </Animated.View>

              <TouchableOpacity onPress={() => router.navigate("/(client)")} style={GlobalStyle.themeBtn2}>
                <Text style={GlobalStyle.themeBtn2Text}>
                  Continue
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.replace('./login')} style={GlobalStyle.linkBtn}>
                <Text style={GlobalStyle.linkBtnText}>Already have a Account?</Text>
                <Text style={[GlobalStyle.linkBtnText, GlobalStyle.linkBtnMain]}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default signup

const styles = StyleSheet.create({
  imgContainer: {
    height: 250,
    position: 'relative',
    marginTop: 'auto'
  },
  loginImg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
  }
})
