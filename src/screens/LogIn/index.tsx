import React from "react";
import { GestureResponderEvent, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Button";
import ButtonFacebook from "../../components/ButtonFacebook";
import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonOutline from "../../components/ButtonOutline";
import Container from "../../components/Container";
import ContainerForm from "../../components/ContainerForm";
import Header from "../../components/Header";
import ImageLogo from "../../components/ImageLogo";
import InputText from "../../components/InputText";
import ScreenTitle from "../../components/ScreenTitle";
import { useAuth } from "../../context/auth.context";

//type Props = ScreenProps<"Login">;

const LoginScreen: React.FC = (props): React.JSX.Element => {
  const navigation = useNavigation();
  const authContext = useAuth();

  const handlerEnter = async (event: GestureResponderEvent) => {
    await authContext.signIn();

    //navigation.navigate("HomeScreen");
  };

  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 bg-white"
      >
        <Container className="h-full">
          <Header />
          <View className="w-full">
            <ImageLogo />
          </View>

          <ScreenTitle title="Faça o Log in" />

          {/* Form */}
          <ContainerForm>
            <InputText placeholder="Email" icon={{ type: "Envelope" }} keyboardType="email-address" />
          </ContainerForm>
          <ContainerForm>
            <InputText placeholder="Senha" icon={{ type: "LockClosed" }} eyeShow={true} eyeStatus="open" />
          </ContainerForm>
          <View className="w-full flex flex-row items-center justify-end">
            {/* <View className="w-1/2">
                <Checkbox />
              </View> */}
            <ContainerForm>
              <Text className="text-red-600 font-semibold" style={{ fontSize: hp(2), paddingLeft: wp(2) }}>
                Esqueceu a senha?
              </Text>
            </ContainerForm>
          </View>

          <ContainerForm>
            <Button label="Entrar" onPress={handlerEnter} />
          </ContainerForm>

          <View className="w-full">
            <ContainerForm>
              <Text className="text-blue-600 text-md">Acesse utilizando</Text>
            </ContainerForm>
            <ContainerForm>
              <View className="flex flex-row justify-around space-x-4">
                <View className="w-1/2">
                  <ButtonFacebook />
                </View>
                <View className="w-1/2">
                  <ButtonGoogle />
                </View>
              </View>
            </ContainerForm>
          </View>
          <View className="">
            <ButtonOutline label="Criar uma conta" onPress={() => navigation.navigate("SignUpScreen")} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default LoginScreen;
