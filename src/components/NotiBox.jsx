import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalFontSize, textColor, whiteColor } from '../styles/Theme'

const NotiBox = () => {
    return (
        <View style={styles.notiBox}>
            <Text style={styles.notiText}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate minus, porro aperiam enim fugit aliquid ut rem nostrum officia? Expedita.
            </Text>
            <Text style={styles.date}>
                5:32 PM, 10 Jan 2024
            </Text>
        </View>
    )
}

export default NotiBox

const styles = StyleSheet.create({
    notiBox: {
        backgroundColor: whiteColor,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 10
    },
    notiText: {
        color: textColor,
        fontSize: generalFontSize - 2,
        fontFamily: 'Axifroma-Medium'
    },
    date: {
        position: 'absolute',
        bottom: 5,
        right: 10,
        color: textColor,
        fontFamily: 'Axiforma-Bold',
        fontSize: generalFontSize - 4
    }
})