import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { GlobalStyle, whiteColor, windowWidth } from '../../styles/Theme';
import { AuthStyles } from '../../styles/AuthStyles';
import Logo from '../../components/Logo';
import Animated, { FadeIn, FadeInLeft, FadeOutLeft } from 'react-native-reanimated';
import { useForm, Controller } from 'react-hook-form';
import { AuthService } from '../../services/AuthService';
import { useSelector } from 'react-redux';

const AuthWelcome = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm({
        defaultValues: {
            phoneNumber: useSelector((state) => state.auth.signUpNumber) || ""
        }
    });

    const onSubmit = async (data) => {
        console.log('Submitted Data:', data);
        try {
            AuthService.signup(data.phoneNumber);
            navigation.navigate("signup");
        }
        catch (e) {
            errorToast("An Error Occurred")
        }
    };

    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={GlobalStyle.pageContainer}
            >
                <View style={AuthStyles.logoCont}>
                    <Logo />
                </View>
                <View style={[AuthStyles.loginContainer, { marginTop: 'auto' }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[GlobalStyle.container, { height: 'auto', backgroundColor: 'transparent', paddingBottom: 30 }]}>
                            <Animated.Text
                                entering={FadeIn.duration(1000)}
                                style={AuthStyles.pageHeading}
                            >
                                Sign Up
                            </Animated.Text>
                            <View style={styles.imgContainer}>
                                <Animated.Image
                                    entering={FadeInLeft.duration(1000)}
                                    exiting={FadeOutLeft.duration(1000)}
                                    source={require('../../assets/images/banner.png')}
                                    style={styles.loginImg}
                                />
                            </View>
                            <View style={AuthStyles.formContainer}>
                                <Animated.View
                                    entering={FadeIn.duration(1000)}
                                    style={GlobalStyle.inputCont}
                                >
                                    <Controller
                                        control={control}
                                        name="phoneNumber"
                                        rules={{
                                            required: "Phone Number is required.",
                                            pattern: {
                                                value: /^[0-9]{11}$/,
                                                message: "Invalid phone number format."
                                            }
                                        }}
                                        render={({ field: { onChange, onBlur, value } }) => (
                                            <TextInput
                                                style={[GlobalStyle.input, GlobalStyle.altrInput]}
                                                keyboardType='number-pad'
                                                placeholder='Enter Phone Number (03121231231)'
                                                placeholderTextColor={whiteColor}
                                                onBlur={onBlur}
                                                onChangeText={onChange}
                                                value={value}
                                            />
                                        )}
                                    />
                                    {errors.phoneNumber && (
                                        <Text style={{ color: 'red', marginTop: 5 }}>
                                            {errors.phoneNumber.message}
                                        </Text>
                                    )}
                                </Animated.View>

                                <TouchableOpacity
                                    onPress={handleSubmit(onSubmit)}
                                    style={GlobalStyle.themeBtn2}
                                >
                                    <Text style={GlobalStyle.themeBtn2Text}>
                                        {isSubmitting ? "Loading..." : "Continue"}
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.replace('login')}
                                    style={AuthStyles.linkBtn}
                                >
                                    <Text style={AuthStyles.linkBtnText}>
                                        Already have an account?
                                    </Text>
                                    <Text style={[AuthStyles.linkBtnText, AuthStyles.linkBtnMain]}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default AuthWelcome;

const styles = StyleSheet.create({
    imgContainer: {
        height: 250,
        position: 'relative',
        marginTop: 'auto',
        width: windowWidth - 40
    },
    loginImg: {
        height: '100%',
        width: windowWidth - 40,
        resizeMode: 'contain',
    }
});
