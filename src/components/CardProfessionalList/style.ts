import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';

export const CardProfessionalStyle = StyleSheet.create({
  scroll: {},
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: widthPercentageToDP(2),
  },
});
