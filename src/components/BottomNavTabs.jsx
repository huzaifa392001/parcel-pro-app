// BottomNavTabs.js
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { generalFontSize, themeColor, whiteColor, windowWidth } from '../styles/Theme';
import { faHome, faTruckFast, faUser } from '@fortawesome/free-solid-svg-icons';

const BottomNavTabs = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    if (!isFocused) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={[styles.tab, isFocused ? styles.tabFocused : null]}
                    >
                        <FontAwesomeIcon
                            icon={
                                route.name === "home" ? faHome :
                                    route.name === "profile" ? faUser :
                                        route.name === 'tracking' ? faTruckFast : ''
                            }
                            size={generalFontSize + 8}
                            color={isFocused ? whiteColor : themeColor}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default BottomNavTabs;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
        paddingBottom: 10,
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: whiteColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.8,
        shadowRadius: 0,
        elevation: 5,
    },
    tabFocused: {
        backgroundColor: themeColor,
    },
});

