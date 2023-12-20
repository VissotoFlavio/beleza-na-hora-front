import React, { FC, ReactNode } from 'react';
import { View } from 'react-native';
import { BaseControlProps } from '../types/base-control.props';
import { InputTextProvider } from './inputText.context';
import { InputTextStyle } from './style';

export type IconTypes = 'Envelope' | 'LockClosed' | 'Eye' | 'EyeSlash' | 'User' | 'Phone';
export type EyeStatusTypes = 'open' | 'close';

export interface InputTextProps extends BaseControlProps {
  children: ReactNode;
}

export const InputTextRoot: FC<InputTextProps> = (props): JSX.Element => {
  return (
    <InputTextProvider isDisabled={props.isDisabled} isReadOnly={props.isReadOnly}>
      <View style={[InputTextStyle.container, props.isDisabled ? InputTextStyle.disabled : null]}>
        <View style={InputTextStyle.content}>{props.children}</View>
      </View>
    </InputTextProvider>
  );
};
