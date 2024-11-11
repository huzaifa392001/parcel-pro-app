import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { blackColor, generalFontSize, secondaryColor, themeColor, whiteColor, windowWidth } from '../styles/Theme'
import { faCarSide, faChevronRight, faMotorcycle, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useNavigation } from '@react-navigation/native'

const ServiceCard = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate(props?.data?.link)} style={styles.serviceCard}>
            <Text style={styles.heading}>{props?.data?.service}</Text>
            <View style={styles.iconCont}>
                <FontAwesomeIcon
                    icon={
                        props?.data?.service === 'truck' ?
                            faTruck : props?.data?.service === "house moving" ?
                                faTruckFast : props?.data?.service === "scooter" ?
                                    faMotorcycle : faCarSide
                    }
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