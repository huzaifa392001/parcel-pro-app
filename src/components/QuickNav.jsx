import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMotorcycle, faTruck, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { generalFontSize, secondaryColor, textColor, themeColor, whiteColor, windowWidth } from '../styles/Theme';

const QuickNav = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const isRouteActive = (targetRoute) => route.name === targetRoute;

    return (
        <View style={styles.navContainer}>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('scooter')}
            >
                <View style={[styles.btnIcon, isRouteActive('scooter') && styles.activeBtnIcon]}>
                    <FontAwesomeIcon icon={faMotorcycle} color={whiteColor} size={generalFontSize * 2} />
                </View>
                <Text style={styles.btnText}>Scooter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('truck')}
            >
                <View style={[styles.btnIcon, isRouteActive('truck') && styles.activeBtnIcon]}>
                    <FontAwesomeIcon icon={faTruck} color={whiteColor} size={generalFontSize * 2} />
                </View>
                <Text style={styles.btnText}>Truck</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('houseMoving')}
            >
                <View style={[styles.btnIcon, isRouteActive('houseMoving') && styles.activeBtnIcon]}>
                    <FontAwesomeIcon icon={faTruckFast} color={whiteColor} size={generalFontSize * 2} />
                </View>
                <Text style={styles.btnText}>Movers</Text>
            </TouchableOpacity>
        </View>
    );
}

export default QuickNav;

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 15,
        width: windowWidth,
        backgroundColor: whiteColor,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
    },
    btnIcon: {
        backgroundColor: secondaryColor,
        borderRadius: 100,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 10,
    },
    activeBtnIcon: {
        backgroundColor: themeColor, // Apply a different color for the active route
    },
    btnText: {
        color: textColor,
        fontSize: generalFontSize,
        textAlign: 'center',
        fontFamily: 'Axiforma-Bold'
    }
});
