import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { GlobalStyle, whiteColor } from '../../styles/Theme'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn, FadeInLeft, FadeOutRight } from 'react-native-reanimated';
import { Link, router } from 'expo-router';
import Logo from '../../components/Logo';

const login = () => {
    const logo = require('../../assets/images/banner.png')
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
                        {/* <Text style={GlobalStyle.pageHeading}>Signup</Text>
                    <Text style={GlobalStyle.pageSubHeading}>Join Us to Manage Your Deliveries with Ease</Text> */}
                    </View>

                    <View style={[GlobalStyle.loginContainer, { marginTop: 10 }]}>
                        <View style={[GlobalStyle.container, { backgroundColor: 'transparent' }]}>
                            <Text style={GlobalStyle.pageHeading}>Login</Text>
                            <View style={styles.imgContainer}>
                                <Animated.Image
                                    entering={FadeInLeft.duration(1000)}
                                    exiting={FadeOutRight.duration(500)}
                                    source={logo} style={styles.loginImg}
                                />
                            </View>
                            <View style={GlobalStyle.formContainer}>
                                <Animated.View
                                    entering={FadeIn.duration(1000).delay(100)}
                                    style={[GlobalStyle.inputCont]}
                                >
                                    <TextInput
                                        style={[GlobalStyle.input, GlobalStyle.altrInput]}
                                        keyboardType='number-pad'
                                        placeholder='Enter Phone Number'
                                        placeholderTextColor={whiteColor}
                                    />
                                </Animated.View>

                                <Animated.View
                                    entering={FadeIn.duration(1000).delay(100)}
                                    style={GlobalStyle.inputCont}
                                >
                                    <TextInput
                                        style={[GlobalStyle.input, GlobalStyle.altrInput]}
                                        keyboardType='number-pad'
                                        placeholder='Enter Password'
                                        placeholderTextColor={whiteColor}
                                        secureTextEntry
                                    />
                                </Animated.View>

                                <TouchableOpacity onPress={() => router.navigate("/(client)")} style={GlobalStyle.themeBtn2}>
                                    <Text style={GlobalStyle.themeBtn2Text}>
                                        Continue
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => router.replace('./')} style={GlobalStyle.linkBtn}>
                                    <Text style={GlobalStyle.linkBtnText}>Don't have a Account?</Text>
                                    <Text style={[GlobalStyle.linkBtnText, GlobalStyle.linkBtnMain]}>
                                        Signup
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default login

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
