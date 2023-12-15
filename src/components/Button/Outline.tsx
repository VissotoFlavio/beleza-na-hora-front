import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import { StyleButtonOutline } from './button.style';

export interface ButtonOutlineProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  color?: 'blue' | 'red' | 'green';
  style?: StyleProp<ViewStyle>;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props): React.JSX.Element => {
  const color = props.color ?? 'black';
  return (
    <View style={StyleButtonOutline.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[StyleButtonOutline.button, StyleButtonOutline[color]]}
        {...props}>
        <Text style={[StyleButtonOutline.text]}>{props.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonOutline;
