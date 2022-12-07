import { StyleSheet } from "aphrodite";

// colors
export const colors = {
  primaryPurple: "#7777b5",
  darkPurple: "#3a3772",
  darkPeriwinkle: "#7875ba",
  dark: "#232349",
  whiteColor: "#ffffff",
  blackColor: "#000000",
  slateColor: "#3e495f",
  pinkishGrey: "#c6c6c6",
  greyish: "#a5a5a5",
  paleGreyDark: "#f2f4f8",
  paleGreyBorder: "#e4e9f5",
  blueGrey: "#9fa7b8",
  cloudyBlue: "#cdd2dc",
  darkEmkanGrey: "#2e3441",
  brownGrey: "#7a7a7a",
  deepOrange: "#e25200",
  orange: "#f55a1c",
  paleOrange: "#ffc397",
  blackSecondary: "#272727",
  slateGrey: "#555d6f",
  mediumGray: "#8c9099",
  palePurple: "#8b88cf",
  lavender: "#b7b4f3",
  emkanBlue: "#4db3b5",
  beige: "#fbf4ee",
  darkSalmon: "#d36f69",
  warmGrey: "#979797",
  lightPaleGrey: "#efeff6",
  brownishGrey: "#6b6b6b",
  gray: "#707070",
  paleLilac: "#e5e4ff",
  lightBlack: "#1e1e1e",
  blackTwo: "#191919",
  dimmedBlackTwo: "rgba(0, 0, 0, 0.85)",
  lightBlueGreyTwo: "#cad0dc",
  paleGeyTwo: "#f2f4fb",
  peach: "#ffb57e",
  cloudyBlueTwo: "#cbcbe1",
  lightBlueGrey: "#cdd3df",
  atomicTangerine: "#ffab6d",
  roseWhite: "#ffefe8",
  darkPink: "#d28888",
  brightPurple: "#b577b2",
  cloudyBlueThreewithOpacity: "rgba(203, 203, 220)",
  paleGrey: "#edf0f8",
  cloudyBlueThree: "#b2bbd0",
  coolGrey: "#9797a9",
  darkGreyBlue: "#30305b",
  cloudyBlueFour: "#ced3de",
  lightBlueGreyThree: "#d5dae6",
  blueberry: "#3c3576",
  pinkishGreyTwo: "#c8c8c8",
  darkSalmonTwo: "#d16660",
  sandy: "#f3db7d",
  brownGreyTwo: "#73726d",
  brownishGreyTwo: "#6c6c6c",
  coolBlue80: "rgba(75, 155, 182, 0.8)",
  blueyGreyTwo: "#8891a5",
  darkTwo: "#2d3442",
  darkGrey: "#6d7278",
  paleGreyThree: "#e6e6f1",
  grey: "#8b95ad",
  lightGrey: "#b0bad0",
  slateGreyTransparent: "rgba(85, 93, 111, 0.59)",
  whiteTwo: "#f5f5f5",
  lightPurple: "#a6a6ee",
  lightGreyFive: "#c2c2c2",
  lightGreyFour: "#e3e3e3",
  lightGreyTwo: "#b9c1d3",
  lightGreyThree: "#e6e6e6",
  darkEmkanBlue: "#348a8c",
  paleGreyFour: "#e2e3e7",
  silverChalice: "#afafaf",
  whiteTwo2: "#fcfcfc",
  perryWinkle: "#7c7ce2",
  perryWinkleTwo: "#9d9dfc",
  lightBlueGrey2: "#b8b8e3",
  lightGreySix: "#adadad",
  purple: "#a1a1dc",
  silver: "#c1c1c8",
  cloudyBlueFive: "#c5c5dc",
  lightBlueGrey3: "#afafe3",
  lightGreyBlue: "#abafb9",
  redFeedback: "#D47174",
  green: "rgba(128, 207, 168, 1)",
  offWhite: "#C9C9E1",
  offWhite2: "#9293C2",
};

// Banner styles.
export const bannerStyles = StyleSheet.create({
  mainContainer: {
    background: "linear-gradient(225deg, #7778b3 10%, #5f608f 100%)",
    height: "100vh !important",
    position: "relative",
    minHeight: "100% !important",
    textAlign: "center",
    paddingLeft: "unset",
    paddingRight: "unset",
    marginLeft: "unset",
    marginRight: "unset",
  },
  illustrationContainer: {
    // background: "linear-gradient(225deg, #7778b3 10%, #5f608f 100%)",
    minHeight: "100% !important",
    height: "100vh !important",
    position: "relative",
    textAlign: "center",
    paddingLeft: "unset",
    paddingRight: "unset",
    marginLeft: "unset",
    marginRight: "unset",
  },
  emkanLogo: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "3em",
  },
  emkanIllustration: {
    display: "flex",
    float: "left",
    width: "100%",
    margin: "0 !important",
    justifyContent: "flex-start",
    position: "relative",
  },
  smeSolutions: {
    color: colors.whiteColor,
    textAlign: "center",
    fontSize: "2em",
  },
  marketingText: {
    color: colors.whiteColor,
    textAlign: "center",
    position: "absolute",
    bottom: "0",
    right: "0",
  },
});

