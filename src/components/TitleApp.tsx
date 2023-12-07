import React from "react";
import { Text, TextProps } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const TitleApp: React.FC<TextProps> = (props) => {
  return (
    <Text
      className="font-medium text-center text-blue-400 pt-10"
      style={{
        fontSize: hp(4.8),
        fontFamily: "aston",
      }}
    >
      Beleza na Hora
    </Text>
  );
};

export default TitleApp;
