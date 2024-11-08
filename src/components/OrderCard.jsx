import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBox, faChevronCircleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { bgColor, generalFontSize, textColor, themeColor, whiteColor } from '../styles/Theme'

const OrderCard = (props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <View
                style={styles.iconBox}
            >
                <FontAwesomeIcon
                    icon={faBox}
                    color={themeColor}
                    size={generalFontSize * 1.375}
                />
            </View>
            <View>
                <Text style={styles.mainText}>
                    ID: {props?.id ?? "000000"}
                </Text>
                <Text style={styles.minText}>
                    {props?.pickup ?? "Karachi"} - {props?.delivery ?? "Lahore"}
                </Text>
            </View>
            <View style={styles.status}>
                <Text style={styles.statusText}>
                    {props?.status ?? 'Waiting'}
                </Text>
            </View>
            <FontAwesomeIcon
                icon={faChevronRight}
                size={generalFontSize}
                color={themeColor}
            />
        </TouchableOpacity>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    card: {
        paddingVertical: 5,
        backgroundColor: whiteColor,
        borderRadius: 30,
        alignItems: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        gap: 10
    },
    iconBox: {
        color: themeColor,
        backgroundColor: bgColor,
        height: 50,
        width: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    status: {
        backgroundColor: themeColor,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginLeft: 'auto'
    },
    statusText: {
        fontFamily: 'Axiforma-Bold',
        fontSize: generalFontSize - 4,
        color: whiteColor
    },
    mainText: {
        color: textColor,
        fontSize: generalFontSize + 2,
        fontFamily: 'Axiforma-Bold'
    },
    minText: {
        color: textColor,
        fontSize: generalFontSize - 2,
        fontFamily: 'Axiforma-Medium'
    }
})