export const dashboardStyle = StyleSheet.create({
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchContainer: {
    marginLeft: "unset",
    paddingTop: "10px",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "100%",
    paddingLeft: "0px",
    paddingRight: "0px",
    height: "100vh !important",
    overflowY: "auto",
  },
  checkBoxesContainer: {
    paddingBottom: "20px",
    paddingRight: "0px",
    paddingLeft: "0px",
    marginLeft: "unset",
    marginRight: "unset",
  },

  searchContainerMob: {
    marginLeft: "unset",
    marginTop: "10px",
    maxWidth: "100%",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  startFrom: {
    marginLeft: "unset",
    maxWidth: "100%",
    paddingTop: "3%",
  },
  SuccessFrom: {
    marginLeft: "unset",
    maxWidth: "100%",
    paddingTop: "13%",
  },
  applyLoanFrom: {
    marginLeft: "unset",
    maxWidth: "100%",
    paddingTop: "5px",
  },
  applyLoanFromMobile: {
    marginLeft: "unset",
    maxWidth: "100%",
    paddingTop: "5px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  applyLoanFromTitle: {
    fontSize: "36px",
    color: "#404343",
    padding: "10px 25px",
  },
  applyLoanFromTitleMob: {
    fontSize: "20px",
    color: "#404343",
    padding: "10px 25px",
  },
  TopContainer: {
    backgroundColor: "white",
    paddingTop: "10px",
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "unset",
    maxWidth: "100%",
    marginTop: "20px",
  },
  TopContainerLoan: {
    backgroundColor: "#fafafc",
    paddingTop: "0px",
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "unset",
    maxWidth: "100%",
    marginTop: "20px",
  },
  bottomContainer: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    marginLeft: "unset",
    paddingTop: "2rem",
    maxWidth: "100%",
    height: "78vh",
  },
  bottomContainerLoan: {
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    maxWidth: "100%",
    height: "70vh",
  },
  bottomContainerOffering: {
    paddingLeft: "3rem",
    paddingRight: "3rem",
    marginLeft: "unset",
    paddingTop: "2rem",
    maxWidth: "100%",
    height: "60vh",
  },
  bottomContainerMobile: {
    paddingTop: "2rem",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  bottomContainerMobileLoan: {
    // paddingTop: "2rem",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  bottomContainerParagraph: {
    fontSize: "16px",
    textAlign: "justify",
    marginTop: "10px",
    color: "rgba(0, 0, 0, 1)",
  },
  checkList: {
    paddingLeft: "15px",
    marginLeft: "unset",
    marginTop: "3rem",
    marginRight: "unset",
  },
  checkListItems: {
    color: "rgba(64, 67, 67, 1)",
    fontSize: "16px",
    display: "flex",
    marginTop: "10px",
    gap: "10px",
  },
  checkBox: {
    paddingLeft: "0px",
    paddingRight: "0px",
    marginLeft: "15px",
    marginTop: "3rem",
    marginRight: "unset",
  },
  buttonsCont: {
    padding: 0,
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "10px",
    marginLeft: "unset",
    display: "flex",
    gap: "2rem",
    marginRight: "unset",
  },
  buttonsContCheckBox: {
    padding: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    // marginLeft: "unset",
    display: "flex",
    // gap: "2rem",
    // marginRight: "unset",
    position: "relative",
    bottom: "0%",
    flexDirection: "column",
    // width:'100%'
  },
  buttonsContNoFlex: {
    padding: 0,
    paddingLeft: "10px",
    paddingRight: "10px",
    marginLeft: "unset",
    //display: "flex",
    gap: "2rem",
    marginRight: "unset",
    position: "absolute",
    bottom: 0,
  },
  buttonsContPurchase: {
    padding: 0,
    //paddingLeft: "10px",
    //paddingRight: "10px",
    marginLeft: "unset",
    //display: "flex",
    gap: "2rem",
    marginRight: "unset",
    position: "absolute",
    bottom: 0,
    width: "73%",
  },
  buttonsContMobile: {
    textAlign: "center",
    padding: "30px 0 0px 0 ",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "10px",
    fontSize: "10px",
  },
  buttonsContMobileOTP: {
    textAlign: "center",
    padding: "30px 0 0px 0 ",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "10px",
    fontSize: "10px",
    paddingTop: "225px !important",
  },
  card: {
    marginLeft: "unset",
    marginTop: "1rem",
    marginBottom: "3rem",
    width: "624px",
    height: "260px",
    background: "linear-gradient(225deg, #7778b3 10%, #5f608f 100%)",
    padding: "0px 6px 0px 0px",
    borderRadius: "8px",
    marginRight: "unset",
  },
  card2: {
    marginLeft: "unset",
    marginTop: "3rem",
    marginBottom: "3rem",
    // width: "624px",
    height: "350px",
    background: "linear-gradient(225deg, #7778b3 10%, #5f608f 100%)",
    padding: "0px 6px 0px 0px",
    borderRadius: "8px",
    marginRight: "unset",
  },
  cardMobile: {
    background: "linear-gradient(225deg, #7778b3 10%, #5f608f 100%)",
    padding: "5px 5px 5px 5px",
    borderRadius: "8px",
  },
  cardRightCont: {
    padding: "0",
    paddingLeft: "15px !important",
    paddingRight: "15px !important",
    marginLeft: "unset",
    marginTop: "1rem",
    color: "rgba(255, 255, 255, 1)",
    paddingBottom: "15px",
  },
  cardData: {
    fontSize: "20px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  cardTitle: {
    color: "#66D6D2",
    marginLeft: "8px",
    marginRight: "8px",
  },
  cardHints: {
    marginTop: "15px",
    paddingBottom: "10px",
  },
  cardButtons: {
    paddingLeft: "0px",
    paddingRight: "0px",
    marginLeft: "unset",
    marginTop: "5rem",
    display: "flex",
    gap: "2rem",
    marginRight: "unset",
  },

  appFormButtons: {
    //floating buttons
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    left: "16.692%",
    display: "flex",
    gap: "2rem",
    height: "94px",
    boxShadow: "0px -12px 12px -4px rgba(16, 24, 40, 0.06)",
    maxWidth: "unset",
    padding: "25px 4%",
  },
  appFormTopContainer: {
    marginLeft: "unset",
    marginTop: "0.7rem",
    height: "38px",
    background: "#7778B3",
    padding: "5px 35px",
    borderRadius: "4px",
    maxWidth: "unset",
    color: "white",
    fontSize: "18px",
  },
  appFormBottomContainer: {
    marginLeft: "unset",
    background: "white",
    padding: "20px 35px 20px 35px",
    maxWidth: "unset",
    color: "rgba(64, 67, 67, 1)",
    fontSize: "18px",
    borderBottom: "1px solid #7778B3",
    borderLeft: "1px solid #7778B3",
    borderRight: "1px solid #7778B3",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  appFormBottomContainerpartner: {
    marginLeft: "15px",
    marginRight: "unset",
    marginTop: "20px",
    background: "white",
    padding: "0px 13px 20px 0px",
    maxWidth: "30%",
    color: "rgba(64, 67, 67, 1)",
    fontSize: "18px",
    // borderBottom: "1px solid #7778B3",
    // borderLeft: "1px solid #7778B3",
    // borderRight: "1px solid #7778B3",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  appFormBottomContainer2: {
    marginLeft: "unset",
    background: "white",
    paddingTop: "20px !important",
    paddingBottom: "30px !important",
    maxWidth: "unset",
    color: "rgba(64, 67, 67, 1)",
    fontSize: "18px",
    borderBottom: "1px solid #7778B3",
    borderLeft: "1px solid #7778B3",
    borderRight: "1px solid #7778B3",
    borderBottomLeftRadius: "4px",
    borderBottomRightRadius: "4px",
  },
  inputContainer: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    marginBottom: "1.875rem",
    position: "relative",
  },
  inputContainerMobile: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    marginBottom: "1.875rem",
    position: "relative",
    maxWidth: "250px",
  },
  inputContainerMobileDropDown: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    marginBottom: "1.875rem",
    position: "relative",
    maxWidth: "250px",
    marginLeft: "unset",
    marginRight: "unset",
  },
  customInputContainer: {
    marginTop: "1rem",
  },
  errorMsg: {
    color: colors.redFeedback,
    marginBottom: "0.625rem",
    position: "absolute",
  },
  titleContainer: {
    marginLeft: "unset",
    marginTop: "30px",
    maxWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  searchLeftContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    paddingTop: "1rem",
  },
  gridNoSpace: {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  pTop: {
    paddingTop: 15,
  },
  link: {
    float: "none",
    textDecoration: "underline #5f608f !important",
    textUnderlinePosition: "under !important",
    color: "#7778b3",
    textTransform: "unset",
    padding: 5,
    minWidth: 5,
  },
  helpMsg: {
    display: "inline-block",
  },
});

