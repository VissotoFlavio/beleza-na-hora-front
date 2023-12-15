import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import ButtonOutline from '../../components/Button/Outline';
import Container from '../../components/Container';
import FormControl from '../../components/FormControl';
import Header from '../../components/Header';
import ImageLogo from '../../components/ImageLogoWelcome/ImageLogo';
import InputText from '../../components/InputText/InputText';
import { Link } from '../../components/Link';
import ScreenTitle from '../../components/ScreenTitle';
import { useAuth } from '../../context/auth.context';
import { Button, ButtonFacebook, ButtonGoogle } from './../../components/Button';
import { LoginFormSchema, LoginFormType } from './loginFormSchema';

// type Props = ScreenProps<"Login">;

const LoginScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  const authContext = useAuth();

  const [disabledInputs, setDisabledInputs] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginFormSchema),
    values: {
      email: 'vissoto_flavio@hotmail.com',
      password: 'abc123',
    },
  });

  const handlerEnter = async (data: LoginFormType) => {
    setDisabledInputs(true);
    setShowLoading(true);

    await authContext.signIn(data.email, data.password);
    setShowLoading(false);
    setDisabledInputs(false);
    navigation.navigate('HomeScreen');
    console.log('handler: ', data);
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <View className="flex-[1] bg-white">
        <Header />
        <ImageLogo />
      </View>
      <Container className="flex-1">
        <ScreenTitle title="Faça o Log in" />

        {/* Form */}
        <FormProvider {...form}>
          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, value } }) => {
              return (
                <InputText
                  placeholder="Email"
                  icon={{ type: 'Envelope' }}
                  keyboardType="email-address"
                  isDisabled={disabledInputs}
                  isInvalid={!!form.formState.errors.email?.message}
                  errorMessage={form.formState.errors?.email?.message}
                  value={value}
                  onChangeText={onChange}
                />
              );
            }}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, value } }) => {
              return (
                <InputText
                  placeholder="Senha"
                  icon={{ type: 'LockClosed' }}
                  isDisabled={disabledInputs}
                  eyeShow={true}
                  eyeStatus="open"
                  isInvalid={!!form.formState.errors?.password?.message}
                  errorMessage={form.formState.errors?.password?.message}
                  value={value}
                  onChangeText={onChange}
                />
              );
            }}
          />
        </FormProvider>

        <View className="w-full flex flex-row items-center justify-end">
          <FormControl>
            <Link label="Esqueceu a senha?" color="red" />
          </FormControl>
        </View>

        <FormControl>
          <Button
            label="Entrar"
            disabled={disabledInputs}
            isLoading={showLoading}
            onPress={form.handleSubmit(handlerEnter)}
          />
        </FormControl>

        <View className="w-full">
          <FormControl>
            <Text className="text-blue-600 text-md">Acesse utilizando</Text>
          </FormControl>
          <FormControl>
            <View className="flex flex-row justify-around space-x-4">
              <View className="w-1/2">
                <ButtonFacebook />
              </View>
              <View className="w-1/2">
                <ButtonGoogle />
              </View>
            </View>
          </FormControl>
        </View>
        <View className="">
          <ButtonOutline
            disabled={disabledInputs}
            label="Criar uma conta"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
      </Container>
    </ScrollView>
  );
};

export default LoginScreen;
