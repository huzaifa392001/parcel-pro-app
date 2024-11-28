import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { generalFontSize, GlobalStyle, whiteColor, windowWidth } from '../../styles/Theme'
import { AuthStyles } from '../../styles/AuthStyles'
import Logo from '../../components/Logo'
import Animated, { FadeIn } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux'
import { AuthService } from '../../services/AuthService'

const Signup = ({ navigation }) => {
    const signupFunc = async () => {
        try {
            const response = await AuthService.login();
            // navigation.replace("dashboard")
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={GlobalStyle.pageContainer}
            >
                <View style={AuthStyles.logoCont}>
                    <Logo />
                </View>
                <View style={[AuthStyles.loginContainer, { marginTop: 'auto' }]}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={[GlobalStyle.container, { height: 'auto', backgroundColor: 'transparent', paddingBottom: 30 }]}>
                            <Animated.Text entering={FadeIn.duration(1000)} style={[AuthStyles.pageHeading, { fontSize: generalFontSize * 3 }]}>Create Profile</Animated.Text>
                            <View style={AuthStyles.formContainer}>
                                <Animated.View
                                    entering={FadeIn.duration(1000)}
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
                                    entering={FadeIn.duration(1000)}
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
                                    entering={FadeIn.duration(1000)}
                                    style={GlobalStyle.inputCont}
                                >
                                    <TextInput
                                        style={[GlobalStyle.input, GlobalStyle.altrInput]}
                                        keyboardType='default'
                                        placeholder='Phone Number'
                                        placeholderTextColor={whiteColor}
                                    />
                                </Animated.View>
                                <Animated.View
                                    entering={FadeIn.duration(1000)}
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
                                    entering={FadeIn.duration(1000)}
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
                                    entering={FadeIn.duration(1000)}
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

                                <TouchableOpacity onPress={() => AuthService.login()} style={GlobalStyle.themeBtn2}>
                                    <Text style={GlobalStyle.themeBtn2Text}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.replace('login')} style={AuthStyles.linkBtn}>
                                    <Text style={AuthStyles.linkBtnText}>Already have a Account?</Text>
                                    <Text style={[AuthStyles.linkBtnText, AuthStyles.linkBtnMain]}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Signup

const styles = StyleSheet.create({})