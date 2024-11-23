import React, { useEffect } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { generalFontSize, GlobalStyle, textColor } from '../../../styles/Theme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ThankYou = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('home'); // Replace 'Home' with the name of your home route
        }, 3000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={[
                    GlobalStyle.pageContainer,
                    GlobalStyle.floatingBtnPageContainer,
                ]}
            >
                <ScrollView>
                    <View style={GlobalStyle.container}>
                        <View style={GlobalStyle.pageHeadingCont}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={GlobalStyle.pageHeadingBackBtn}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    color={textColor}
                                    size={generalFontSize + 4}
                                />
                            </TouchableOpacity>
                            <Text style={GlobalStyle.pageHeading}>Thank You</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Text style={{ fontSize: generalFontSize, color: textColor }}>
                                Your order has been placed successfully!
                            </Text>
                            <Text style={{ fontSize: generalFontSize - 2, marginTop: 10 }}>
                                Redirecting to home...
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ThankYou;

const styles = StyleSheet.create({});
