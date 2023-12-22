import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Lock, UserIcon } from 'lucide-react-native';
import React, { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import ButtonOutline from '../../components/Button/Outline';
import { Container } from '../../components/Container';
import FormControl from '../../components/FormControl';
import HeaderBackground from '../../components/HeaderBackground/HeaderBackground';
import ImageLogo from '../../components/ImageLogoWelcome/ImageLogo';
import { InputText } from '../../components/InputText';
import { InputTextEyeStatus } from '../../components/InputText/InputTextEye';
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
  const [showPassword, setShowPassword] = useState(false);

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

  const handlePressEyePassword = (value: InputTextEyeStatus) => {
    setShowPassword(value === 'open');
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View className="flex-[1] ">
        <HeaderBackground />
        <ImageLogo />
      </View>
      <Container>
        <ScreenTitle title="Faça o Log in" />

        {/* Form */}
        <FormProvider {...form}>
          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, value } }) => {
              return (
                <InputText.Root isDisabled={disabledInputs}>
                  <InputText.Icon icon={UserIcon} />
                  <InputText.Input onChangeText={onChange} value={value} />
                  <InputText.Invalid
                    isInvalid={!!form.formState.errors.email?.message}
                    errorMessage={form.formState.errors?.email?.message}
                  />
                </InputText.Root>
              );
            }}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, value } }) => {
              return (
                <InputText.Root isDisabled={disabledInputs}>
                  <InputText.Icon icon={Lock} />
                  <InputText.Input
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword}
                  />
                  <InputText.Eye eyeStatus="open" onPress={handlePressEyePassword} />
                  <InputText.Invalid
                    isInvalid={!!form.formState.errors.password?.message}
                    errorMessage={form.formState.errors?.password?.message}
                  />
                </InputText.Root>
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
