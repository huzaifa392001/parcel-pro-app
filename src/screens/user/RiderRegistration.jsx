import {
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { GlobalStyle, textColor } from '../../styles/Theme';
import ImagePicker from 'react-native-image-crop-picker';
import { AuthService } from '../../services/AuthService';

const RiderRegistration = ({ navigation }) => {
    const [passportImageUri, setPassportImageUri] = useState(null);
    const [licenseFrontUri, setLicenseFrontUri] = useState(null);
    const [licenseBackUri, setLicenseBackUri] = useState(null);

    const openImagePicker = (setter) => {
        ImagePicker.openPicker({
            cropping: true,
        })
            .then((image) => {
                setter(image.path);
            })
            .catch((error) => console.log('Image Picker Error:', error));
    };

    const openCamera = (setter) => {
        ImagePicker.openCamera({
            cropping: true,
        })
            .then((image) => {
                setter(image.path);
            })
            .catch((error) => console.log('Camera Error:', error));
    };

    const handleRegistration = async () => {
        await AuthService.vendor()
        navigation.replace('home')
    }

    return (
        <SafeAreaView style={[GlobalStyle.pageWrapper, { paddingTop: 30 }]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={[GlobalStyle.pageContainer, GlobalStyle.floatingBtnPageContainer]}>
                <ScrollView>
                    <View style={GlobalStyle.container}>
                        <View style={GlobalStyle.pageHeadingCont}>
                            <Text style={GlobalStyle.pageHeading}>Register as a Rider</Text>
                        </View>

                        <View style={GlobalStyle.formContainer}>
                            <Text style={GlobalStyle.secHeading}>Vehicle Information</Text>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Vehicle Registration Number</Text>
                                <TextInput
                                    placeholder="Enter Vehicle Registration Number"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Vehicle Make</Text>
                                <TextInput
                                    placeholder="Enter Vehicle Make"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Vehicle Model</Text>
                                <TextInput
                                    placeholder="Enter Vehicle Model"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>

                            <Text style={[GlobalStyle.secHeading, { marginTop: 20 }]}>Personal Information</Text>

                            {/* Passport Image */}
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Passport Image</Text>
                                <View style={GlobalStyle.smallImgField}>
                                    <Image
                                        style={GlobalStyle.smallImg}
                                        source={
                                            passportImageUri
                                                ? { uri: passportImageUri }
                                                : require("../../assets/images/user.png")
                                        }
                                    />
                                    <View style={GlobalStyle.verticalBtnCont}>
                                        <TouchableOpacity
                                            onPress={() => openCamera(setPassportImageUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Open Camera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => openImagePicker(setPassportImageUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Upload Image</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Driving License Front Image */}
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Driving License Front Image</Text>
                                <View style={GlobalStyle.smallImgField}>
                                    <Image
                                        style={GlobalStyle.smallImg}
                                        source={
                                            licenseFrontUri
                                                ? { uri: licenseFrontUri }
                                                : require("../../assets/images/user.png")
                                        }
                                    />
                                    <View style={GlobalStyle.verticalBtnCont}>
                                        <TouchableOpacity
                                            onPress={() => openCamera(setLicenseFrontUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Open Camera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => openImagePicker(setLicenseFrontUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Upload Image</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            {/* Driving License Back Image */}
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Driving License Back Image</Text>
                                <View style={GlobalStyle.smallImgField}>
                                    <Image
                                        style={GlobalStyle.smallImg}
                                        source={
                                            licenseBackUri
                                                ? { uri: licenseBackUri }
                                                : require("../../assets/images/user.png")
                                        }
                                    />
                                    <View style={GlobalStyle.verticalBtnCont}>
                                        <TouchableOpacity
                                            onPress={() => openCamera(setLicenseBackUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Open Camera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            onPress={() => openImagePicker(setLicenseBackUri)}
                                            style={[GlobalStyle.uploadBtn, { borderRadius: 10 }]}>
                                            <Text style={GlobalStyle.pictureText}>Upload Image</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont, GlobalStyle.floatingBtn]}>
                    <TouchableOpacity
                        onPress={() => handleRegistration()}
                        style={GlobalStyle.themeBtn}>
                        <Text style={GlobalStyle.themeBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default RiderRegistration;

const styles = StyleSheet.create({});
