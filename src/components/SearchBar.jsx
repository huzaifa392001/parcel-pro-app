import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import { generalFontSize, textColor, themeColor, whiteColor, windowWidth } from '../styles/Theme'

const SearchBar = () => {
    return (
        <View style={styles.inputCont}>
            <FontAwesomeIcon
                icon={faBox}
                color={"#858686"}
                size={generalFontSize}
            />
            <TextInput style={styles.input} placeholder='Enter Tracking Number' placeholderTextColor={"#858686"} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    inputCont: {
        width: windowWidth - 40,
        marginHorizontal: 'auto',
        borderStyle: 'solid',
        backgroundColor: whiteColor,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 30,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 15,
        gap: 20
    },
    input: {
        color: "#858686",
        height: '100%',
        width: '100%',
        fontSize: generalFontSize,
        fontFamily: 'Axiforma-Medium'
    }
})