import { StyleSheet, Appearance, Platform, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();
export const isDarkMode = colorScheme === 'dark'
export const windowHeight = Dimensions.get("window").height
export const windowWidth = Dimensions.get("window").width

export const isIpad = windowWidth > 700 ? true : false;

export const themeColor = '#4cbb17';
export const secondaryColor = '#2a4494';
export const bgColor = isDarkMode ? "#333" : '#fafafa';
export const darkThemeColor = "#0b5d1e";
export const whiteColor = '#ffffff';
export const blackColor = '#000000';
export const textColor = isDarkMode ? whiteColor : blackColor

export const generalFontSize = 16;

export const GlobalStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        paddingBottom: 30,
      },
      android: {
        paddingBottom: 60,
      },
    }),
    backgroundColor: bgColor,
    height: '100%',
    position: 'relative'
  },
  minTitle: {
    fontFamily: 'axiform-regular',
    color: textColor,
    fontSize: generalFontSize,
    fontWeight: '500',
    lineHeight: isIpad ? 36 : generalFontSize,
    textAlign: 'center',
    marginTop: 5
  },
  mainTitle: {
    fontFamily: 'FreightBigPro-Bold',
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
  bgImage: {
    position: 'absolute',
    bottom: 20,
    right: 0
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
    fontFamily: 'axiform-medium',
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
    fontFamily: 'axiform-regular',
    fontSize: generalFontSize + 2,
    textTransform: 'uppercase',
    color: textColor
  },
  themeBtn2: {
    // backgroundColor: itemBg,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    gap: 10,
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
  },
  themeBtn2Text: {
    fontFamily: 'axiform-regular',
    fontSize: generalFontSize,
    color: textColor,
    fontWeight: '400'
  },
  link: {
    fontFamily: 'axiform-regular',
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
  headingCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: "75%",
    paddingTop: 30,
    marginTop: 'auto',
    marginHorizontal: 'auto'
  },
  pageHeading: {
    fontSize: generalFontSize * 4,
    fontFamily: 'axiform-bold',
    fontWeight: "700",
    textAlign: 'center',
    color: themeColor,
    textTransform: 'uppercase'
  },
  pageSubHeading: {
    fontSize: generalFontSize + 8,
    fontFamily: 'axiform-medium',
    fontWeight: "500",
    textAlign: 'center',
    color: textColor,
    marginTop: 15,
    lineHeight: generalFontSize * 2
  },
  loginContainer: {
    marginTop: 'auto',
    paddingBottom: 20
  },
  inputCont: {
    marginBottom: 20
  },
  inputLabel: {
    fontSize: generalFontSize + 4,
    color: whiteColor,
    marginBottom: 10,
    fontFamily: 'axiform-medium',
  },
  input: {
    borderColor: textColor,
    borderWidth: 1,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: generalFontSize + 2,
    fontFamily: 'axiform-regular',
    color: textColor
  },
  linkBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginTop: 10
  },
  linkBtnText: {
    color: textColor,
    fontSize: generalFontSize + 2,
    fontFamily: 'axiform-regular',
  },
  linkBtnMain: {
    color: themeColor,
    fontFamily: 'axiform-bold',
  }
});