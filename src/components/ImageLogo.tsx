import React from "react";
import { Image, ImageProps, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export interface ImageLogoProps extends Omit<ImageProps, "source"> {
  showBackground?: boolean;
}

const ImageLogo: React.FC<ImageLogoProps> = (props): React.JSX.Element => {
  const height = props.height ?? 40;
  const width = props.width ?? 50;

  const getImage = (): React.JSX.Element => {
    return (
      <Image
        style={{ width: wp(width), height: hp(height) }}
        source={require("../../assets/images/welcome.png")}
        {...props}
      />
    );
  };

  return (
    <View className="flex-1 justify-center items-center ">
      {props.showBackground ? (
        <View
          className="bg-rose-400/70 rounded-full items-center justify-center"
          style={{ width: wp(width * 1.75), height: hp(height * 1.1) }}
        >
          <View className="bg-rose-400/70 rounded-full items-center" style={{ width: wp(width * 1.5) }}>
            {getImage()}
          </View>
        </View>
      ) : (
        getImage()
      )}
    </View>
  );
};

export default ImageLogo;
