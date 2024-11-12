import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { generalFontSize, textColor, themeColor, whiteColor, windowWidth } from '../styles/Theme'

const PriceSheet = () => {
    return (
        <View style={styles.bottomSheet}>
            <View style={styles.sheetHandle} />
            <Text style={styles.heading}>Estimated Fare</Text>
            <Text style={styles.price}>2000 Pkr</Text>
        </View>
    )
}

export default PriceSheet

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: whiteColor,
        width: windowWidth,
        paddingBottom: 50,
        paddingTop: 20,
        position: 'absolute',
        bottom: 0,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 150
    },
    sheetHandle: {
        position: 'absolute',
        top: 0,
        width: 50,
        height: 5,
        backgroundColor: themeColor,
        left: (windowWidth / 2) - 25
    },
    heading: {
        fontSize: generalFontSize + 6,
        color: textColor,
        fontFamily: 'Axiforma-Medium'
    },
    price: {
        fontSize: generalFontSize + 2,
        color: textColor,
        fontFamily: 'Axiforma-Bold',
        color: themeColor
    }
})