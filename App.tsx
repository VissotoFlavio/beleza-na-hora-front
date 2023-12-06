import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import useCustomFonts from "./src/hooks/useCustomFonts";
import AppNavigator from "./src/navigation/AppNavigator";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App: React.FC = (): React.JSX.Element | undefined => {
  const [fontsLoaded, fontError] = useCustomFonts();

  if (!fontsLoaded && !fontError) {
    return undefined;
  }

  return (
    <>
      <View style={{ paddingTop: hp(3.5) }}></View>
      <StatusBar style="auto" backgroundColor="white" />
      <AppNavigator />
    </>
  );
};

export default App;
