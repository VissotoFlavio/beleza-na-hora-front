import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Constants } from "../constants";

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      className="bg-blue-500 rounded-full"
      activeOpacity={0.7}
      style={{
        paddingVertical: hp(Constants.paddings.vertical),
      }}
      {...props}
    >
      <Text className="text-xl font-bold text-center text-white">{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
