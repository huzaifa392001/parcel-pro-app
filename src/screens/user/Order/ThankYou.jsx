import React, { useEffect } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { generalFontSize, GlobalStyle, textColor, themeColor } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import OrderCard from '../../../components/OrderCard';

const ThankYou = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('home'); // Replace 'Home' with the name of your home route
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={[GlobalStyle.pageWrapper]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={[
                    GlobalStyle.pageContainer,
                    GlobalStyle.floatingBtnPageContainer,
                ]}
            >
                <View style={GlobalStyle.container}>
                    <View style={styles.thankyouWrapper}>
                        <Image style={styles.thankImg} source={require("../../../assets/images/thankyou.png")} />
                        {/* <View style={styles.check}>
                            <FontAwesomeIcon icon={faCheck} size={generalFontSize * 2} color={themeColor} />
                        </View> */}
                        <Text style={styles.heading}>Thank You</Text>
                        <Text style={styles.text}>Your Order has been placed successfully. One of our rider will shortly contact you for pickup.</Text>
                        <OrderCard
                            noIcon
                            id={123456}
                            pickup={"Hyderabad"}
                            delivery={"Hyderabad"}
                        />
                        <TouchableOpacity onPress={() => navigation.replace("home")} style={[GlobalStyle.themeBtn, { marginTop: 20 }]}>
                            <Text style={GlobalStyle.themeBtnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ThankYou;

const styles = StyleSheet.create({
    thankyouWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    heading: {
        color: themeColor,
        fontSize: generalFontSize * 3.5,
        fontFamily: "Axiforma-Bold",
    },
    text: {
        color: textColor,
        fontSize: generalFontSize + 2,
        fontFamily: "Axiforma-Regular",
        textAlign: 'center',
        lineHeight: generalFontSize + 8,
        marginBottom: 20
    },
    thankImg: {
        width: '100%',
        height: 350,
        marginBottom: 20
    },
    check: {
        borderWidth: 2,
        borderRadius: 100,
        borderColor: themeColor,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
