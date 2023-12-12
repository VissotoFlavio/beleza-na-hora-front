import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../theme/color.style";

import LogoSvg from "./../../../assets/images/social/google.svg";
import { StyleButtonGoogle } from "./button.style";

export const ButtonGoogle = () => {
  return (
    <TouchableOpacity
      disabled={true}
      activeOpacity={0.7}
      style={[StyleButtonGoogle.button, StyleButtonGoogle.disabled]}
    >
      <View style={StyleButtonGoogle.logoBackground}>
        <LogoSvg fill={Colors.red[500]} style={StyleButtonGoogle.logo} />
      </View>
      <Text style={[StyleButtonGoogle.label]}>Google</Text>
    </TouchableOpacity>
  );
};
