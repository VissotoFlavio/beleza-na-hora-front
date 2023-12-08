import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import Container from "../../components/Container";
import ImageLogo from "../../components/ImageLogo";
import TitleApp from "../../components/TitleApp";

//type Props = ScreenProps<"Welcome">;

const WelcomeScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <Container className="flex flex-1 justify-around">
      <View
        className="flex justify-center items-center"
        style={{
          paddingTop: hp(2),
        }}
      >
        <TitleApp />
      </View>
      <View className="flex-1 flex justify-center items-center">
        <ImageLogo showBackground={true} height={50} width={80} />
      </View>
      {/* <View className="space-y-4">
          <Button label="Criar uma conta" onPress={() => navigation.navigate("SignUpScreen")} />
          <View className="flex-row justify-center">
            <Text className="text-blue-500 font-semibold">Já tem uma conta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
              <Text className="font-semibold text-red-500">Faça o Log In</Text>
            </TouchableOpacity>
          </View>
        </View> */}
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "blue",
    fontFamily: "custom-font",
  },
});

export default WelcomeScreen;
