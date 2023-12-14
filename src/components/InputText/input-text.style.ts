import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from '../../theme';
import { BorderStyle } from '../../theme/border.style';
import { FontStyle } from './../../theme/font.style';

export const InputTextStyle = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: FontStyle.size.xl,
        marginBottom: 5
    },
    invalid: {
        marginVertical: hp(0.5),
    },
    disabled: {
        opacity: 0.5
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray[400],
        borderRadius: BorderStyle.radius.lg
    },
    icon: {
        borderRadius: BorderStyle.radius.full,
        paddingLeft: wp(4)
    },
    text: {
        flex: 1,
        fontSize: FontStyle.size.md,
        letterSpacing: 0.1,
        paddingVertical: hp(1.2),
        paddingLeft: wp(11),
    },
    textWithicon: {
        paddingLeft: wp(2),
    },
    iconEnd: {
        paddingRight: wp(4)
    },
    labelErrorContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    labelErrorText: {
        color: Colors.red[500],
        paddingLeft: wp(2),
        fontSize: FontStyle.size.md,
    }
});