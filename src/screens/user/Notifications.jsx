import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { generalFontSize, GlobalStyle, textColor, themeColor } from '../../styles/Theme'
import NotiBox from '../../components/NotiBox'

const Notifications = ({ navigation }) => {
    return (
        <SafeAreaView style={GlobalStyle.pageWrapper}>
            <View style={[GlobalStyle.container, { paddingBottom: 20 }]}>
                <View style={GlobalStyle.pageHeadingCont}>
                    <Text style={GlobalStyle.pageHeading}>Notifications</Text>
                </View>
                <FlatList
                    contentContainerStyle={{ gap: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]}
                    renderItem={({ item, index }) => (
                        <NotiBox key={index} data={item} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}

export default Notifications

const styles = StyleSheet.create({})