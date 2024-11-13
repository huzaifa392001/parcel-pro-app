import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { GlobalStyle, textColor } from '../../../styles/Theme'

const Step2 = () => {
    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={GlobalStyle.pageContainer}
            >
                <ScrollView >
                    <View style={GlobalStyle.container}>
                        <Text style={GlobalStyle.pageHeading}>Recipient's Details</Text>
                        <View style={[GlobalStyle.inputCont]}>
                            <Text style={GlobalStyle.inputLabel}>Recipient's Name</Text>
                            <TextInput
                                placeholder="Enter Recipient's Name"
                                placeholderTextColor={textColor}
                                style={GlobalStyle.input}
                            />
                        </View>
                        <View style={[GlobalStyle.inputCont]}>
                            <Text style={GlobalStyle.inputLabel}>Recipient's Contact Number</Text>
                            <TextInput
                                placeholder="Enter Recipient's Contact Number"
                                placeholderTextColor={textColor}
                                style={GlobalStyle.input}
                            />
                        </View>
                        <View style={[GlobalStyle.inputCont]}>
                            <Text style={GlobalStyle.inputLabel}>Recipient's Name</Text>
                            <TextInput
                                placeholder="Enter Recipient's Name"
                                placeholderTextColor={textColor}
                                style={GlobalStyle.input}
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Step2

const styles = StyleSheet.create({})