export const dashboardbannerStyles = StyleSheet.create({
  mainContainer: {
    background: "linear-gradient(225deg, #7778B3 0%, #5F608F 100%)",
    height: "100vh !important",
    position: "relative",
    minHeight: "100% !important",
    boxShadow: "6px 0px 18px rgba(0, 0, 0, 0.06)",
    padding: "0",
  },
  activeIcon: {
    backgroundColor: `${colors.darkPurple}`,
  },
  notActiveIcon: {
    backgroundColor: "transparent !important",
  },
  emkanLogo: {
    display: "flex",
    justifyContent: "center",
    padding: "1em",
  },
  languageBtnEn: {
    color: colors.whiteColor,
    float: "left",
    textDecoration: "unset",
    textUnderlinePosition: "unset",
    display: "flex",
    justifyContent: "flex-start",
    padding: "1em",
  },
  languageBtnAr: {
    color: colors.whiteColor,
    float: "right",
    textDecoration: "unset",
    textUnderlinePosition: "unset",
    display: "flex",
    justifyContent: "flex-end",
    padding: "1em",
  },
  menuItem: {
    color: "white",
  },
  divider: {
    borderColor: "#F0F0F5",
    opacity: 0.3,
  },
  container: {
    padding: "0",
    marginTop: "0.5rem",
  },
  gereralItemsContainer: {
    padding: "0",
    marginTop: "1rem",
  },
  logout: {
    padding: "0",
    position: "absolute",
    bottom: 20,
    left: 0,
  },
  topContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0",
  },
  closeButton: {
    color: "#fff",
    alignSelf: "center",
    padding: "5px",
    display: "flex",
    cursor: "pointer",
    margin: "0 4px",
  },
  companies: {
    padding: "0 16px",
  },
  addAccount: {
    color: "white",
    border: "solid 1px white",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    padding: "8px",
    width: "85%",
    margin: "1rem auto",
    cursor: "pointer",
  },
});

// title container styles
export const titleStyles = StyleSheet.create({
  titleEn: {
    color: colors.blackColor,
    fontSize: "46px",
    fontWeight: 400,
  },

  linkSrc: {
    color: colors.primaryPurple,
    cursor: "pointer",
    fontSize: "18px",
  },
  titleContainer: {
    paddingBottom: "15px",
    paddingLeft: "0",
    paddingRight: "0",
    display: "inline-block",
  },
});

export const AlertStyle = StyleSheet.create({
  topContainer: {
    padding: "50px 0 0",
    marginLeft: "unset",
    marginRight: "unset",
  },
  customTopContainer: {
    paddingTop: "5px",
    marginLeft: "unset",
    marginRight: "unset",
    paddingLeft: "0",
    paddingRight: "0",
    textAlign: "center",
    margin: "0 auto",
  },
});

