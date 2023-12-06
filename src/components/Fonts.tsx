import { useFonts } from "expo-font";
import React from "react";

const Fonts = () => {
  const [fontsLoaded, fontError] = useFonts({
    aston: require("./../../assets/fonts/Aston-Script-Regular.ttf"),
    ephesis: require("./../../assets/fonts/Ephesis-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return undefined;
  }
  return <></>;
};

export default Fonts;
