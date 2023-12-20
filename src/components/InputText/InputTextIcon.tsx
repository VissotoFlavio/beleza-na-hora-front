import React, { ElementType, FC } from 'react';
import { View } from 'react-native';
import { StyleColorValues } from '../../theme';
import { InputTextStyle } from './style';

interface InputTextIconProps {
  icon: ElementType;
}

export const InputTextIcon: FC<InputTextIconProps> = (props): JSX.Element => {
  return (
    <View style={[InputTextStyle.icon]}>
      <props.icon size={24} color={StyleColorValues.black} />
    </View>
  );
};
