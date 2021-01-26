import { StyleSheet, Dimensions } from "react-native";
import color from "../../common/style/color";
import { profilePicture, standardGapLarge, standardGapMedium, standardGapSmall } from "../../common/style/Standard";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: color.secondaryColor,
    marginVertical: standardGapSmall,
    borderRadius: profilePicture,
    marginHorizontal: standardGapSmall
  },
  tabs: {
    paddingVertical: standardGapMedium,
    paddingHorizontal: standardGapLarge + 10,
    borderRadius: profilePicture,
    marginHorizontal: standardGapSmall - 2,
  },
  contentContainer: {
    flex: 1
  }
}));