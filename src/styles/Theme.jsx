import { StyleSheet, Appearance, Platform, Dimensions } from 'react-native';

const colorScheme = Appearance.getColorScheme();
export const isDarkMode = colorScheme === 'dark';
export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const isIpad = windowWidth > 700 ? true : false;

export const themeColor = '#6b72ff';
export const secondaryColor = '#30cdff';
export const bgColor = '#eeeeee';
export const darkThemeColor = '#0b5d1e';
export const whiteColor = '#ffffff';
export const blackColor = '#000000';
export const textColor = blackColor;

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
    paddingBottom: 0,
    backgroundColor: bgColor,
    flex: 1,
  },
  minTitle: {
    fontFamily: 'Axiforma-Regular',
    color: textColor,
    fontSize: generalFontSize,
    fontWeight: '500',
    lineHeight: isIpad ? 36 : generalFontSize,
    textAlign: 'center',
    marginTop: 5,
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
    width: isIpad ? windowWidth / 2 - 40 : windowWidth - 40,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#fff5',
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
    textTransform: 'uppercase',
  },
  altrThemeBtn: {
    backgroundColor: 'transparent',
    width: isIpad ? windowWidth / 2 - 40 : windowWidth - 40,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: themeColor,
    paddingHorizontal: 10,
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
        backgroundColor: bgColor,
      },
    }),
    borderRadius: 10,
  },
  altrThemeBtnText: {
    fontFamily: 'Axiforma-Medium',
    fontSize: generalFontSize,
    color: themeColor,
    fontWeight: '600',
  },
  activeBtn: {
    backgroundColor: themeColor,
  },
  activeBtnText: {
    color: whiteColor,
  },
  themeBtn2: {
    backgroundColor: secondaryColor,
    width: isIpad ? windowWidth / 2 - 40 : windowWidth - 40,
    paddingVertical: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#fff5',
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
    textTransform: 'uppercase',
  },
  link: {
    fontFamily: 'Axiforma-Regular',
    fontSize: generalFontSize - 5,
    fontWeight: '400',
    lineHeight: isIpad ? generalFontSize + 10 : null,
    color: '#63EF08',
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  linkCont: {
    marginTop: 12,
    alignSelf: 'flex-start',
    marginLeft: 'auto',
  },
  secHeading: {
    color: textColor,
    fontFamily: 'Axiforma-Bold',
    fontSize: generalFontSize + 6,
    marginBottom: 5,
  },
  generalDescription: {
    color: textColor,
    fontFamily: 'Axiforma-Regular',
    fontSize: generalFontSize - 2,
    lineHeight: generalFontSize + 2,
  },
  fullWidth: {
    width: windowWidth - 40,
  },
  pageWrapper: {
    position: 'relative',
    flex: 1,
    backgroundColor: bgColor,
    height: '100%'
  },
  pageContainer: {
    flex: 1,
  },
  inputCont: {
    marginBottom: 10,
    flex: 1
  },
  inputLabel: {
    fontSize: generalFontSize + 2,
    color: textColor,
    marginBottom: 5,
    fontFamily: 'Axiforma-Medium',
  },
  input: {
    borderColor: textColor,
    borderWidth: 1,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: generalFontSize,
    fontFamily: 'Axiforma-Regular',
    color: textColor,
    width: "100%"
  },
  altrInput: {
    borderColor: whiteColor,
    color: whiteColor,
  },
  section: {
    paddingVertical: 20,
  },
  formContainer: {
    marginTop: 10,
    flex: 1,
    position: 'relative',
    height: '100%',
  },
  inputWithIconCont: {
    borderColor: textColor,
    borderWidth: 1,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    input: {
      fontSize: generalFontSize,
      fontFamily: 'Axiforma-Regular',
      color: textColor,
      width: windowWidth - 80,
    },
  },
  textarea: {
    minHeight: 150,
    height: 'auto',
    textAlignVertical: 'top', // This ensures text is aligned at the top
  },
  pillsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  pill: {
    borderWidth: 2,
    borderColor: themeColor,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 13,
  },
  pillsText: {
    color: themeColor,
    fontSize: generalFontSize,
    fontFamily: 'Axiforma-Medium',
  },
  activePill: {
    backgroundColor: themeColor,
  },
  activePillText: {
    color: whiteColor,
  },
  picturePreview: {
    borderWidth: 1,
    borderColor: textColor,
    padding: 10,
    paddingBottom: 0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  dummyPicturePreview: {
    width: windowWidth - 60,
    height: 300,
    objectFit: 'contain',
    resizeMode: 'contain',
    backgroundColor: whiteColor,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 10,
  },
  pictureText: {
    color: whiteColor,
    fontFamily: 'Axiforma-Bold',
    fontSize: generalFontSize - 3,
    fontWeight: '600',
  },
  uploadBtnCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: windowWidth - 40,
    marginTop: 10,
  },
  uploadBtn: {
    backgroundColor: secondaryColor,
    padding: 10,
    width: windowWidth / 2 - 20,
    alignItems: 'center',
  },
  submitBtnCont: {
    marginTop: 20,
  },
  pageHeadingCont: {
    borderBottomColor: textColor,
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingBottom: 15,
    position: 'relative',
  },
  pageHeading: {
    color: textColor,
    fontFamily: 'Axiforma-Bold',
    fontSize: generalFontSize + 6,
    textAlign: 'center',
  },
  pageHeadingBackBtn: {
    position: 'absolute',
    top: 6,
    zIndex: 1,
  },
  floatingBtn: {
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  floatingBtnPageContainer: {
    position: 'relative',
    paddingBottom: 80,
  },
  smallImgField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  verticalBtnCont: {
    width: windowWidth / 2 - 40,
    gap: 10
  },
  smallImg: {
    width: windowWidth / 2 - 40,
    height: 120,
    objectFit: 'contain',
    backgroundColor: whiteColor,
    borderRadius: 10,
    shadowColor: blackColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 0,
    elevation: 5,
  },
  toggleBtn: {
    flexDirection: 'row',
    backgroundColor: '#6b72ff80',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    borderRadius: 30,
  },
  toggleBtnText: {
    color: textColor,
    fontFamily: "Axiforma-Medium",
    fontSize: generalFontSize,
    textTransform: "uppercase",
  },
  toggleBtnCont: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  activeToggleBtn: {
    backgroundColor: themeColor,
  },
  activeToggleBtnText: {
    color: whiteColor
  },
  error: {
    fontFamily: "Axiforma-Regular",
    fontSize: generalFontSize - 2,
    color: whiteColor,
    marginTop: 2
  },
  errorField: {
    borderColor: "#dc3545",
    color: "#dc3545",
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 111111
  },
  loadingText: {
    fontFamily: "Axiforma-Regular",
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
  },
});
