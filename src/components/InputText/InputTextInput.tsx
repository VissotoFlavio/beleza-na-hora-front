import React, { FC } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { StyleColor } from '../../theme';
import { BaseControlProps } from '../types/base-control.props';
import { useInputText } from './inputText.context';
import { InputTextStyle } from './style';

export interface InputTextContentProps extends TextInputProps, BaseControlProps {}

export const InputTextInput: FC<InputTextContentProps> = (props): JSX.Element => {
  const inputContext = useInputText();

  return (
    <View style={InputTextStyle.ContainerInput}>
      <TextInput
        placeholderTextColor={StyleColor.gray[500]}
        style={[InputTextStyle.text]}
        editable={!inputContext.isDisabled}
        {...props}
      />
    </View>
  );
};
