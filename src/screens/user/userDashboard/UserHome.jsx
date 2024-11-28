import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from '../../../styles/Theme';
import ActiveOrderCard from '../../../components/ActiveOrderCard';
import OrdersList from '../../../components/OrdersList';
import ServiceCard from '../../../components/ServiceCard';
import services from '../../../data/servicesData.json'; // Import the JSON file
import Banner from '../../../components/Banner';
import { useSelector } from 'react-redux';

const UserHome = () => {
  const [activeOrder, setActiveOrder] = useState(true)
  const fcm = useSelector((state) => state.general.FCMToken)
  useEffect(() => {
    console.log("fcm")
  }, [])
  return (
    <SafeAreaView style={GlobalStyle.pageWrapper}>
      {/* <SearchBar /> */}
      <ScrollView>
        <View style={GlobalStyle.container}>
          <Banner />
          {activeOrder && (
            <View style={GlobalStyle.section}>
              <Text style={GlobalStyle.secHeading}>Active Delivery</Text>
              <ActiveOrderCard />
            </View>
          )}
          <View style={[GlobalStyle.section, { paddingTop: 0 }]}>
            <Text style={GlobalStyle.secHeading}>Services</Text>
            <FlatList
              data={services}
              numColumns={2}
              columnWrapperStyle={{ gap: 20, paddingBottom: 20 }}
              renderItem={({ item }) => <ServiceCard data={item} />}
            />
          </View>
          <View style={[GlobalStyle.section, { paddingTop: 0 }]}>
            <Text style={GlobalStyle.secHeading}>Recent Orders</Text>
            <OrdersList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserHome;

const styles = StyleSheet.create({});
