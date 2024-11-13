import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { generalFontSize, secondaryColor, textColor, themeColor, whiteColor } from '../styles/Theme'

const SizeBox = (props) => {
    const { isSelected, onSelect } = props;
    return (
        <TouchableOpacity style={[styles.box, isSelected && styles.activeBox]} onPress={onSelect}>
            <View style={styles.imageCont}>
                <Image style={styles.img} source={props?.data?.image} />
            </View>
            <View style={styles.content}>
                <Text style={[styles.heading, isSelected && { color: whiteColor }]}>
                    {props?.data?.heading}
                </Text>
                <Text style={[styles.measure, isSelected && { color: whiteColor }]}>
                    {props?.data?.measures}
                </Text>
                <Text style={[styles.desc, isSelected && { color: whiteColor }]}>
                    {props?.data?.description}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default SizeBox;

const styles = StyleSheet.create({
    box: {
        backgroundColor: whiteColor,
        shadowColor: '#0002',
        shadowOffset: { width: 3, height: 3 },
        shadowRadius: 10,
        elevation: 10,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 20,
        alignItems: 'center',
        borderRadius: 10
    },
    imageCont: {
        width: 100,
        height: 100
    },
    img: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    heading: {
        fontSize: generalFontSize,
        fontWeight: '600',
        fontFamily: 'Axiforma-Bold',
        color: textColor,
        marginBottom: 5
    },
    measure: {
        fontSize: generalFontSize - 2,
        fontWeight: '600',
        fontFamily: 'Axiforma-Regular',
        color: textColor,
        marginBottom: 10
    },
    desc: {
        fontSize: generalFontSize - 2,
        fontWeight: '600',
        fontFamily: 'Axiforma-Medium',
        color: '#aaa'
    },
    activeBox: {
        backgroundColor: themeColor
    }
});
