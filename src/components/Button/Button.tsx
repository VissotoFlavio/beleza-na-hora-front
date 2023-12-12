import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Colors } from "../../theme";
import { ObjectValues } from "../../utils/object-values";
import { StyleButton } from './button.style';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style' | 'activeOpacity'> {
  label: string;
  //className?: string;
  color?: "blue" | "red" | "green";
  //style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}


export const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {

  const styleColor = props.color ?? 'blue';

  const getLabelColor = (): ObjectValues<typeof StyleButton> => {
    switch (styleColor) {
      case 'blue':
        return StyleButton["label-blue"];
      case 'green':
        return StyleButton["label-green"];
      case 'red':
        return StyleButton["label-red"];
      default:
        return StyleButton["label-blue"];
    }
  }

  const getColorLoading = (): string => {
    return Colors.sky["500"];
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[StyleButton.button, StyleButton[styleColor], props.disabled ? StyleButton.disabled : null]}
      {...props}
    >
      {props.isLoading && (
        <ActivityIndicator
          size="small"
          color={getColorLoading()}
          style={[StyleButton.loading]} />)}

      <Text style={[StyleButton.label, getLabelColor()]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};