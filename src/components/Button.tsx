import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 rounded-lg"
      activeOpacity={0.7}
      style={{
        paddingVertical: hp(1.2),
      }}
      {...props}
    >
      <Text className="text-center text-white" style={{ fontSize: hp(2.2) }}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
