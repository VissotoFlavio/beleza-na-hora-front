import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import { View } from "react-native";

import { Theme } from "../theme";
import BackgroundSvg from "./../../assets/images/wave.svg";

export interface HeaderBackgroundProps {
  height?: number;
}

const Header: React.FC<HeaderBackgroundProps> = (props): React.JSX.Element => {
  const [heightWave] = useState(props.height ?? 120);

  return (
    <View className="absolute bg-red-500" style={styles.svgCurve}>
      <View className="bg-sky-500" style={{ height: heightWave + 17 }}>
        <BackgroundSvg
          fill={Theme.colors.sky[500]}
          height={heightWave}
          width="100%"
          style={{ position: "absolute", top: heightWave }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // rest of the styles
  svgCurve: {
    position: "absolute",
    width: wp(100),
  },
});

export default Header;
