import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AppNavigator from "./src/navigation/AppNavigator";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App: React.FC = () => {
  return (
    <>
      <View style={{ paddingTop: hp(3.5) }}></View>
      <StatusBar style="auto" backgroundColor="white" />
      <AppNavigator />
    </>
  );
};

export default App;
