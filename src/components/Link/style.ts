import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleColorValues, StyleFont } from '../../theme';

export const LinkStyle = StyleSheet.create({
  link: {
    fontSize: StyleFont.size.md,
    paddingLeft: wp(2),
    color: StyleColorValues.blue[700],
    fontWeight: 'bold',
  },
});
