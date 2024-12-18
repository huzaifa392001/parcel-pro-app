import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { generalFontSize, GlobalStyle, secondaryColor, textColor, themeColor, whiteColor } from '../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBox, faLongArrowAltDown, faUser } from '@fortawesome/free-solid-svg-icons';

const VendorDashboard = () => {
    const [toggleState, setToggleState] = useState(true); // Initial state for toggle

    const handleToggle = () => {
        setToggleState(!toggleState); // Flip the toggle state
    };

    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <View style={[
                GlobalStyle.pageContainer,
                GlobalStyle.floatingBtnPageContainer
            ]}>
                <ScrollView style={GlobalStyle.container}>
                    <View style={styles.headCont}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.headContText}>
                                Hey, Huzaifa
                            </Text>
                            <Text style={styles.headContMinText}>
                                Ready to take your next order?
                            </Text>
                        </View>
                        <TouchableOpacity style={GlobalStyle.toggleBtn} onPress={handleToggle}>
                            <View
                                style={[
                                    GlobalStyle.toggleBtnCont,
                                    !toggleState && GlobalStyle.activeToggleBtn
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle.toggleBtnText,
                                        !toggleState && GlobalStyle.activeToggleBtnText
                                    ]}
                                >
                                    Off
                                </Text>
                            </View>
                            <View
                                style={[
                                    GlobalStyle.toggleBtnCont,
                                    toggleState && GlobalStyle.activeToggleBtn
                                ]}
                            >
                                <Text
                                    style={[
                                        GlobalStyle.toggleBtnText,
                                        toggleState && GlobalStyle.activeToggleBtnText
                                    ]}
                                >
                                    On
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {toggleState && (
                        <View style={styles.newOrder}>
                            <View style={styles.orderBox}>
                                <View style={styles.orderHeadingCont}>
                                    <FontAwesomeIcon
                                        icon={faBox}
                                        size={generalFontSize + 6}
                                        color={"#ccc"}
                                    />
                                    <Text style={styles.orderHeading}>New Order</Text>
                                    <View style={styles.pill}>
                                        <Text style={styles.pillText}>Single Trip</Text>
                                    </View>
                                </View>
                                <View style={styles.customerInfo}>
                                    <View style={styles.customerIconCont} >
                                        <FontAwesomeIcon
                                            icon={faUser}
                                            size={generalFontSize * 1.5}
                                            color={themeColor}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.customerName}>
                                            Huzaifa Iqbal
                                        </Text>
                                        <Text style={styles.customerInfoText}>
                                            Customer
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.orderDetails}>
                                <View style={styles.locationInfo} >
                                    <Text style={styles.locationHeading}>Pickup</Text>
                                    <Text style={styles.location}>
                                        No 2, Balonny Close, Allen Avenue
                                    </Text>
                                </View>
                                <View style={styles.locationIconCont}>
                                    <FontAwesomeIcon
                                        icon={faLongArrowAltDown}
                                    />
                                </View>
                                <View style={styles.locationInfo} >
                                    <Text style={styles.locationHeading}>Delivery</Text>
                                    <Text style={styles.location}>
                                        87, South Lester Street, London Close Belgium
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.orderDetails}>
                                <View style={styles.locationInfo} >
                                    <Text style={styles.locationHeading}>Order Info</Text>
                                    <Text style={styles.location}>
                                        Document 5kg
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
                {toggleState && (
                    <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont, GlobalStyle.floatingBtn, { paddingBottom: 50 }]}>
                        <TouchableOpacity
                            onPress={() => handleRegistration()}
                            style={GlobalStyle.themeBtn}>
                            <Text style={GlobalStyle.themeBtnText}>Accept Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => handleRegistration()}
                            style={[GlobalStyle.themeBtn2, { marginTop: 10 }]}>
                            <Text style={GlobalStyle.themeBtn2Text}>Decline</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </SafeAreaView >
    );
};

export default VendorDashboard;

const styles = StyleSheet.create({
    headCont: {
        // shadowOffset: { width: 3, height: 3 },
        // shadowOpacity: 0.8,
        // shadowRadius: 3,
        // elevation: 10,
        // backgroundColor: whiteColor,
        flexDirection: 'row',
        paddingVertical: 15,
        // paddingHorizontal: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headContText: {
        fontSize: generalFontSize * 1.5,
        color: textColor,
        fontFamily: 'Axiforma-Medium',
    },
    headContMinText: {
        fontSize: generalFontSize,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
        lineHeight: generalFontSize + 6,
        marginTop: 5
    },
    newOrder: {
        marginTop: 20
    },
    orderBox: {
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
        backgroundColor: whiteColor,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    orderHeadingCont: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginBottom: 25
    },
    orderHeading: {
        fontFamily: 'Axiforma-Medium',
        fontSize: generalFontSize + 2,
        color: themeColor
    },
    customerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    customerIconCont: {
        backgroundColor: '#6b72ff80',
        padding: 10,
        borderRadius: 100
    },
    customerName: {
        fontFamily: 'Axiforma-Medium',
        color: textColor,
        fontSize: generalFontSize
    },
    customerInfoText: {
        fontFamily: 'Axiforma-Regular',
        color: textColor,
        fontSize: generalFontSize - 2
    },
    pill: {
        backgroundColor: '#30cdff80',
        paddingHorizontal: 15,
        borderRadius: 10,
        paddingVertical: 5,
        marginLeft: 'auto'
    },
    pillText: {
        fontFamily: 'Axiforma-Bold',
        color: textColor,
        fontSize: generalFontSize - 4
    },
    orderDetails: {
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: themeColor,
        paddingTop: 20
    },
    locationHeading: {
        fontFamily: "Axiforma-Medium",
        fontSize: generalFontSize,
        color: themeColor,
        marginBottom: 10
    },
    location: {
        fontFamily: "Axiforma-Medium",
        fontSize: generalFontSize,
        color: textColor,

    },
    locationIconCont: {
        marginVertical: 30,
    }
});
