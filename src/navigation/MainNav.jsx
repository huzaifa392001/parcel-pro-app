import { StyleSheet } from 'react-native'
import React from 'react'
import UserNavigation from './userNavigations/UserNavigation'
import AuthNavigation from './AuthNavigation'
import { useSelector } from 'react-redux'
import VendorNavigation from './VendorNavigation/VendorNavigation'

const MainNav = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const isVendor = useSelector((state) => state.auth.isVendor)

    return (
        <>
            {
                isAuthenticated ?
                    (
                        <>
                            <UserNavigation />
                            {isVendor && <VendorNavigation />}
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