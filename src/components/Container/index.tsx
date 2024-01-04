import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { StyleColor } from '../../theme';
import { StyleBorder } from '../../theme/border.style';

export interface ContainerProps extends ViewProps {
  children?: React.ReactNode;
  style?: ViewStyle;
  showBackground?: boolean;
}

export const Container: React.FC<ContainerProps> = (props): React.JSX.Element => {
  return (
    <View style={[styles.boxContainer]}>
      {props.showBackground && <View style={styles.background} />}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
    backgroundColor: StyleColor.white,
  },
  background: {
    position: 'absolute',
    width: hp(100),
    height: hp(100),
    top: -hp(50),
    left: -hp(10),
    backgroundColor: StyleColor.blue[200],
    borderRadius: StyleBorder.radius.full,
  },
});
