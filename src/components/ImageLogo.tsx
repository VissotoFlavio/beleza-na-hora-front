import React from "react";
import { Image, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const ImageLogo = () => {
  return (
    <View className="w-full flex justify-center items-center">
      <Image
        className="h-full w-full"
        style={{ width: wp(50), height: hp(40) }}
        source={require("../../assets/images/welcome.png")}
      />
    </View>
  );
};

export default ImageLogo;
