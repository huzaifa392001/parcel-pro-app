import { StyleSheet } from 'react-native'
import React from 'react'
import UserNavigation from './userNavigations/UserNavigation'
import AuthNavigation from './AuthNavigation'
import { useSelector } from 'react-redux'

const MainNav = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

    return (
        <>
            {
                isAuthenticated ?
                    (
                        <>
                            <UserNavigation />

                        </>
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