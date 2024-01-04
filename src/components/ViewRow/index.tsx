import React, { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSpacing } from '../../theme/spacing.style';

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
          alignItems: 'center',
          columnGap: StyleSpacing.horizontal.md,
        },
      ]}>
      {props.children}
    </View>
  );
};
