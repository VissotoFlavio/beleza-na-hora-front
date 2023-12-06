import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Theme } from "../theme";

import LogoSvg from "./../../assets/images/social/googleplus.svg";
const ButtonGoogle = () => {
  return (
    <TouchableOpacity
      className="flex flex-row bg-red-500 rounded-lg items-center"
      activeOpacity={0.7}
      style={{
        paddingVertical: hp(1.25),
        paddingLeft: wp(5),
      }}
    >
      <LogoSvg fill={Theme.colors.red[500]} height="30" width="30" />
      <Text className="text-xl font-bold text-center text-white" style={{ paddingLeft: wp(2) }}>
        Facebook
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonGoogle;
