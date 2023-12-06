import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";
import Container from "../../components/Container";
import ImageLogo from "../../components/ImageLogo";
import TitleApp from "../../components/TitleApp";
import { ScreenProps } from "../../navigation/AppNavigator";

type Props = ScreenProps<"Welcome">;

const WelcomeScreen: React.FC<Props> = (props): React.JSX.Element | null => {
  return (
    <SafeAreaView className="flex-1 bg-backgroud">
      <Container className="flex flex-1 justify-around">
        <View className="w-full">
          <TitleApp />
        </View>
        <View className="flex-row">
          <ImageLogo showBackground={true} />
        </View>
        <View className="space-y-4">
          <Button label="Criar uma conta" onPress={() => props.navigation.navigate("SignUp")} />
          <View className="flex-row justify-center">
            <Text className="text-blue-500 font-semibold">Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text className="font-semibold text-red-500">Faça o Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "blue",
    fontFamily: "custom-font",
  },
});

export default WelcomeScreen;
