import React from "react";
import { Image, ImageProps, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export interface ImageLogoProps extends Omit<ImageProps, "source"> {
  showBackground?: boolean;
}

const ImageLogo: React.FC<ImageLogoProps> = (props): React.JSX.Element => {
  const height = props.height ?? 35;
  const width = props.width ?? 55;

  const getStyle = () => {
    return StyleSheet.create({
      img: {
        width: wp(width),
        height: hp(height),
      },
    });
  };

  const getImage = (): React.JSX.Element => {
    return (
      <Image
        style={[getStyle().img, props.style ?? props.style]}
        source={require("../../assets/images/welcome.png")}
        {...props}
      />
    );
  };

  return (
    <View className="flex-1 justify-center items-center ">
      {/* {props.showBackground ? ( */}
      {props.showBackground ? (
        <View
          className="bg-sky-400/50 rounded-full items-center justify-center"
          style={{ width: hp(46), height: hp(46) }}
        >
          <View
            className="bg-sky-400/50 rounded-full items-center justify-center"
            style={{ width: hp(40), height: hp(40) }}
          >
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