// Language switch styles
export const langSwitchStyles = StyleSheet.create({
  langSwitchLight: {
    color: colors.whiteColor,
    float: "right",
    textDecoration: "underline #5f608f !important",
    textUnderlinePosition: "under !important",
    fontSize: "16px",
    padding: "1em 0 0 0",
  },
  langSwitchDark: {
    color: colors.primaryPurple,
    float: "right",
    textDecoration: "underline #5f608f !important",
    textUnderlinePosition: "under !important",
    fontSize: "16px",
    padding: "1em 0 0 0",
  },
  langSwitchArLight: {
    color: colors.whiteColor,
    float: "left",
    textDecoration: "underline #5f608f !important",
    textUnderlinePosition: "under !important",
    fontSize: "16px",
    padding: "1em",
  },
  langSwitcArDark: {
    color: colors.primaryPurple,
    float: "left",
    textDecoration: "underline #5f608f !important",
    textUnderlinePosition: "under !important",
    fontSize: "16px",
    padding: "1em",
  },
  arrowEn: {
    color: colors.blackColor,
    float: "left",
    textDecoration: "underline #ffffff !important",
    textUnderlinePosition: "under !important",
    display: "flex",
    justifyContent: "flex-end",
    padding: "1em 0 0 0",
  },
  arrowAr: {
    color: colors.blackColor,
    float: "right",
    textDecoration: "underline #ffffff !important",
    textUnderlinePosition: "under !important",
    display: "flex",
    justifyContent: "flex-start",
    padding: "1em",
  },
});

// input styles
export const inputStyles = StyleSheet.create({
  dropdown: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
    fontSize: "20px",
    "@media (max-width: 960px)": {
      height: "60px",
    },
  },
  icon: {
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "0px",
    height: 0,
  },
  general: {
    width: "100%",
    height: "48px",
    borderRadius: "4px",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.156px",
    color: "rgba(64, 67, 67, 1)",
    "@media (max-width: 960px)": {
      height: "60px",
    },

    ":focus": {
      outline: "none",
    },
    webkitBoxSizing: "border-box",
    mozBoxSizing: "border-box",
    boxSizing: "border-box",
    direction: "ltr",
  },
  generalPreferences: {
    width: "395px",
    height: "48px",
    borderRadius: "4px",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.156px",
    color: "rgba(64, 67, 67, 1)",
    "@media (max-width: 960px)": {
      height: "60px",
    },

    ":focus": {
      outline: "none",
    },
    webkitBoxSizing: "border-box",
    mozBoxSizing: "border-box",
    boxSizing: "border-box",
    direction: "ltr",
  },
  general2: {
    width: "100%",
    height: "200px",
    borderRadius: "4px",
    fontSize: "20px",
    lineHeight: "27px",
    letterSpacing: "0.156px",
    color: "rgba(64, 67, 67, 1)",
    "@media (max-width: 960px)": {
      height: "60px",
    },

    ":focus": {
      outline: "none",
    },
    webkitBoxSizing: "border-box",
    mozBoxSizing: "border-box",
    boxSizing: "border-box",
    direction: "ltr",
  },
  withIcon: {
    boxSizing: "border-box",
    border: "none",
    background: "none",
  },
  customWidth: {
    width: "395px",
  },
  customWidth2: {
    width: "305px",
  },
  default: {
    outline: `1px solid ${colors.warmGrey}`,
    backgroundColor: colors.whiteColor,
  },

  error: {
    outline: `2px solid ${colors.redFeedback}`,
    boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.10)",
  },

  inFocus: {
    outline: `2px solid ${colors.primaryPurple}`,
    boxShadow: "0px 2px 4px 0px rgba(0,0,0,0.24)",
  },
  inFocusDropDown: {
    outline: `2px solid ${colors.primaryPurple}`,
  },
  valid: {
    outline: `1px solid ${colors.green}`,
    backgroundColor: colors.whiteColor,
  },

  disabled: {
    outline: "1px solid #B3B9B9",
    backgroundColor: "#ECEEED",
  },
  arabic: {
    direction: "rtl",
  },
  search: {
    border: "1px solid #404343",
    backgroundColor: colors.whiteColor,
    width: "540px",
    height: "43px",
    fontSize: "18px",
  },
});

//input textStyles
export const textStyles = StyleSheet.create({
  textEn: {
    fontFamily: "Emkan",
    fontWeight: "normal",
    paddingLeft: "11px",
  },

  textAr: {
    fontFamily: "Emkan",
    fontWeight: "normal",
    paddingRight: "11px",
    textAlign: "right",
  },
});

export const updateMobileStyles = StyleSheet.create({
  inputsContainer: {
    width: "26rem",
    maxWidth: "100%",
  },
  inputContainer: {
    padding: "0",
    marginBottom: "2rem",
  },
});

export const registerStyles = StyleSheet.create({
  errorMsg: {
    color: colors.redFeedback,
    marginBottom: "0.625rem",
    position: "absolute",
    lineHeight: "1.5",
  },
  partenerErrorMsg: {
    color: colors.redFeedback,
    marginBottom: "0.625rem",
    // position: "absolute",
  },
  inputsContainer: {
    width: "25rem",
    maxWidth: "100%",
  },

  inputContainer: {
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    marginBottom: "1.785rem",
    position: "relative",
  },

  passwordDescription: {
    color: colors.gray,
    paddingBottom: "25px",
  },

  passwordXmark: {
    color: colors.redFeedback,
    fontSize: "15px",
  },
  passwordTickMark: {
    color: colors.green,
    fontSize: "15px",
  },
  weakPassword: {
    color: colors.redFeedback,
  },
  medPassword: {
    color: "#C4A972",
  },
  strongPassword: {
    color: colors.green,
  },
  infoIcon: {
    color: colors.redFeedback,
    fontSize: "15px",
  },
  infoIcon2: {
    color: "#C4A972",
    fontSize: "15px",
  },
  yourInfoTitle: {
    paddingBottom: "20px",
  },

  checkBoxesContainer: {
    paddingBottom: "20px",
    paddingRight: "0px",
  },
  ButtonContainer: {
    padding: "20px 0 0 0",
  },
});
export const layoutStyles = StyleSheet.create({
  childrenContainer: {},
});

