import { StyleSheet } from "react-native";
import { generalFontSize, secondaryColor, textColor, themeColor, whiteColor, windowWidth } from "./Theme";

export const AuthStyles = StyleSheet.create({
    logoCont: {
        width: windowWidth - 40,
        paddingVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 'auto'
    },
    headingCont: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        width: "90%",
        marginVertical: 'auto',
        marginHorizontal: 'auto',
    },
    pageHeading: {
        fontSize: generalFontSize * 4,
        fontFamily: 'Wosker',
        textAlign: 'center',
        color: whiteColor,
        // lineHeight: generalFontSize * 3,
        textTransform: 'uppercase',
        marginTop: 20
    },
    pageSubHeading: {
        fontSize: generalFontSize + 4,
        fontFamily: 'Axiforma-Medium',
        fontWeight: "500",
        textAlign: 'center',
        color: textColor,
        lineHeight: generalFontSize * 2
    },
    loginContainer: {
        backgroundColor: themeColor,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    linkBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 30
    },
    linkBtnText: {
        color: whiteColor,
        fontSize: generalFontSize + 2,
        fontFamily: 'Axiforma-Regular',
    },
    linkBtnMain: {
        color: secondaryColor,
        fontWeight: "700",
    },
    formContainer: {
        marginTop: 30
    },
})
