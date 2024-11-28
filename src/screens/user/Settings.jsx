import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { generalFontSize, GlobalStyle, textColor, themeColor, whiteColor } from '../../styles/Theme'
import ProfileCard from '../../components/ProfileCard'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBell, faBox, faCheck, faCheckCircle, faMotorcycle, faUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { store } from '../../Redux/Store'
import { SET_NOTIFICATION_STATUS } from '../../Redux/Store/Slices/General'

const Settings = () => {
    const notiStatus = useSelector((state) => state.general.isNotificationActive)
    const handleNotificationStatus = () => {
        notiStatus === true ? store.dispatch(SET_NOTIFICATION_STATUS(false)) : store.dispatch(SET_NOTIFICATION_STATUS(true))
    }
    const [isNotiActive, setIsNotiActive] = useState(false)
    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <ScrollView>
                <View style={GlobalStyle.container}>
                    <ProfileCard />
                    <View style={GlobalStyle.pageHeadingCont}>
                        <Text style={GlobalStyle.pageHeading}>Order Size</Text>
                    </View>
                    <View style={styles.menu}>
                        <TouchableOpacity style={styles.menuItem}>
                            <FontAwesomeIcon icon={faUser} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>
                                Profile
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <FontAwesomeIcon icon={faBox} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>
                                Orders
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleNotificationStatus} style={[styles.menuItem, notiStatus && (styles.notiItem)]}>
                            <FontAwesomeIcon icon={faBell} size={generalFontSize + 4} color={notiStatus ? whiteColor : themeColor} />
                            <Text style={[styles.menuText, { color: notiStatus ? whiteColor : textColor }]}>
                                Notifications
                            </Text>
                            <FontAwesomeIcon icon={faCheckCircle} size={generalFontSize + 4} color={notiStatus ? whiteColor : themeColor} style={{ marginLeft: 'auto' }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem}>
                            <FontAwesomeIcon icon={faMotorcycle} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>
                                Become A Vendor
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Settings

const styles = StyleSheet.create({
    menu: {
        gap: 20,
        marginBottom: 50
    },
    menuItem: {
        backgroundColor: whiteColor,
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    menuText: {
        fontSize: generalFontSize + 2,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
        fontWeight: "400"
    },
    notiItem: {
        backgroundColor: themeColor,
    }
})