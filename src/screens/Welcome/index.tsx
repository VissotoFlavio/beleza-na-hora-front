import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { ScreenProps } from "../../navigation/AppNavigator";

type Props = ScreenProps<"Welcome">;

const WelcomeScreen: React.FC<Props> = (props): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-backgroud">
      <Container className="flex flex-1 justify-around">
        <Text className="font-bold text-4xl text-center">Beleza na Hora!</Text>
        <View className="flex-row justify-center">
          <Image source={require("../../../assets/images/welcome.png")} style={{ width: wp(50), height: hp(40) }} />
        </View>
        <View className="space-y-4">
          <Button label="Cadastra-se" onPress={() => props.navigation.navigate("SignUp")} />
          <View className="flex-row justify-center">
            <Text className="text-blue-500 font-semibold">Já tem uma conta?</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
              <Text className="font-semibold text-red-500"> Faça o Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
