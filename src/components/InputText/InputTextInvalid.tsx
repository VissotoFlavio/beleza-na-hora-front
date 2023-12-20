import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { InputTextStyle } from './style';

export interface InputTextInvalidProps {
  errorMessage?: string;
  isInvalid?: boolean;
}
export const InputTextInvalid: FC<InputTextInvalidProps> = (props): JSX.Element => {
  return (
    <View style={[InputTextStyle.labelErrorContainer]}>
      <Text style={[InputTextStyle.labelErrorText]}>{props.errorMessage}</Text>
    </View>
  );
};
