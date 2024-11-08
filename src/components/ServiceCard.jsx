import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { blackColor, generalFontSize, secondaryColor, themeColor, whiteColor, windowWidth } from '../styles/Theme'
import { faChevronRight, faMotorcycle, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const ServiceCard = (props) => {
    return (
        <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.heading}>{props?.data?.service}</Text>
            <View style={styles.iconCont}>
                <FontAwesomeIcon
                    icon={props?.data?.service === 'truck' || props?.data?.service === "house moving" ? faTruck : props?.data?.service === "scooter" ? faMotorcycle : faMotorcycle}
                    color={secondaryColor}
                    size={generalFontSize * 5}
                />
                <View style={styles.iconBox}>
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        style={styles.icon}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceCard

const styles = StyleSheet.create({
    serviceCard: {
        backgroundColor: whiteColor,
        width: ((windowWidth - 40) - 20) / 2,
        shadowColor: themeColor,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    heading: {
        color: blackColor,
        fontFamily: "Axiforma-Bold",
        fontSize: generalFontSize + 5,
        marginBottom: 30,
        textTransform: 'capitalize'
    },
    iconCont: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    icon: {
        color: whiteColor,
    },
    iconBox: {
        backgroundColor: themeColor,
        padding: 10,
        borderRadius: 100
    }
})