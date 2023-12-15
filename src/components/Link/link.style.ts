import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StyleColorValues, StyleFontValues } from './../../theme';

export const LinkStyle = StyleSheet.create({
    link: {
        fontSize: StyleFontValues.size.md,
        paddingLeft: wp(2),
        color: StyleColorValues.red[500],
        fontWeight: 'bold'
    },
    blue: {
        color: StyleColorValues.blue[500],
    },
    red: {
        color: StyleColorValues.red[500],
    },
    green: {
        color: StyleColorValues.green[500],
    },
});