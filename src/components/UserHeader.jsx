import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars, faBell, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { bgColor, generalFontSize, textColor, themeColor, whiteColor } from '../styles/Theme'

const UserHeader = ({ navigation }) => {
    return (
        <View style={styles.headerCont}>
            {/* Toggle Button for Drawer */}
            {/* <TouchableOpacity style={styles.menuBtn}>
                <FontAwesomeIcon icon={faBars} size={generalFontSize + 4} color={themeColor} />
            </TouchableOpacity> */}

            <View style={styles.userCont}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.userImgCont}>
                    <Image source={require("../assets/images/user.png")} style={styles.userImg} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.userName}>Huzaifa Iqbal</Text>
                    <TouchableOpacity style={styles.locationBtn}>
                        <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            color={themeColor}
                            size={generalFontSize}
                        />
                        <Text style={styles.locationBtnText}>Karachi</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
                <FontAwesomeIcon
                    icon={faBell}
                    size={generalFontSize + 4}
                    color={themeColor}
                />
            </TouchableOpacity>
        </View>
    )
}

export default UserHeader

const styles = StyleSheet.create({
    headerCont: {
        backgroundColor: bgColor,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menuBtn: {
        backgroundColor: whiteColor,
        height: 50,
        width: 50,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    userCont: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    userImgCont: {
        height: 60,
        width: 60,
        borderRadius: 100,
        overflow: 'hidden',
        position: 'relative',
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: whiteColor
    },
    userImg: {
        position: 'absolute',
        width: "100%",
        height: '100%',
        backgroundColor: "#f6f6f6"
    },
    userName: {
        fontFamily: 'Axiforma-Bold',
        color: textColor,
        fontSize: generalFontSize + 4,
        marginBottom: 5
    },
    locationBtn: {
        flexDirection: 'row'
    },
    locationBtnText: {
        fontFamily: 'Axiforma-Regular',
        color: textColor,
        fontSize: generalFontSize
    },
    notificationBtn: {
        backgroundColor: whiteColor,
        height: 50,
        width: 50,
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
