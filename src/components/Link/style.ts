import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { StyleColor, StyleFont } from '../../theme';

export const LinkStyle = StyleSheet.create({
  link: {
    fontSize: StyleFont.size.md,
    paddingLeft: wp(2),
    color: StyleColor.blue[700],
    fontWeight: 'bold',
  },
});
