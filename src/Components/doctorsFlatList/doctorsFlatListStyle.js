import { StyleSheet, Dimensions } from "react-native";
import color from "../../common/style/color";
import font from "../../common/style/font";
import { profilePicture, standardGapMedium, standardGapSmall } from "../../common/style/Standard";

export default (styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        paddingVertical: standardGapSmall
    },
    separator: {
        marginVertical: standardGapSmall
    },
    itemcontainer: {
        display: "flex",
        flexDirection: "row",
        padding: standardGapSmall
    },
    avatarContainer: {
        flex: 0.3
    },
    iconContainer: {
        borderRadius: standardGapSmall,
        backgroundColor: color.lightButton,
        width: profilePicture * 1.3,
        height: profilePicture * 1.3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        flex: 1
    },
    actionContainer: {
        flexDirection: "column",
    },
    nameLabel: {
        color: color.fontColor,
        fontSize: font.fontSizeLarge,
        fontWeight: "bold",
        lineHeight: 20,
        letterSpacing: 0.05,
        textAlign: "left",
        paddingVertical: standardGapSmall - 2
    },
    infoLabel: {
        color: color.lightFontColor,
        fontSize: font.fontSizeLarge - 5,
        lineHeight: 20,
        letterSpacing: 0.05,
        textAlign: "left",
        paddingVertical: standardGapSmall - 2
    },
    ratingLabel: {
        color: color.fontColor,
        fontSize: font.fontSizeLarge - 5,
        lineHeight: 20,
        letterSpacing: 0.05,
        textAlign: "left",
        marginRight: standardGapSmall,
        paddingVertical: standardGapSmall - 2
    },
    actionButton:{
        borderRadius: standardGapSmall,
        backgroundColor: color.lightButton,
        width: profilePicture,
        height: profilePicture,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: standardGapSmall
    }
}));