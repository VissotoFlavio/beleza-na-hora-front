import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from '../../theme';
import { BorderStyle } from '../../theme/border.style';
import { FontStyle } from './../../theme/font.style';

export const CheckboxStyle = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        marginBottom: 5
    },
    disabled: {
        opacity: 0.5
    },
    invalid: {
        marginVertical: hp(0.5),
    },
    checkboxContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkboxIcon: {
        borderWidth: 1,
        borderColor: Colors.gray[500],
        borderRadius: BorderStyle.radius.sm,
        width: hp(3),
        height: hp(3)
    },
    checked: {
        backgroundColor: Colors.blue[500],
    },
    label: {
        fontSize: FontStyle.size.md,
        color: Colors.blue[500],
        fontWeight: '700',
        paddingLeft: wp(2)
    },
    labelErrorContainer: {
        width: '100%',
        bottom: 0,
    },
    labelErrorText: {
        color: Colors.red[500],
        paddingLeft: wp(2),
        fontSize: FontStyle.size.md,
    }
});