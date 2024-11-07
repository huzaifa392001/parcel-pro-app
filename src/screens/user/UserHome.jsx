import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../styles/Theme'
import { AuthService } from '../../services/AuthService'
import SearchBar from '../../components/SearchBar'
import ActiveOrderCard from '../../components/ActiveOrderCard'
import OrdersList from '../../components/OrdersList'

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
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <SearchBar />
            <ScrollView>
                <View style={GlobalStyle.container}>
                    <View style={GlobalStyle.section}>
                        <Text style={GlobalStyle.secHeading}>Active Delivery</Text>
                        <ActiveOrderCard />
                    </View>
                    <View style={GlobalStyle.section}>
                        <Text style={GlobalStyle.secHeading}>Recent Orders</Text>
                        <OrdersList />
                    </View>
                    {/* <View style={GlobalStyle.section}>
                        <Text>UserHome</Text>
                        <TouchableOpacity onPress={logoutFunc} style={GlobalStyle.themeBtn}>
                            <Text style={GlobalStyle.themeBtnText}>Logout</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default UserHome

const styles = StyleSheet.create({})