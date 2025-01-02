import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, SafeAreaView, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { generalFontSize, GlobalStyle, themeColor, whiteColor } from '../../styles/Theme';
import { AuthStyles } from '../../styles/AuthStyles';
import Logo from '../../components/Logo';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useSelector } from 'react-redux';
import { AuthService } from '../../services/AuthService';
import { Controller, useForm } from 'react-hook-form';

const Signup = ({ navigation }) => {
    const [loading, isLoading] = useState(false)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            fname: '',
            email: '',
            cnic: '',
            phoneNumber: useSelector((state) => state.auth.signUpNumber),
            password: '',
            password_confirmation: '',
            address: 'abc'
        },
    });

    const signupFunc = async (data) => {
        isLoading(true); // Set loading state to true when the signup process starts
        await AuthService.register(data)
            .then(() => {
                isLoading(false); // Reset loading state after the signup process completes
            })
            .catch(() => {
                isLoading(false); // Reset loading state if there is an error
            });
    };

    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            {loading && (
                <View style={GlobalStyle.loadingContainer}>
                    <ActivityIndicator size="large" color={themeColor} />
                    <Text style={GlobalStyle.loadingText}>Please wait...</Text>
                </View>
            )}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={GlobalStyle.pageContainer}
            >
                <View style={AuthStyles.logoCont}>
                    <Logo />
                </View>
                <View style={[AuthStyles.loginContainer, { marginTop: 'auto' }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={[GlobalStyle.container, { height: 'auto', backgroundColor: 'transparent', paddingBottom: 30 }]}>
                            <Animated.Text entering={FadeIn.duration(1000)} style={[AuthStyles.pageHeading, { fontSize: generalFontSize * 3 }]}>
                                Create Profile
                            </Animated.Text>
                            <View style={AuthStyles.formContainer}>
                                <View style={AuthStyles.inputGroup}>
                                    {[
                                        { name: 'name', placeholder: 'Enter First Name', keyboardType: 'default' },
                                        { name: 'fname', placeholder: 'Enter Last Name', keyboardType: 'default' },
                                    ].map((field) => (
                                        <Animated.View key={field.name} entering={FadeIn.duration(1000)} style={GlobalStyle.inputCont}>
                                            <Controller
                                                control={control}
                                                name={field.name}
                                                rules={{
                                                    required: `${field.placeholder} is required.`,
                                                    ...(field.pattern && { pattern: field.pattern }),
                                                }}
                                                render={({ field: { onChange, onBlur, value } }) => (
                                                    <TextInput
                                                        style={[GlobalStyle.input, GlobalStyle.altrInput, errors[field.name] && GlobalStyle.errorField]}
                                                        keyboardType={field.keyboardType}
                                                        placeholder={field.placeholder}
                                                        placeholderTextColor={errors[field.name] ? "#dc3545" : whiteColor}
                                                        onBlur={onBlur}
                                                        onChangeText={onChange}
                                                        value={value}
                                                    />
                                                )}
                                            />
                                            {errors[field.name] && (
                                                <Text style={GlobalStyle.error}>{errors[field.name].message}</Text>
                                            )}
                                        </Animated.View>
                                    ))}
                                </View>
                                {[
                                    {
                                        name: 'email',
                                        placeholder: 'Enter Email Address',
                                        keyboardType: 'email-address',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Invalid email format.',
                                        },
                                    },
                                    {
                                        name: 'cnic',
                                        placeholder: 'Enter CNIC',
                                        keyboardType: 'number-pad',
                                        pattern: {
                                            value: /^[0-9]{13}$/,
                                            message: 'CNIC must be 13 digits and numeric only.',
                                        },
                                    },
                                    {
                                        name: 'phoneNumber',
                                        placeholder: 'Enter Phone Number (03121231231)',
                                        keyboardType: 'number-pad',
                                        pattern: {
                                            value: /^[0-9]{11}$/,
                                            message: 'Invalid phone number format.',
                                        },
                                    },
                                    { name: 'address', placeholder: 'Enter Address', keyboardType: 'default' },
                                ].map((field) => (
                                    <Animated.View key={field.name} entering={FadeIn.duration(1000)} style={GlobalStyle.inputCont}>
                                        <Controller
                                            control={control}
                                            name={field.name}
                                            rules={{
                                                required: `${field.placeholder} is required.`,
                                                ...(field.pattern && { pattern: field.pattern }),
                                            }}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    style={[GlobalStyle.input, GlobalStyle.altrInput, errors[field.name] && GlobalStyle.errorField]}
                                                    keyboardType={field.keyboardType}
                                                    placeholder={field.placeholder}
                                                    placeholderTextColor={errors[field.name] ? "#dc3545" : whiteColor}
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                />
                                            )}
                                        />
                                        {errors[field.name] && (
                                            <Text style={GlobalStyle.error}>{errors[field.name].message}</Text>
                                        )}
                                    </Animated.View>
                                ))}

                                {[
                                    {
                                        name: 'password',
                                        placeholder: 'Password',
                                        secureTextEntry: true,
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message:
                                                'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.',
                                        },
                                    },
                                    {
                                        name: 'password_confirmation',
                                        placeholder: 'Confirm Password',
                                        secureTextEntry: true,
                                        validate: (value, { password }) => {
                                            if (value !== password) {
                                                return 'Passwords do not match';
                                            }
                                            return true; // Return true if passwords match
                                        },
                                    },
                                ].map((field) => (
                                    <Animated.View key={field.name} entering={FadeIn.duration(1000)} style={GlobalStyle.inputCont}>
                                        <Controller
                                            control={control}
                                            name={field.name}
                                            rules={{
                                                required: `${field.placeholder} is required.`,
                                                ...(field.name === 'password' && { pattern: field.pattern }),
                                                ...(field.name === 'password_confirmation' && {
                                                    validate: field.validate,
                                                }),
                                            }}
                                            render={({ field: { onChange, onBlur, value } }) => (
                                                <TextInput
                                                    style={[GlobalStyle.input, GlobalStyle.altrInput, errors[field.name] && GlobalStyle.errorField]}
                                                    placeholder={field.placeholder}
                                                    placeholderTextColor={errors[field.name] ? '#dc3545' : whiteColor}
                                                    secureTextEntry={field.secureTextEntry}
                                                    onBlur={onBlur}
                                                    onChangeText={onChange}
                                                    value={value}
                                                />
                                            )}
                                        />
                                        {errors[field.name] && (
                                            <Text style={GlobalStyle.error}>{errors[field.name].message}</Text>
                                        )}
                                    </Animated.View>
                                ))}
                                <TouchableOpacity onPress={handleSubmit(signupFunc)} style={GlobalStyle.themeBtn2}>
                                    <Text style={GlobalStyle.themeBtn2Text}>Continue</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.replace('login')} style={AuthStyles.linkBtn}>
                                    <Text style={AuthStyles.linkBtnText}>Already have an Account?</Text>
                                    <Text style={[AuthStyles.linkBtnText, AuthStyles.linkBtnMain]}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({
});
