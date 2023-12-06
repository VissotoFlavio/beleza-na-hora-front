import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

import Button from "../../components/Button";
import ButtonFacebook from "../../components/ButtonFacebook";
import ButtonGoogle from "../../components/ButtonGoogle";
import ButtonOutline from "../../components/ButtonOutline";
import Header from "../../components/Header";
import ImageLogo from "../../components/ImageLogo";
import InputText from "../../components/InputText";

const LoginScreen = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      className="flex-1 w-full bg-white"
    >
      <Header />
      <View className="w-full">
        <ImageLogo height={30} width={40} />
      </View>

      <View style={{ paddingHorizontal: wp(6) }}>
        {/* title */}
        <View className="pb-4">
          <Text className="text-blue-500 font-bold text-2xl">Log in</Text>
        </View>

        {/* Form */}
        <View className="w-full flex space-y-8">
          <SafeAreaView className="flex items-center space-y-4">
            <View className="w-full">
              <InputText placeholder="Email" icon={{ type: "Envelope" }} keyboardType="email-address" />
            </View>
            <View className="w-full">
              <InputText placeholder="Senha" icon={{ type: "LockClosed" }} eyeShow={true} eyeStatus="open" />
            </View>
            <View className="w-full flex flex-row items-center justify-between">
              {/* <View className="w-1/2">
                <Checkbox />
              </View> */}
              <View className="w-full flex items-end">
                <Text className="text-red-600 font-semibold" style={{ fontSize: hp(2), paddingLeft: wp(2) }}>
                  Esqueceu a senha?
                </Text>
              </View>
            </View>

            <View className="w-full">
              <Button label="Entrar" />
            </View>

            <View className="w-full">
              <View className="pb-2">
                <Text className="text-blue-600 text-md">Acesse utilizando</Text>
              </View>
              <View className="flex flex-row justify-around space-x-4">
                <View className="w-1/2">
                  <ButtonFacebook />
                </View>
                <View className="w-1/2">
                  <ButtonGoogle />
                </View>
              </View>
            </View>
          </SafeAreaView>
          <View className="">
            <ButtonOutline label="Criar uma conta" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
