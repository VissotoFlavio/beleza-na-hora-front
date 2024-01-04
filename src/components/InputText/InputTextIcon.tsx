import React, { ElementType, FC } from 'react';
import { View } from 'react-native';
import { StyleColor } from '../../theme';
import { InputTextStyle } from './style';

interface InputTextIconProps {
  icon: ElementType;
}

export const InputTextIcon: FC<InputTextIconProps> = (props): JSX.Element => {
  return (
    <View style={[InputTextStyle.icon]}>
      <props.icon size={18} color={StyleColor.gray[500]} />
    </View>
  );
};
