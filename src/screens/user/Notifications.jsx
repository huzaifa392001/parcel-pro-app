import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { generalFontSize, GlobalStyle, textColor, themeColor } from '../../styles/Theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Notifications = ({ navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    size={generalFontSize * 2}
                    color={themeColor}
                />
            </TouchableOpacity>
            <Text style={GlobalStyle.secHeading}>Notification</Text>
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({})