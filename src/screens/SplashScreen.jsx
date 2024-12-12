import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { FadeIn } from 'react-native-reanimated';
import { whiteColor, windowWidth } from '../styles/Theme';

const SplashScreen = () => {
    return (
        <SafeAreaView style={styles.splashScreen}>
            <Animated.Image
                entering={FadeIn.duration(750)}
                source={require('../assets/images/logo.png')} style={styles.loginImg}
            />
        </SafeAreaView>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashScreen: {
        backgroundColor: whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loginImg: {
        width: windowWidth,
        height: 300,
        objectFit: 'contain'
    }
})