import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSignOutAlt, faCog, faUser, faHome, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { themeColor, textColor, whiteColor, generalFontSize, secondaryColor } from '../styles/Theme';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation()
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileSection}>
                <Image source={require("../assets/images/user.png")} style={styles.profileImage} />
                <View>
                    <Text style={styles.userName}>Huzaifa Iqbal</Text>
                    <Text style={styles.userLocation}>Karachi</Text>
                </View>
            </View>

            {/* Drawer Items */}
            <View style={styles.drawerItemsContainer}>
                {/* <DrawerItemList {...props} /> */}

                {/* Custom Drawer Items */}
                <DrawerItem
                    style={styles.drawerItem}
                    label="Home"
                    labelStyle={styles.drawerItemText}
                    icon={() => (
                        <FontAwesomeIcon icon={faHome} color={themeColor} size={generalFontSize + 6} />
                    )}
                    onPress={() => navigation.navigate("dashboard")}
                />
                <DrawerItem
                    style={styles.drawerItem}
                    label="Profile"
                    labelStyle={styles.drawerItemText}
                    icon={() => (
                        <FontAwesomeIcon icon={faUser} color={themeColor} size={generalFontSize + 6} />
                    )}
                    onPress={() => navigation.navigate("profile")}
                />
                <DrawerItem
                    style={styles.drawerItem}
                    label="Tracking"
                    labelStyle={styles.drawerItemText}
                    icon={() => (
                        <FontAwesomeIcon icon={faTruckFast} color={themeColor} size={generalFontSize + 6} />
                    )}
                    onPress={() => navigation.navigate("tracking")}
                />
            </View>

            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logging out...')}>
                <FontAwesomeIcon icon={faSignOutAlt} color={themeColor} size={20} />
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomColor: themeColor,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: themeColor,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        alignItems: 'center',
    },
    userName: {
        fontSize: generalFontSize + 6,
        color: textColor,
        fontFamily: 'Axiforma-Bold',
        marginBottom: 2,
    },
    userLocation: {
        fontSize: generalFontSize,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
    },
    drawerItemsContainer: {
        flex: 1,
        backgroundColor: whiteColor,
        padding: 0,
    },
    drawerItem: {
        borderBottomWidth: 1,
        borderBottomColor: themeColor,
        borderStyle: 'solid',
        borderRadius: 0,
        padding: 0
    },
    drawerItemText: {
        fontSize: generalFontSize + 4
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    logoutText: {
        marginLeft: 10,
        fontSize: 16,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
    },
});
