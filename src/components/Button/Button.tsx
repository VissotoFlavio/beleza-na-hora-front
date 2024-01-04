import React from 'react';
import {
    ActivityIndicator,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from 'react-native';
import { Color, FontSize, StyleColor, StyleFontSize } from '../../theme';
import { ObjectValues } from '../../utils/object-values';
import { StyleButton } from './button.style';

export interface ButtonProps extends Omit<TouchableOpacityProps, 'style' | 'activeOpacity'> {
  label: string;
  labelSize?: FontSize;
  // className?: string;
  color?: Color;
  // style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props): React.JSX.Element => {
  const styleColor = props.color ?? 'black';
  const labelSize = props.labelSize ?? 'md';

  const getLabelColor = (): ObjectValues<typeof StyleButton> => {
    switch (styleColor) {
      case 'blue':
        return StyleButton['label-blue'];
      case 'green':
        return StyleButton['label-green'];
      case 'red':
        return StyleButton['label-red'];
      default:
        return StyleButton['label-blue'];
    }
  };

  const getColorLoading = (): string => {
    return StyleColor.sky['500'];
  };

  return (
    <View style={StyleButton.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={[
          StyleButton.button,
          StyleButton[styleColor],
          props.disabled ? StyleButton.disabled : null,
        ]}
        {...props}>
        {props.isLoading ? (
          <ActivityIndicator size="small" color={getColorLoading()} style={[StyleButton.loading]} />
        ) : (
          <Text style={[getLabelColor(), StyleFontSize[labelSize]]}>{props.label}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