export const wizardStyles = StyleSheet.create({
  mainContainer: {
    paddingTop: "15px",
    paddingBottom: "25px",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  label: {
    fontSize: "16px",
  },
  mobileLabel: {
    paddingLeft: "7px",
    paddingRight: "7px",
  },
  arabicMarginLable: {
    marginRight: "2px",
  },
});

export const statusFormStyles = StyleSheet.create({
  headTitle: {
    fontSize: "48px",
    lineHeight: "60px",
    color: colors.blackColor,
    width: "100%",
  },
  title: {
    color: "#16162E",
    fontSize: "20px",
    lineHeight: "30px",
    width: "100%",
  },
  mainContainer: {
    textAlign: "center",
  },
  subTitle: {
    color: "#16162E",
    fontSize: "20px",
    lineHeight: "30px",
    width: "100%",
  },
  padder: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "0",
    paddingRight: "0",
  },
});

export const applyForLoanDefaultStatus = StyleSheet.create({
  headTitle: {
    fontSize: "18px",
    lineHeight: "27px",
    color: colors.blackColor,
    width: "100%",
  },
  title: {
    color: "#404343",
    fontSize: "24px",
    lineHeight: "30px",
    width: "100%",
  },
  emptyStateDescription: {
    maxWidth: "616px",
    textAlign: "center",
    marginTop: "15px",
    marginBottom: "20px",
  },
  mainContainer: {
    textAlign: "center",
    backgroundColor: "#FAFAFC",
  },
  subTitle: {
    color: "#16162E",
    fontSize: "16px",
    lineHeight: "30px",
    width: "616px",
  },
  padder: {
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "0",
    paddingRight: "0",
  },
  customPadder: {
    paddingBottom: "10px",
    paddingLeft: "0",
    paddingRight: "0",
    display: "flex",
    justifyContent: "center",
  },
  svgPadder: {
    paddingTop: "0",
    paddingBottom: "0",
    paddingLeft: "0",
    paddingRight: "0",
    marginLeft: "-30px",
  },
});

export const uploadStyles = StyleSheet.create({
  mainContainer: {},
  uploadContainer: {
    maxWidth: "255px",
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: colors.primaryPurple,
    backgroundColor: "#F7F7FA",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  errorContainer: {
    maxWidth: "255px",
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: colors.redFeedback,
    backgroundColor: "#FBF2F3",
    textAlign: "center",
  },
  successContainer: {
    maxWidth: "255px",
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "rgba(128, 207, 168, 1)",
    backgroundColor: "#F0FCFC",
    textAlign: "center",
  },
  hintText: {
    color: colors.greyish,
    fontSize: "12px",
    padding: "5px",
    paddingBottom: "10px",
  },
  labelText: {
    paddingTop: "16px",
    paddingBottom: "10px",
  },
  errorText: {
    textAlign: "center",
    color: colors.redFeedback,
    fontSize: "12px",
    padding: "5px",
  },
  uploadIcon: {
    color: "#7777b5 !important",
    paddingTop: "10px",
  },
  tickIcon: {
    color: colors.green,
    paddingTop: "10px",
  },
});

export const uploadReviewStyle = StyleSheet.create({
  reviewFileContainer: {
    width: "220px",
    height: "46px",
    borderRadius: "5.85px",
    border: "1px solid #D9DCDC",
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem",
  },
  reviewContainer: {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  fileName: {
    color: "#808686",
  },
  fileReUploadBtn: {
    minWidth: "0px",
  },
});

export const uploadPopUp = StyleSheet.create({
  mainReuploadContainer: {
    textAlign: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  reUploadInput: {
    maxWidth: "593px",
    maxHeight: "180px",
    border: "1px solid #C6CBCA",
    borderRadius: "3.72px",
    padding: "40px",
  },
  uploadContainer: {
    borderStyle: "dashed",
    height: "180px",
    borderWidth: "1px",
    borderColor: colors.primaryPurple,
    textAlign: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  errorContainer: {
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: colors.redFeedback,
    backgroundColor: "#FBF2F3",
    textAlign: "center",
  },
  successContainer: {
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "rgba(128, 207, 168, 1)",
    backgroundColor: "#F0FCFC",
    textAlign: "center",
  },
  modifiedUploadContainer: {
    color: colors.blackColor,
  },
});

export const tableStyles = StyleSheet.create({
  arrowBtns: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    background: "#ECEEED",
    width: "34px",
    height: "34px",
    margin: "10px",
    padding: "5px",
    ":hover": {
      border: "1px solid #E4E4F0",
      borderRadius: "10px",
      background: "#E4E4F0",
    },
  },
});

export const NewDashboardStyles = StyleSheet.create({
  applicationTimeLineStyle: {
    textAlign: "center",
    minHeight: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: "0px",
  },
  cardContainer: {
    border: "1px solid #D9DCDC",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    background: colors.whiteColor,
    minWidth: "100%",
  },
  installmentsCardContainer: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    background: colors.whiteColor,
    maxHeight: "300px",
    overflowY: "auto",
  },
  tablesCardContainer: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    background: colors.whiteColor,
    maxHeight: "500px",
    overflowY: "auto",
  },
  gridItem: {
    // padding: "8px",
  },
  customGridItem: {
    background: "#fff",
    margin: "8px 0px",
    // border: "1px solid rgb(236, 238, 237)",
    borderRadius: "5px",
  },
  firstGridItem: {
    paddingBottom: "16px",
    paddingTop: "16px",
  },
  CircleCardContainer: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    backgroundColor: "FFFFFF",
  },
  cardContainerAmount: {
    border: `1px solid`,
    borderColor: colors.primaryPurple,
    color: colors.primaryPurple,
    background: "#E4E4F0",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
  },
  coloredCardContainer: {
    border: `1px solid #D9DCDC`,
    color: colors.primaryPurple,
    background: "#F7F7FA",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "10px",
    marginBottom: "15px",
  },
  cardContainerAmountDisabled: {
    border: `1px solid`,
    borderColor: "#B3B9B9",
    color: "#B3B9B9",
    background: "#ECEEED",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
  },
  purpleInputLabel: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#404343",
    fontWeight: 400,
  },
  coloredInputLabel: {
    fontSize: "14px",
    fontWeight: 400,
    color: "#404343",
    lineHeight: "22.17px",
    // paddingBottom:'5px'
  },
  coloredInputValue: {
    fontSize: "30px",
    fontWeight: 400,
    color: "#7778B3",
    lineHeight: "36px",
  },
  purpleInputValue: {
    fontSize: "36px",
    lineHeight: "45px",
    color: "##7778B3",
    fontWeight: 400,
    position: "relative",
  },
  arrow: {
    cursor: "pointer",
    ":nth-child(1n)>path": {
      stroke: "#7778B3",
    },
  },
  disabledArrow: {
    cursor: "not-allowed",
    ":nth-child(1n)>path": {
      stroke: "#B3B9B9",
    },
  },
});

