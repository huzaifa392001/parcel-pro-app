import { StyleSheet, FlatList, View, ActivityIndicator, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard';
import orders from '../data/minOrdersData.json'; // Import the JSON file

const OrdersList = (props) => {
    const [visibleOrders, setVisibleOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // Loader for the initial load
    const [isAppending, setIsAppending] = useState(false); // Loader for pagination
    const ITEMS_PER_PAGE = props?.itemsPerPage || 10;

    useEffect(() => {
        // Load the initial data with a simulated delay
        setTimeout(() => {
            loadMoreOrders();
            setIsLoading(false); // Hide the initial loader
        }, 1000); // Simulated delay of 1 second
    }, []);

    const loadMoreOrders = () => {
        if (isAppending) return; // Prevent multiple simultaneous loads

        setIsAppending(true); // Show the pagination loader

        // Simulate data fetching delay for pagination
        setTimeout(() => {
            const startIndex = (page - 1) * ITEMS_PER_PAGE;
            const endIndex = page * ITEMS_PER_PAGE;
            const newOrders = (props.data || orders).slice(startIndex, endIndex);

            setVisibleOrders((prevOrders) => [...prevOrders, ...newOrders]);

            setPage((prevPage) => prevPage + 1);
            setIsAppending(false); // Hide the pagination loader
        }, 1000); // Simulated delay of 1 second
    };

    if (isLoading) {
        // Show the initial loader while loading the first batch of data
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#007bff" />
                <Text style={styles.loadingText}>Loading orders...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={visibleOrders}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: 10 }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <OrderCard
                        id={item.id}
                        pickup={item.pickup}
                        delivery={item.delivery}
                        status={item.status}
                    />
                )}
                onEndReached={loadMoreOrders}
                onEndReachedThreshold={0.5}
                ListFooterComponent={
                    isAppending && (
                        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
                    )
                }
            />
        </View>
    );
};

export default OrdersList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 10,
        fontSize: 16,
        color: '#555',
    },
    loader: {
        marginVertical: 20,
    },
});
