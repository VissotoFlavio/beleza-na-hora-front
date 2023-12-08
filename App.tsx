import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AuthProvider } from "./src/context/auth.context";
import useCustomFonts from "./src/hooks/useCustomFonts";
import Routes from "./src/routes";

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
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
