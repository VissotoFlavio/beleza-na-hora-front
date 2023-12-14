import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ScrollView, View } from "react-native";
import { Button } from "../../components/Button";
import ButtonOutline from "../../components/Button/Outline";
import { Checkbox } from "../../components/Checkbox";
import Container from "../../components/Container";
import Header from "../../components/Header";
import ImageLogo from "../../components/ImageLogo";
import InputText from "../../components/InputText/InputText";
import ScreenTitle from "../../components/ScreenTitle";
import { SignUpFormSchema, SignUpFormType } from "./signup.schema";

//type Props = ScreenProps<"SignUp">;

const SignUpScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  const [disabledInputs, setDisabledInputs] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const form = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
    values: {
      name: "Flavio",
      lastName: "Vissoto",
      email: 'vissoto_flavio@hotmail.com',
      emailConfirm: 'vissoto_flavio@hotmail.com',
      password: 'abc123',
      passwordConfirm: 'abc123',
      phone: '11 96528-1468',
      terms: true
    }
  });

  const handlerEnter = async (data: SignUpFormType) => {
    setDisabledInputs(true);
    setShowLoading(true);

    setTimeout(() => {
      setShowLoading(false);
      setDisabledInputs(false);
    }, 2000);
    console.log('handler: ', data);
  };

  return (
    <ScrollView
      className="bg-white"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <Container className="h-full">
        <Header />
        <View className="w-full">
          <ImageLogo />
        </View>

        <ScreenTitle title="Crie uma nova conta" />
        <FormProvider {...form}>
          <Controller
            control={form.control}
            name="name"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Nome"
                icon={{ type: "User" }}
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.name?.message}
                errorMessage={form.formState.errors?.name?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="lastName"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Sobrenome"
                icon={{ type: "User" }}
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.lastName?.message}
                errorMessage={form.formState.errors?.lastName?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Email"
                icon={{ type: "Envelope" }}
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.email?.message}
                errorMessage={form.formState.errors?.email?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="emailConfirm"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Confirme o email"
                icon={{ type: "Envelope" }}
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.emailConfirm?.message}
                errorMessage={form.formState.errors?.emailConfirm?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Crie uma senha com no mínimo 6 digítos"
                icon={{ type: "LockClosed" }}
                eyeShow={true}
                eyeStatus="open"
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.password?.message}
                errorMessage={form.formState.errors?.password?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="passwordConfirm"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Confirme a senha"
                icon={{ type: "LockClosed" }}
                eyeShow={true}
                eyeStatus="open"
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.passwordConfirm?.message}
                errorMessage={form.formState.errors?.passwordConfirm?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="phone"
            render={({ field: { onChange, value } }) => {
              return <InputText
                placeholder="Telefone para contato"
                icon={{ type: "Phone" }}
                keyboardType="phone-pad"
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.phone?.message}
                errorMessage={form.formState.errors?.phone?.message}
                value={value}
                onChangeText={onChange} />
            }}
          />

          <Controller
            control={form.control}
            name="terms"
            render={({ field: { onChange, value } }) => {
              return <Checkbox
                label="Aceito os termos de uso"
                isDisabled={disabledInputs}
                isInvalid={!!form.formState.errors.terms?.message}
                errorMessage={form.formState.errors?.terms?.message}
                value={value}
                onChangeValue={onChange} />
            }}
          />

        </FormProvider>
        <View>
          <Button label="Criar conta" onPress={form.handleSubmit(handlerEnter)} />
        </View>
        <View>
          <ButtonOutline label="Já tem uma conta? Faça o login" onPress={() => navigation.navigate("LoginScreen")} />
        </View>

      </Container>
    </ScrollView>
  );
};

export default SignUpScreen;
