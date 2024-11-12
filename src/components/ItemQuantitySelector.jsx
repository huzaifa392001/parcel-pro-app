import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { generalFontSize, textColor, themeColor, whiteColor } from '../styles/Theme'

const ItemQuantitySelector = ({ item, counter, setCounter }) => {
    return (
        <View style={styles.itemCont}>
            <Text style={styles.itemHeading}>
                {item}
            </Text>
            <View style={styles.counterCont}>
                <TouchableOpacity
                    style={styles.counterBtn}
                    onPress={() => setCounter(Math.max(0, counter - 1))} // Prevent counter from going below 0
                >
                    <FontAwesomeIcon
                        icon={faMinus}
                        color={whiteColor}
                        size={generalFontSize}
                    />
                </TouchableOpacity>
                <Text style={styles.counterText}>{counter}</Text>
                <TouchableOpacity
                    style={styles.counterBtn}
                    onPress={() => setCounter(counter + 1)}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        color={whiteColor}
                        size={generalFontSize}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ItemQuantitySelector

const styles = StyleSheet.create({
    itemCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemHeading: {
        fontSize: generalFontSize,
        color: textColor,
        fontFamily: 'Axiforma-Regular',
    },
    counterCont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
    },
    counterBtn: {
        backgroundColor: themeColor,
        padding: 5,
    },
    counterText: {
        color: textColor,
        fontFamily: "Axiforma-Medium",
        fontSize: generalFontSize,
    },
})
