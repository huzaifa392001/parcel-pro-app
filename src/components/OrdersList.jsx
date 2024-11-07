import { StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import orders from '../data/minOrdersData.json' // Import the JSON file

const OrdersList = () => {

    return (
        <FlatList
            // ListHeaderComponent={props?.component}
            data={orders}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({ item }) => (
                <OrderCard
                    id={item.id}
                    pickup={item.pickup}
                    delivery={item.delivery}
                    status={item.status}
                />
            )}
        />
    )
}

export default OrdersList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
