import React, { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { BoxContainerStyle } from './style';

export interface BoxProps extends ViewProps {
  children: ReactNode;
}

export const BoxContainer: FC<BoxProps> = (props): JSX.Element => {
  return (
    <View style={BoxContainerStyle.container} {...props}>
      {props.children}
    </View>
  );
};
