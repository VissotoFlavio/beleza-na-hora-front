import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors, FontStyle } from "../../theme";

export const StyleButton = StyleSheet.create({
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingVertical: hp(1.2),
    },
    disabled: {
        opacity: 0.5
    },
    loading: {
        paddingRight: wp(2)
    },
    blue: {
        backgroundColor: Colors.blue[500],
    },
    red: {
        backgroundColor: Colors.red[500],
    },
    green: {
        backgroundColor: Colors.green[500],
    },
    label: {
        fontSize: hp(2.2),
    },
    "label-blue": {
        color: Colors.white
    },
    "label-red": {
        color: Colors.white
    },
    "label-green": {
        color: Colors.white
    },
});

export const StyleButtonOutline = StyleSheet.create({
    button: {
        ...StyleButton.button,
        backgroundColor: Colors.white,
        borderWidth: 2,
    },
    disabled: StyleButton.disabled,
    blue: {
        borderColor: Colors.blue[500],
        color: Colors.blue[500],
    },
    red: {
        borderColor: Colors.red[500],
        color: Colors.red[500],
    },
    green: {
        borderColor: Colors.green[500],
        color: Colors.green[500],
    }
});

export const StyleButtonFacebook = StyleSheet.create({
    button: {
        ...StyleButton.button,
        backgroundColor: Colors.blue[500],
        borderRadius: 8
    },
    disabled: StyleButton.disabled,
    logo: {
        height: hp(3.5),
        width: hp(3.5)
    },
    label: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: 'center',
        paddingLeft: wp(2),
        fontSize: FontStyle.size["2xl"]
    }
});

export const StyleButtonGoogle = StyleSheet.create({
    button: {
        ...StyleButton.button,
        backgroundColor: Colors.red[500],
        borderRadius: 8
    },
    disabled: StyleButton.disabled,
    logoBackground: {
        //backgroundColor: Colors.red[700],
        borderRadius: 50,
    },
    logo: {
        height: hp(3.5),
        width: hp(3.5),
    },
    label: {
        color: Colors.white,
        fontWeight: "bold",
        textAlign: 'center',
        paddingLeft: wp(2),
        fontSize: FontStyle.size["2xl"]
    }
});