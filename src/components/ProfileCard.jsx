import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalFontSize, textColor, whiteColor } from '../styles/Theme'

const ProfileCard = () => {
    return (
        <View style={styles.profileCont}>
            <View style={styles.imgCont}>
                <Image style={styles.image} source={require("../assets/images/user.png")} />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>Huzaifa Iqbal</Text>
                <Text style={styles.email}>huzaifaiqbal134@gmail.com</Text>
            </View>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    profileCont: {
        flexDirection: 'row',
        backgroundColor: whiteColor,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        alignItems: 'center',
        gap: 10,
        marginBottom: 20
    },
    imgCont: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: whiteColor
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    name: {
        fontSize: generalFontSize + 4,
        color: textColor,
        fontFamily: 'Axiforma-Medium',
        fontWeight: "700",
        marginBottom: 2
    },
    email: {
        fontSize: generalFontSize - 2,
        color: textColor,
        fontFamily: 'Axiforma-Regular'
    },
})