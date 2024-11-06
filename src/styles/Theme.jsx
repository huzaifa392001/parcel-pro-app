import { StyleSheet, Appearance, Platform, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();
export const isDarkMode = colorScheme === 'dark'
export const windowHeight = Dimensions.get("window").height
export const windowWidth = Dimensions.get("window").width

export const isIpad = windowWidth > 700 ? true : false;

export const themeColor = '#6b72ff';
export const secondaryColor = '#30cdff';
export const bgColor = isDarkMode ? '#fafafa' : "#333";
export const darkThemeColor = "#0b5d1e";
export const whiteColor = '#ffffff';
export const blackColor = '#000000';
export const textColor = isDarkMode ? whiteColor : blackColor

export const generalFontSize = 16;

export const GlobalStyle = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        // ...Platform.select({
        //     ios: {
        //         paddingBottom: 30,
        //     },
        //     android: {
        //         paddingBottom: 60,
        //     },
        // }),
        paddingBottom: 30,
        backgroundColor: bgColor,
        height: '100%',
        position: 'relative'
    },
    minTitle: {
        fontFamily: 'Axiforma-Regular',
        color: textColor,
        fontSize: generalFontSize,
        fontWeight: '500',
        lineHeight: isIpad ? 36 : generalFontSize,
        textAlign: 'center',
        marginTop: 5
    },
    mainTitle: {
        fontFamily: 'Axiforma-Regular',
        fontSize: generalFontSize + 20,
        textAlign: 'center',
        color: textColor,
    },
    row: {
        flexDirection: 'row',
    },
    aic: {
        alignItems: 'center',
    },
    jc: {
        justifyContent: 'center',
    },
    themeBtn: {
        backgroundColor: themeColor,
        width: isIpad ? (windowWidth / 2) - 40 : windowWidth - 40,
        paddingVertical: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: "#fff5",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            android: {
                elevation: 3,
            },
        }),
        borderRadius: 10,
        marginHorizontal: 'auto',
    },
    themeBtnText: {
        fontFamily: 'Axiforma-Medium',
        color: whiteColor,
        fontSize: generalFontSize + 4,
        textTransform: 'uppercase'
    },
    altrThemeBtn: {
        backgroundColor: 'transparent',
        width: isIpad ? (windowWidth / 2) - 40 : windowWidth - 40,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: textColor,
        borderWidth: 2,
        borderStyle: 'solid',
        ...Platform.select({
            ios: {
                shadowColor: blackColor,
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
            },
            android: {
                elevation: 3,
                backgroundColor: bgColor
            },
        }),
        borderRadius: 10
    },
    altrThemeBtnText: {
        fontFamily: 'Axiforma-Regular',
        fontSize: generalFontSize + 2,
        textTransform: 'uppercase',
        color: textColor
    },
    themeBtn2: {
        backgroundColor: secondaryColor,
        width: isIpad ? (windowWidth / 2) - 40 : windowWidth - 40,
        paddingVertical: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: "#fff5",
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.4,
                shadowRadius: 3,
            },
            android: {
                elevation: 3,
            },
        }),
        borderRadius: 10,
        marginHorizontal: 'auto',
    },
    themeBtn2Text: {
        fontFamily: 'Axiforma-Medium',
        color: whiteColor,
        fontSize: generalFontSize + 4,
        textTransform: 'uppercase'
    },
    link: {
        fontFamily: 'Axiforma-Regular',
        fontSize: generalFontSize - 5,
        fontWeight: '400',
        lineHeight: isIpad ? generalFontSize + 10 : null,
        color: '#63EF08',
        textAlign: 'right',
        textDecorationLine: "underline"
    },
    linkCont: {
        marginTop: 12,
        alignSelf: 'flex-start',
        marginLeft: 'auto'
    },
    secHeading: {
        color: textColor,
        fontFamily: 'FreightBigPro-Bold',
        fontSize: generalFontSize + 2,
        marginBottom: 16
    },
    fullWidth: {
        width: (windowWidth - 40)
    },
    pageWrapper: {
        position: 'relative',
        flex: 1
    },
    pageContainer: {
        flex: 1
    },
    inputCont: {
        marginBottom: 10
    },
    inputLabel: {
        fontSize: generalFontSize + 4,
        color: whiteColor,
        marginBottom: 10,
        fontFamily: 'Axiforma-Medium',
    },
    input: {
        borderColor: textColor,
        borderWidth: 1,
        height: 60,
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: generalFontSize + 2,
        fontFamily: 'Axiforma-Regular',
        color: textColor
    },
    altrInput: {
        borderColor: whiteColor,
        color: whiteColor
    },
});