import { StyleSheet, Dimensions } from "react-native";
import color from "../../common/style/color";
import font from "../../common/style/font";
import { DEVICE_WIDTH, profilePicture, standardGapLarge, standardGapMedium, standardGapSmall } from "../../common/style/Standard";

export default (styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatlist: {
        paddingVertical: standardGapSmall,
    },
    item: {
        width: (DEVICE_WIDTH / 2) - 16,
        margin: standardGapSmall
    },
    separator: {
        marginVertical: standardGapMedium
    },
    itemcontainer: {
        padding: standardGapSmall
    },
    imageContainer: {
        width: '100%',
        height: (DEVICE_WIDTH / 2) - 16,
    },
 
    dateLabel: {
        color: color.primaryColor,
        fontSize: font.fontSizeLarge - 5,
        fontWeight: "bold",
        lineHeight: 20,
        letterSpacing: 0.05,
        textAlign: "left",
        marginLeft: standardGapSmall,
        paddingVertical: standardGapSmall - 2
    },
    drLabel: {
        color: color.lightFontColor,
        fontSize: font.fontSizeLarge -8,
        lineHeight: 20,
        letterSpacing: 0.05,
        textAlign: "left",
        marginLeft: standardGapSmall,
        paddingVertical: standardGapSmall - 2
    },
    floating: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: 70,
        width: 70,
        bottom: 30,
        right: 30,
        backgroundColor: color.primaryColor,
        borderRadius: profilePicture
    }
}));