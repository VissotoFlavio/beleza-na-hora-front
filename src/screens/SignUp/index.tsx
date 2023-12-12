import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";
import { Button } from "../../components/Button";
import ButtonOutline from "../../components/Button/Outline";
import Checkbox from "../../components/Checkbox";
import Container from "../../components/Container";
import FormControl from "../../components/FormControl";
import Header from "../../components/Header";
import ImageLogo from "../../components/ImageLogo";
import InputText from "../../components/InputText/InputText";
import ScreenTitle from "../../components/ScreenTitle";

//type Props = ScreenProps<"SignUp">;

const SignUpScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView
        className="flex-1 bg-white"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Container className="h-full">
          <Header />
          <View className="w-full">
            <ImageLogo />
          </View>

          <ScreenTitle title="Crie uma nova conta" />

          <FormControl>
            <InputText placeholder="Nome" icon={{ type: "User" }} errorMessage="Erro no campo" />
          </FormControl>
          <FormControl>
            <InputText placeholder="Email" icon={{ type: "Envelope" }} keyboardType="email-address" />
          </FormControl>
          <FormControl>
            <InputText placeholder="Confirme o email" icon={{ type: "Envelope" }} keyboardType="email-address" />
          </FormControl>
          <FormControl>
            <InputText placeholder="Senha" icon={{ type: "LockClosed" }} eyeShow={true} eyeStatus="open" />
          </FormControl>
          <FormControl>
            <InputText placeholder="Telefone" icon={{ type: "Phone" }} keyboardType="phone-pad" />
          </FormControl>
          <FormControl>
            <Checkbox label="Aceito os termos de uso" />
          </FormControl>
          <FormControl>
            <Button label="Criar conta" />
          </FormControl>
          <View className="">
            <ButtonOutline label="Já tem uma conta? Faça o login" onPress={() => navigation.navigate("LoginScreen")} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
