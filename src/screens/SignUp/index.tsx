import React from "react";
import { ScrollView, View } from "react-native";
import Button from "../../components/Button";
import ButtonOutline from "../../components/ButtonOutline";
import Checkbox from "../../components/Checkbox";
import Container from "../../components/Container";
import ContainerForm from "../../components/ContainerForm";
import Header from "../../components/Header";
import ImageLogo from "../../components/ImageLogo";
import InputText from "../../components/InputText";
import ScreenTitle from "../../components/ScreenTitle";
import { ScreenProps } from "../../navigation/AppNavigator";

type Props = ScreenProps<"SignUp">;

const SignUpScreen: React.FC<Props> = (props): React.JSX.Element => {
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
            <ImageLogo height={30} width={40} />
          </View>

          <ScreenTitle title="Crie uma nova conta" />

          <ContainerForm>
            <InputText placeholder="Nome" icon={{ type: "User" }} />
          </ContainerForm>
          <ContainerForm>
            <InputText placeholder="Email" icon={{ type: "Envelope" }} keyboardType="email-address" />
          </ContainerForm>
          <ContainerForm>
            <InputText placeholder="Confirme o email" icon={{ type: "Envelope" }} keyboardType="email-address" />
          </ContainerForm>
          <ContainerForm>
            <InputText placeholder="Senha" icon={{ type: "LockClosed" }} eyeShow={true} eyeStatus="open" />
          </ContainerForm>
          <ContainerForm>
            <InputText placeholder="Telefone" icon={{ type: "Phone" }} keyboardType="phone-pad" />
          </ContainerForm>
          <ContainerForm>
            <Checkbox label="Aceito os termos de uso" />
          </ContainerForm>
          <ContainerForm>
            <Button label="Criar conta" />
          </ContainerForm>
          <View className="">
            <ButtonOutline label="Já tem uma conta? Faça o login" onPress={() => props.navigation.navigate("Login")} />
          </View>
        </Container>
      </ScrollView>
    </>
  );
};

export default SignUpScreen;