export const statusPageStyles = StyleSheet.create({
  mainContainer: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: "bolder",
  },
  helperText: {
    color: "#16162E",
  },
  btn: {
    width: "115px",
    height: "48px",
    border: "1px solid #7777b5",
    color: "#7777b5",
    padding: "10px",
    background: colors.whiteColor,
  },
  img: {},
});

export const installmentsStyles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  mainContainer2: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "0px",
    paddingRight: "0px",
    justifyContent: "space-between",
    minWidth: "100%",
  },
  btn: {
    color: colors.primaryPurple,
    border: "1px solid",
    borderColor: colors.primaryPurple,
    borderRadius: "4px",
    padding: "8px 16px",
    display: "flex",
    textTransform: "capitalize",
  },
  rowContainer: {
    border: `1px solid #D9DCDC`,
    boxSizing: "border-box",
    borderRadius: "8px",
    height: "47px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    minWidth: "100%",
  },
  overdueContainer: {
    border: "1px solid #D47174",
    boxSizing: "border-box",
    borderRadius: "8px",
    background: "#FBF2F3",
    height: "47px",
    paddingTop: "10px",
    paddingBottom: "10px",
    marginTop: "10px",
    marginBottom: "10px",
    color: "#D47174",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    fontSize: "18px",
    minWidth: "100%",
  },
  title: {
    paddingLeft: "15px",
    paddingRight: "15px",
  },
});

export const outstandingProgressStyles = StyleSheet.create({
  mainContainer2: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "4px",
    paddingRight: "4px",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  title: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#404343",
  },
  titlePadding: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#404343",
    marginTop: "8px",
  },
  progressContainer: {
    display: "grid",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "10px",
    paddingBottom: "10px",
    alignItems: "center",
    gridTemplateColumns: "5% 95%",
  },
  innerContainer: {
    display: "flex",
    justifyContent: `space-between`,
    alignItems: "center",
    width: "100%",
    paddingLeft: "10px",
    marginBottom: "10px",
  },
  percentage: {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: "bolder",
    color: "#404343",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  text: {
    color: "#808686",
  },
});

export const SaudiPostStyles = StyleSheet.create({
  mainContainer: {
    width: "364px",
    height: "349px",
    textAlign: "center",
  },
  saudiPostLogo: {
    width: "200px",
    height: "200px",
  },
  description: {
    fontSize: "18px",
    paddingBottom: "40px",
    paddingTop: "25px",
    color: "#5F608F",
  },
  msg: {
    fontSize: "18px",
    color: colors.blackColor,
  },
});

export const nafithStyles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 24,
    cursor: "pointer",
  },
  closeIconReCompute: {
    // position: "absolute",
    // top: 20,
    paddingTop: "6px",
    cursor: "pointer",
  },
  nafithLogo: {
    padding: "40px",
    paddingTop: "60px",
  },
  msg: {
    fontSize: "18px",
    fontWeight: 400,
    color: colors.blackColor,
    padding: "15px",
  },
  description: {
    paddingBottom: "40px",
    paddingTop: "25px",
  },
  mainContainer: {
    width: "364px",
    height: "349px",
    textAlign: "center",
  },
});

