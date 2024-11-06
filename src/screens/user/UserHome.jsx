import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../styles/Theme'
import { AuthService } from '../../services/AuthService'

const UserHome = () => {
    const logoutFunc = async () => {
        try {
            const response = await AuthService.logout();
            // navigation.replace("dashboard")
        } catch (error) {
            console.error('Login failed:', error);
        }
    }
    return (
        <View>
            <Text>UserHome</Text>
            <TouchableOpacity onPress={logoutFunc} style={GlobalStyle.themeBtn}>
                <Text style={GlobalStyle.themeBtnText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserHome

const styles = StyleSheet.create({})