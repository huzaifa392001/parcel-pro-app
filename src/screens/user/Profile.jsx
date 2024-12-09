import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { bgColor, generalFontSize, GlobalStyle, textColor, themeColor } from '../../styles/Theme'
import ProfileCard from '../../components/ProfileCard'
import ImagePicker from 'react-native-image-crop-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    const [imageUri, setImageUri] = useState(null);

    const openImagePicker = () => {
        ImagePicker.openPicker({
            cropping: true,
        })
            .then(image => {
                setImageUri(image.path);
            })
            .catch(error => console.log('Image Picker Error:', error));
    };

    const openCamera = () => {
        ImagePicker.openCamera({
            cropping: true,
        })
            .then(image => {
                setImageUri(image.path);
            })
            .catch(error => console.log('Camera Error:', error));
    };
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
                    <View style={[GlobalStyle.container, { paddingBottom: 20 }]}>
                        <View style={GlobalStyle.pageHeadingCont}>
                            <Text style={GlobalStyle.pageHeading}>My Profile</Text>
                        </View>
                        {/* <ProfileCard /> */}
                        <View style={GlobalStyle.formContainer}>
                            <View style={GlobalStyle.inputCont}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}>
                                    <Text style={GlobalStyle.inputLabel}>Profile Picture</Text>
                                    {/* <Text
                                        style={[
                                            GlobalStyle.inputLabel,
                                            { fontSize: generalFontSize - 4 },
                                        ]}>
                                        * Picture will be hidden from Rider *
                                    </Text> */}
                                </View>
                                <View style={GlobalStyle.pictureBtn}>
                                    <View style={GlobalStyle.picturePreview}>
                                        {imageUri ? (
                                            <Image
                                                source={{ uri: imageUri }}
                                                style={GlobalStyle.dummyPicturePreview}
                                            />
                                        ) : (
                                            <Image
                                                style={GlobalStyle.dummyPicturePreview}
                                                source={require('../../assets/images/dummy.png')}
                                            />
                                        )}
                                        <View style={GlobalStyle.uploadBtnCont}>
                                            <TouchableOpacity
                                                onPress={openImagePicker}
                                                style={GlobalStyle.uploadBtn}>
                                                <Text style={GlobalStyle.pictureText}>
                                                    Click to Upload Image
                                                </Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={openCamera}
                                                style={[
                                                    GlobalStyle.uploadBtn,
                                                    { borderLeftWidth: 2, borderLeftColor: bgColor },
                                                ]}>
                                                <Text style={GlobalStyle.pictureText}>
                                                    Click to Open Camera
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>Full Name</Text>
                                <TextInput
                                    placeholder="Enter Full Name"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>
                                    Contact Number
                                </Text>
                                <TextInput
                                    editable={false}
                                    placeholder="Enter Contact Number"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>
                                    Email Address
                                </Text>
                                <TextInput
                                    editable={false}
                                    placeholder="Enter Contact Number"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>
                                    CNIC
                                </Text>
                                <TextInput
                                    editable={false}
                                    placeholder="Enter Contact Number"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                            <View style={GlobalStyle.inputCont}>
                                <Text style={GlobalStyle.inputLabel}>Pickup Address</Text>
                                <Text
                                    style={[
                                        GlobalStyle.inputLabel,
                                        { fontSize: generalFontSize - 4 },
                                    ]}>
                                    * Share location using Google Map for precise location. *
                                </Text>
                                <View style={GlobalStyle.inputWithIconCont}>
                                    <FontAwesomeIcon
                                        icon={faLocationPin}
                                        size={generalFontSize}
                                        color={themeColor}
                                    />
                                    <TextInput
                                        placeholder="Pickup Address"
                                        placeholderTextColor={textColor}
                                        style={GlobalStyle.inputWithIconCont.input}
                                    />
                                </View>
                            </View>
                            <View style={[GlobalStyle.inputCont]}>
                                <Text style={GlobalStyle.inputLabel}>
                                    Contact Number
                                </Text>
                                <TextInput
                                    placeholder="Enter Contact Number"
                                    placeholderTextColor={textColor}
                                    style={GlobalStyle.input}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={[GlobalStyle.inputCont, GlobalStyle.submitBtnCont, GlobalStyle.floatingBtn]}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('step2')}
                        style={GlobalStyle.themeBtn}>
                        <Text style={GlobalStyle.themeBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})
