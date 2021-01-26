import { StyleSheet, Dimensions } from "react-native";
import color from "../../common/style/color";
import font from "../../common/style/font";
import { profilePicture, standardGapLarge, standardGapMedium, standardGapSmall } from "../../common/style/Standard";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: standardGapMedium
  },
  formContainer: {
    marginVertical: standardGapSmall
  },
  inputField: {
    marginTop: standardGapSmall,
    padding: standardGapMedium,
    backgroundColor: color.white,
    borderWidth: 2,
    borderRadius: standardGapSmall + 2,
    borderColor: color.lightButton,
    fontSize: font.fontSizeLarge - 2
  },
  datePicker: {
    marginTop: standardGapSmall,
    padding: standardGapMedium,
    backgroundColor: color.white,
    borderWidth: 2,
    borderRadius: standardGapSmall + 2,
    borderColor: color.lightButton,
    display: "flex",
    flexDirection: "row"
  },
  date: {
    flex: 1,
    fontSize: font.fontSizeLarge - 2,
    color: color.fontColor
  },
  title: {
    fontWeight: "bold",
    fontSize: font.fontSizeLarge - 2
  },
  uploadButton: {
    width: profilePicture * 1.5,
    marginVertical: standardGapMedium
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: standardGapMedium
  },
  submitButton: {
    backgroundColor: color.primaryColor,
    padding: standardGapMedium + 3,
    marginVertical: standardGapMedium,
    borderRadius: standardGapSmall + 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonLabel: {
    fontSize: font.fontSizeLarge,
    color: color.white,
    fontWeight:"bold"
   }
}));