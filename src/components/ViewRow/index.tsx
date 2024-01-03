import React, { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

export interface ViewRowProps extends ViewProps {
  children: ReactNode;
}

export const ViewRow: FC<ViewRowProps> = (props): JSX.Element => {
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          display: 'flex',
          flexDirection: 'row',
        },
      ]}>
      {props.children}
    </View>
  );
};
