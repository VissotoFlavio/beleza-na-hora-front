import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StyleButtonOutline } from "./button.style";

export interface ButtonOutlineProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  color?: "blue" | "red" | "green";
  style?: StyleProp<ViewStyle>;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props): React.JSX.Element => {
  const color = props.color ?? 'blue';
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[StyleButtonOutline.button, StyleButtonOutline[color]]}
      {...props}
    >
      <Text className="text-center text-blue-500" style={{ fontSize: hp(2.2) }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;
