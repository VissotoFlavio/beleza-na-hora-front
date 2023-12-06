import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export interface ButtonOutlineProps extends TouchableOpacityProps {
  label: string;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props) => {
  return (
    <TouchableOpacity
      className="rounded-lg bg-white flex justify-center items-center border-2 border-blue-500"
      activeOpacity={0.7}
      style={{
        paddingVertical: hp(1),
      }}
      {...props}
    >
      <Text className="text-xl font-bold text-center text-blue-500">{props.label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;
