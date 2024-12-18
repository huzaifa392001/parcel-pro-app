import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
    bgColor,
    generalFontSize,
    textColor,
    themeColor,
    whiteColor,
} from '../styles/Theme';
import { useRoute } from '@react-navigation/native';

const VendorHeader = () => {
    const route = useRoute();
    return (
        <>
            <View style={styles.headerCont}>
                <View style={styles.userCont}>
                    <TouchableOpacity
                        onPress={() => toggleDrawer()}
                        style={styles.userImgCont}>
                        <FontAwesomeIcon
                            icon={faBars}
                            size={generalFontSize * 1.5}
                            color={themeColor}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleCont}>
                    <Text style={styles.welcome}>
                        {
                            route?.name === 'vendorDashboard' ? "Home"
                                : route?.name
                        }
                    </Text>
                </View>
            </View>
        </>
    )
}

export default VendorHeader

const styles = StyleSheet.create({
    headerCont: {
        backgroundColor: bgColor,
        paddingHorizontal: 20,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    userCont: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    userImgCont: {
        height: 60,
        width: 60,
        borderRadius: 100,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: whiteColor,
        alignItems: "center",
        justifyContent: 'center',
        position: 'absolute',
        zIndex: 1
    },
    userImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#f6f6f6',
    },
    welcome: {
        fontFamily: 'Axiforma-Bold',
        color: textColor,
        fontSize: generalFontSize + 5,
        textAlign: 'center'
    },
    titleCont: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
});
