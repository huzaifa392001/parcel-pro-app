import React from 'react';
import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { store } from '../../Redux/Store';
import { SET_FCM_TOKEN, SET_NOTIFICATION_STATUS } from '../../Redux/Store/Slices/General';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faBox, faCheckCircle, faMotorcycle, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import { generalFontSize, GlobalStyle, textColor, themeColor, whiteColor } from '../../styles/Theme';
import { handleNotificationPermission } from '../../utils/Utils';
import { AuthService } from '../../services/AuthService';

const Settings = ({ navigation }) => {
    const notiStatus = useSelector((state) => state.general.isNotificationActive);

    const handleNotificationStatus = async () => {
        if (notiStatus) {
            // Turn off notifications
            store.dispatch(SET_NOTIFICATION_STATUS(false));
            store.dispatch(SET_FCM_TOKEN(null)); // Clear FCM token
            console.log('Notifications turned off.');
        } else {
            // Turn on notifications
            await handleNotificationPermission();
        }
    };

    const handleDelete = async () => {
        try {
            await AuthService.delete()
        }
        catch (e) {
            Alert.alert(`Error Deleting Profile. ${e}`)
        }
    }

    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <ScrollView>
                <View style={GlobalStyle.container}>
                    <View style={GlobalStyle.pageHeadingCont}>
                        <Text style={GlobalStyle.pageHeading}>Order Size</Text>
                    </View>
                    <View style={styles.menu}>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.menuItem}>
                            <FontAwesomeIcon icon={faUser} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('orders')} style={styles.menuItem}>
                            <FontAwesomeIcon icon={faBox} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleNotificationStatus}
                            style={[styles.menuItem, notiStatus && styles.notiItem]}
                        >
                            <FontAwesomeIcon
                                icon={faBell}
                                size={generalFontSize + 4}
                                color={notiStatus ? whiteColor : themeColor}
                            />
                            <Text style={[styles.menuText, { color: notiStatus ? whiteColor : textColor }]}>
                                Notifications
                            </Text>
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                size={generalFontSize + 4}
                                color={notiStatus ? whiteColor : themeColor}
                                style={{ marginLeft: 'auto' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.replace('registration')} style={styles.menuItem}>
                            <FontAwesomeIcon icon={faMotorcycle} size={generalFontSize + 4} color={themeColor} />
                            <Text style={styles.menuText}>Become A Rider</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDelete()} style={[styles.menuItem, styles.dltBtn]}>
                            <FontAwesomeIcon icon={faTrash} size={generalFontSize + 4} color={whiteColor} />
                            <Text style={[styles.menuText, styles.dltBtnText]}>Delete Your Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Settings;

const styles = StyleSheet.create({
    menu: {
        gap: 20,
        marginBottom: 50,
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
        gap: 20,
    },
    menuText: {
        fontSize: generalFontSize + 2,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
        fontWeight: '400',
    },
    notiItem: {
        backgroundColor: themeColor,
    },
    dltBtn: {
        backgroundColor: 'red'
    },
    dltBtnText: {
        color: whiteColor
    }
});