export const applicationDetailsStyles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: "3rem",
    justifyContent: "flex-end",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  lightBackground: {
    backgroundColor: "#fafafc",
  },
  requestIcon: {
    paddingTop: "10px",
  },
  paddingRemoval: {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  loanAmountTitle: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#404343",
    fontWeight: 400,
  },
  loanAmount: {
    fontSize: "36px",
    lineHeight: "45px",
    color: "##7778B3",
    fontWeight: 400,
    position: "relative",
  },
  sarValue: {
    fontSize: "16px",
    position: "absolute",
    top: "-7px",
    marginLeft: "5px",
  },
  appProgressContainer: {
    border: "1px solid #D9DCDC",
    borderRadius: "8px",
    backgroundColor: "#FFFFFF",
    marginTop: "15px",
    padding: "16px",
  },
  appProgressInnerContainer: {
    display: "flex",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  appProgressIcon: {
    paddingTop: "10px",
  },
  appProgressTitle: {
    fontSize: "20px",
    lineHeight: "30px",
    color: "#404343",
    fontWeight: 400,
    paddingTop: "20px",
  },
  redContainer: {
    border: "1px solid #D47174",
    backgroundColor: "#FBF2F3",
    borderRadius: "8px",
    marginTop: "20px",
  },
  redTitle: {
    color: "#D47174",
    fontSize: "18px",
    padding: "10px",
  },
  purpleContainer: {
    border: "1px solid #5F608F",
    backgroundColor: "#E4E4F0",
    borderRadius: "8px",
    marginTop: "20px",
  },
  purpleTitle: { color: "#5F608F", fontSize: "18px", padding: "10px" },
  goldContainer: {
    border: "1px solid #C4A972",
    backgroundColor: "#FDF6E9",
    borderRadius: "8px",
    marginTop: "20px",
  },
  goldTitle: { color: "#C4A972", fontSize: "18px", padding: "10px" },
  inputContainer: {
    borderBottom: "1px solid #D9DCDC",
    width: "90%",
    paddingLeft: "0px",
    paddingRight: "0px",
    margin: "20px 0px 20px 0px",
  },
  inputTitle: {
    color: "#808686",
    fontSize: "16px",
    padding: "5px 0px 5px 0px",
  },
  inputTitleFlex: {
    color: "#808686",
    fontSize: "16px",
    padding: "5px 0px 5px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
  inputData: {
    color: "#404343",
    fontSize: "18px",
    padding: "5px 0px 10px 0px",
  },
  buttonn: {
    width: "77px",
    height: "40px",
  },
});

export const navigateStatus = StyleSheet.create({
  mainStyle: {
    padding: "8px 0px",
    display: "flex",
  },
  text: {
    alignSelf: "center",
    fontFamily: "emkan",
    display: "inline",
    fontSize: "14px",
    color: "#404343",
  },
  icon: {
    alignSelf: "center",
    paddingRight: "18px",
    cursor: "pointer",
    width: "14px",
  },
});
// ===================================

export const cardUI = StyleSheet.create({
  cardContainer: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    background: "#FFF",
  },
  cardContainerMob: {
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    // boxSizing: "border-box",
    // padding: "15px",
    background: "#FFF",
  },
  card: {
    border: "1px solid #D9DCDC",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "15px",
    margin: "5px",
    background: "#FFF",
  },
  docUpload: {
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: 400,
    paddingBottom: "50px",
  },
});

/*  Loan Details */
export const details = StyleSheet.create({
  label: {
    fontFamily: "emkan",
    display: "inline",
    fontSize: "14px",
    color: "#808686",
  },
  accordionDetails: {
    padding: "10px 0px 10px 0px",
  },
  val: {
    fontFamily: "emkan",
    display: "inline",
    fontSize: "14px",
  },
  card: {
    padding: "0px 24px 0px 14px",
    borderRight: "1px solid #D9DCDC",
    "@media (max-width: 1200px)": {
      borderRight: "none",
    },
    ":last-child": {
      borderRight: "none",
    },
  },

  cardAR: {
    padding: "0px 24px 0px 14px",
    borderLeft: "1px solid #D9DCDC",
    "@media (max-width: 1200px)": {
      borderLeft: "none",
    },
    ":last-child": {
      borderLeft: "none",
    },
  },
  status: {},
  cardContainer: {
    padding: "0px !important",
    display: "flex",
    alignItems: "flex-start",
    "@media (max-width: 1200px)": {
      display: "block",
    },
  },
});

export const ProgressKPIs = StyleSheet.create({
  mainStyle: {
    padding: "0px",
    display: "flex",
  },
  title: {
    fontFamily: "emkan",
    paddingBottom: "8px",
    fontSize: "20px",
    color: "#404343",
  },
  persent: {
    color: "#404343",
    fontFamily: "emkan",
    fontSize: "20px",
  },
  val: {
    display: "inline",
    fontFamily: "emkan",
    fontSize: "14px",
    color: "#000",
  },
  value: {
    display: "inline",
    fontFamily: "emkan",
    fontSize: "24px",
    color: "#000",
  },
  btn: {
    border: `1px solid ${colors.primaryPurple}`,
    color: colors.primaryPurple,
    marginTop: "15px",
    fontSize: "14px",
    textTransform: "capitalize",
  },
  total: {
    display: "inline",
    fontFamily: "emkan",
    fontSize: "14px",
    color: "#7778B3",
  },
  icon: {
    width: "50px",
  },
  bar: {
    height: 6,
    borderRadius: 3,
    marginBottom: "8px",
    "MuiLinearProgress-colorPrimary": "#fff",
    "MuiLinearProgress-bar": {
      borderRadius: 5,
      backgroundColor: "#7778B3",
    },
  },
});

