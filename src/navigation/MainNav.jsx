import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UserNavigation from './UserNavigation'
import AuthNavigation from './AuthNavigation'

const MainNav = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            {
                isLoggedIn ?
                    (
                        <UserNavigation />
                    )
                    :
                    (
                        <AuthNavigation />
                    )
            }
        </>
    )
}

export default MainNav

const styles = StyleSheet.create({})