import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ColorName } from '../../theme';
import { LinkStyle } from './style';

export interface LinkProps {
  label?: string;
  isDisabled?: boolean;
  color?: ColorName;
}

export const Link: React.FC<LinkProps> = (props): React.JSX.Element => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <Text style={LinkStyle.link}>{props.label}</Text>
    </TouchableOpacity>
  );
};
