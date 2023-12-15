import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleButtonFacebook } from "./button.style";

import { StyleColorValues } from "../../theme/color.style";
import LogoSvg from "./../../../assets/images/social/facebook.svg";

export const ButtonFacebook = () => {
  return (
    <TouchableOpacity
      //className="flex flex-row bg-blue-500 rounded-lg items-center"
      disabled={true}
      activeOpacity={0.7}
      style={[StyleButtonFacebook.button, StyleButtonFacebook.disabled]}
    >
      <LogoSvg fill={StyleColorValues.white} style={[StyleButtonFacebook.logo]} />
      <Text style={StyleButtonFacebook.label}>Facebook</Text>
    </TouchableOpacity>
  );
};
