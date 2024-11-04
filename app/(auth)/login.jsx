import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { GlobalStyle, textColor } from '../../styles/Theme'
import { TouchableOpacity } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated';
import { Link, router } from 'expo-router';

const login = () => {
    const logo = require('../../assets/images/banner.png')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={[GlobalStyle.container, { backgroundColor: 'transparent' }]}
                behavior="height"
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    bounces={false}
                >

                    <View style={GlobalStyle.bgColorCont} />
                    <View style={GlobalStyle.headingCont}>
                        <Text style={GlobalStyle.pageHeading}>Login</Text>
                        <Text style={GlobalStyle.pageSubHeading}>Sign In to Streamline Your Delivery Operations</Text>
                    </View>

                    <View style={styles.imgContainer}>
                        <Animated.Image
                            entering={FadeIn.duration(1000)}
                            source={logo} style={styles.loginImg}
                        />
                    </View>

                    <View style={[GlobalStyle.loginContainer, { marginTop: 10 }]}>
                        <Animated.View
                            entering={FadeIn.duration(1000).delay(100)}
                            style={GlobalStyle.inputCont}
                        >
                            <TextInput
                                style={GlobalStyle.input}
                                keyboardType='number-pad'
                                placeholder='Enter Phone Number'
                                placeholderTextColor={textColor}
                            />
                        </Animated.View>
                        <Animated.View
                            entering={FadeIn.duration(1000).delay(100)}
                            style={GlobalStyle.inputCont}
                        >
                            <TextInput
                                style={GlobalStyle.input}
                                keyboardType='default'
                                placeholder='Enter Password'
                                secureTextEntry={true}
                                placeholderTextColor={textColor}
                            />
                        </Animated.View>

                        <TouchableOpacity style={GlobalStyle.themeBtn}>
                            <Text style={GlobalStyle.themeBtnText}>
                                Continue
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.replace('/(auth)')} style={GlobalStyle.linkBtn}>
                            <Text style={GlobalStyle.linkBtnText}>Don't have a Account?</Text>
                            <Text style={[GlobalStyle.linkBtnText, GlobalStyle.linkBtnMain]}>
                                signup
                            </Text>
                        </TouchableOpacity>

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
