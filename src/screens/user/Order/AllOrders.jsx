import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyle } from '../../../styles/Theme'
import OrdersList from '../../../components/OrdersList'
import orders from "../../../data/OrdersData.json"

const AllOrders = () => {
    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <View style={GlobalStyle.pageContainer}>
                <View style={[GlobalStyle.container, { paddingBottom: 20 }]}>
                    <View style={GlobalStyle.pageHeadingCont}>
                        <Text style={GlobalStyle.pageHeading}>My Orders</Text>
                    </View>
                    <OrdersList data={orders} itemsPerPage={15} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default AllOrders

const styles = StyleSheet.create({})