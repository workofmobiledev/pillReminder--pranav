import { StyleSheet, Dimensions } from "react-native";
import { standardGapMedium } from "../../common/style/Standard";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderWidth: 2,
    borderColor: "#E5E5E5",
    padding: standardGapMedium,
    borderRadius: standardGapMedium
  }
}));