export const applicationListStyles = StyleSheet.create({
  mainContainer: {
    // border: "1px solid #D9DCDC",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "0px",
  },
  title: {
    color: "#404343",
    fontSize: "20px",
    padding: "20px 15px 20px 15px",
    fontWeight: "bold",
  },
  innerContainer: {
    borderTop: "1px solid #D9DCDC",
    // borderBottom: "1px solid #D9DCDC",
    paddingLeft: "0px",
    paddingRight: "0px",
    fontSize: "15px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  purpleRow: {
    background: "#F7F7FA",
    //   padding: "10px 5px 10px 5px",
    borderRadius: "8px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  },
  whiteRow: {
    background: "#FFFFFF",
    //   padding: "10px 5px 10px 5px",
    borderRadius: "8px",
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
  },
  appId: {
    color: "#808686",
    fontSize: "12px",
  },
});

export const preferencesGrid = StyleSheet.create({
  mainStyle: {
    borderRight: "#eee 2px solid",
  },
  containerMobile: {
    backgroundColor: "#ffffff",
  },
  container: {
    borderRight: "1px solid #D9DCDC",
    borderLeft: "1px solid #D9DCDC",
    backgroundColor: "#ffffff",
    height: "100vh",
  },
});

export const tabsContainer = StyleSheet.create({
  mainStyle: {
    padding: "0px",
    backgroundColor: "#fff",
    display: "flex",
  },
  title: {
    fontSize: "36px",
    fontWeight: 400,
    padding: "15px 0px 15px 0px",
    color: "#404343",
  },
  cardContentMobile: {
    padding: "0px 24px",
    display: "flex",
    justifyContent: "center",
    fontWeight: 400,
    borderTop: "#eee 2px solid",
    cursor: "pointer",
  },
  cardContent: {
    padding: "7px 24px",
    display: "flex",
    alignItems: "center",
    fontWeight: 400,
    borderTop: "#eee 2px solid",
    cursor: "pointer",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  activeTab: {
    backgroundColor: "#FAFAFC",
    "@media (max-width: 768px)": {
      backgroundColor: "#fff",
      borderBottom: "2px solid #7778B3",
    },
  },
  contactIcon: {
    marginTop: "0px",
    marginBottom: "-4px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  contactContainer: {
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "50px",
  },
  contactMsg: {
    width: "100%",
    height: "200px",
    borderRadius: "4px",
    fontSize: "20px",
    letterSpacing: "0.156px",
    color: "rgba(64, 67, 67, 1)",
    outline: `1px solid #979797`,
    backgroundColor: "#ffffff",
  },
  cardTitle: {
    color: "#404343",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "2rem",
  },
  cardTitleMobile: {
    color: "#404343",
    fontSize: "15px",
    fontWeight: 400,
    lineHeight: "2rem",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "max-content",
  },
  cardDesc: {
    color: "#808686",
    fontSize: "13px",
    lineHeight: "1.2rem",
    padding: "7px",
    direction: "ltr",
  },
  cardDescMobile: {
    color: "#808686",
    fontSize: "13px",
    lineHeight: "1.2rem",
    display: "inline-flex",
    padding: "7px",
    direction: "ltr",
  },

  tabsTitle: {
    color: "#404343",
    fontSize: "21px",
    padding: "31px 24px",
    backgroundColor: "#fff",
    fontWeight: 400,
    paddingLeft: "30px",
    paddingRight: "30px",
  },
});

export const accordion = StyleSheet.create({
  mainStyle: {
    marginBottom: "16px",
    borderRadius: "8px",
    border: "#D9DCDC 1px solid",
    boxShadow: "none",
  },
  title: {
    color: "#404343",
  },
  titlePurple: {
    color: "#7778B3",
  },
  content: {
    color: "#808686",
  },
});

export const listPopupStyles = StyleSheet.create({
  appTitle: {
    color: "#404343",
    fontSize: "20px",
    fontWeight: "bold",
    padding: "0px 5px 20px 5px",
  },
  menuItem: {
    color: "#404343",
    fontSize: "18px",
    padding: "20px 0px 20px 0px",
    fontWeight: 400,
  },
  disabled: {
    color: "#DCDCDC",
  },
  menuItemCancel: {
    color: "#D47174",
    fontSize: "18px",
    padding: "20px 0px 20px 0px",
    fontWeight: 400,
  },
  menuItemLoan: {
    color: "#404343",
    fontSize: "18px",
    padding: "10px 0px 10px 0px",
    fontWeight: 400,
  },

  icon: {
    padding: "0px 10px 0px 5px",
    marginBottom: "-3px",
  },
});

export const contactCard = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: "0px",
    paddingRight: "0px",
    marginTop: "30px",
  },
  mainStyle: {
    padding: "8px 16px 0px",
    display: "flex",
    backgroundColor: "#FFF",
    alignItems: "flex-start",
    border: "1px solid #ECEEED",
    borderRadius: "8px",
    ":nth-child(2n)": {
      marginLeft: 10,
      marginRight: 10,
    },
    "@media (max-width: 1365px)": {
      width: "100%",
      marginTop: "16px",
      marginLeft: 0,
      marginRight: 0,
      ":nth-child(2n)": {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  label: {
    fontSize: "14px",
    fontFamily: "emkan",
    // lineHeight: "2",
    lineHeight: "1.57",
  },
  icon: {
    fontSize: "114x",
    fontFamily: "emkan",
    marginRight: "5px",
    marginLeft: "5px",
    // lineHeight: "2",
    lineHeight: "1.57",
  },
  val: {
    fontSize: "14px",
    fontFamily: "emkan",
    color: "#7778B3",
    lineHeight: "1.57",
    textDecoration: "none",
  },
});

export const ProfileStyles = StyleSheet.create({
  ownerContainer: {
    paddingTop: "50px",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  ownerNameContainer: {
    paddingLeft: "25px",
    paddingRight: "25px",
  },

  ownerNameValue: {
    fontSize: "30px",
    fontWeight: 400,
    color: "#404343",
  },
  gridFix: {
    paddingTop: "35px",
  },
  linedInputGrid: {
    marginTop: "-25px",
  },
});

export const checkboxlbl = StyleSheet.create({
  main: {
    // width: "max-content",
  },
  link: {
    color: "#5f608f",
    textDecoration: "underline",
  },
});

export const navBarStyles = StyleSheet.create({
  main: {
    // width: "max-content",
  },
  link: {
    // color: "#5f608f",
    // flexDirection: "row",
    display: "flex",
  },
});
