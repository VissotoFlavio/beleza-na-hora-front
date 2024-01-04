import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSpacing } from '../../theme/spacing.style';

export const BoxContent: FC<ViewProps> = (props): JSX.Element => {
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          paddingHorizontal: StyleSpacing.horizontal['5xl'],
        },
      ]}>
      {props.children}
    </View>
  );
};
