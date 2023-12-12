import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors, FontStyle } from './../../theme';

export const LinkStyle = StyleSheet.create({
    link: {
        fontSize: FontStyle.size.md,
        paddingLeft: wp(2),
        color: Colors.red[500],
        fontWeight: 'bold'
    },
    blue: {
        color: Colors.blue[500],
    },
    red: {
        color: Colors.red[500],
    },
    green: {
        color: Colors.green[500],
    },
});