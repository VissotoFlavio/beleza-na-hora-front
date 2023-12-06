import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.circle}></View>
      <View className="flex-1 justify-center items-center">
        <View>
          <Text>Log in</Text>
        </View>
        <View className="mx-4 flex-row items-center">
          <TextInput
            className="flex-1 text-base mb-1 pl-3 tracking-wider border"
            placeholder="Email"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
          />
        </View>
        <Text>LoginScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  circle: {
    height: 600,
    width: 700,
    backgroundColor: "#00f",
    borderRadius: 300,
    position: "absolute",
    right: 0,
    top: -400,
  },
});
