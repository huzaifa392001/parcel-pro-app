import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { GlobalStyle, whiteColor, windowWidth } from '../../styles/Theme'
import { AuthStyles } from '../../styles/AuthStyles'
import Logo from '../../components/Logo'
import Animated, { FadeIn, FadeInLeft, FadeOutLeft } from 'react-native-reanimated'
import { AuthService } from '../../services/AuthService'

const Login = ({ navigation }) => {
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
                        <View style={[GlobalStyle.container, { height: 'auto', backgroundColor: 'transparent' }]}>
                            <Animated.Text entering={FadeIn.duration(1000)} style={AuthStyles.pageHeading}>Login</Animated.Text>
                            <View style={styles.imgContainer}>
                                <Animated.Image
                                    entering={FadeInLeft.duration(1000)}
                                    exiting={FadeOutLeft.duration(1000)}
                                    source={require('../../assets/images/banner.png')} style={styles.loginImg}
                                />
                            </View>
                            <View style={AuthStyles.formContainer}>
                                <Animated.View
                                    entering={FadeIn.duration(1000)}
                                    style={GlobalStyle.inputCont}
                                >
                                    <TextInput
                                        style={[GlobalStyle.input, GlobalStyle.altrInput]}
                                        keyboardType='default'
                                        placeholder='Enter username'
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
                                        placeholder='Enter Password'
                                        placeholderTextColor={whiteColor}
                                        secureTextEntry
                                    />
                                </Animated.View>

                                <TouchableOpacity onPress={signupFunc} style={GlobalStyle.themeBtn2}>
                                    <Text style={GlobalStyle.themeBtn2Text}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.replace('welcome')} style={AuthStyles.linkBtn}>
                                    <Text style={AuthStyles.linkBtnText}>Don't have a Account?</Text>
                                    <Text style={[AuthStyles.linkBtnText, AuthStyles.linkBtnMain]}>
                                        SingUp
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

export default Login

const styles = StyleSheet.create({
    imgContainer: {
        height: 250,
        position: 'relative',
        marginTop: 'auto',
        width: windowWidth - 40
    },
    loginImg: {
        height: "100%",
        width: windowWidth - 40,
        resizeMode: 'cover',
    }
})