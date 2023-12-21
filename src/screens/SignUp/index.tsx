import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { Lock, Mail, Phone, UserIcon } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button } from '../../components/Button';
import ButtonOutline from '../../components/Button/Outline';
import { Checkbox } from '../../components/Checkbox';
import Container from '../../components/Container';
import Header from '../../components/Header';
import ImageLogo from '../../components/ImageLogoWelcome/ImageLogo';
import { InputText } from '../../components/InputText';
import ScreenTitle from '../../components/ScreenTitle';
import ToastMessage, { ToastHandle } from '../../components/ToastMessage/ToastMessage';
import { SignUpFormSchema, SignUpFormType } from './schema';

// type Props = ScreenProps<"SignUp">;

const SignUpScreen: React.FC = (): React.JSX.Element => {
  const navigation = useNavigation();
  const toastRef = useRef<ToastHandle>(null);

  const [disabledInputs, setDisabledInputs] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const form = useForm<SignUpFormType>({
    resolver: zodResolver(SignUpFormSchema),
    values: {
      name: 'Flavio',
      lastName: 'Vissoto',
      email: 'vissoto_flavio@hotmail.com',
      emailConfirm: 'vissoto_flavio@hotmail.com',
      password: 'abc123',
      passwordConfirm: 'abc123',
      phone: '11 96528-1468',
      terms: true,
    },
  });

  const handlerCreate = async (data: SignUpFormType) => {
    setDisabledInputs(true);
    setShowLoading(true);

    setTimeout(() => {
      if (toastRef.current) {
        toastRef.current.show();
      }
      setShowLoading(false);
      setDisabledInputs(false);
    }, 2000);
    console.log('handler: ', data);
  };

  return (
    <>
      <ScrollView
        className="bg-white"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
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
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={UserIcon} />
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.name?.message}
                      errorMessage={form.formState.errors?.name?.message}
                    />
                  </InputText.Root>
                );
              }}
            />

            <Controller
              control={form.control}
              name="lastName"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={UserIcon} />
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.lastName?.message}
                      errorMessage={form.formState.errors?.lastName?.message}
                    />
                  </InputText.Root>
                );
              }}
            />

            <Controller
              control={form.control}
              name="email"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={Mail} />
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
              name="emailConfirm"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={Mail} />
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.emailConfirm?.message}
                      errorMessage={form.formState.errors?.emailConfirm?.message}
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
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.password?.message}
                      errorMessage={form.formState.errors?.password?.message}
                    />
                  </InputText.Root>
                );
              }}
            />

            <Controller
              control={form.control}
              name="passwordConfirm"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={Lock} />
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.passwordConfirm?.message}
                      errorMessage={form.formState.errors?.emailConfirm?.message}
                    />
                  </InputText.Root>
                );
              }}
            />

            <Controller
              control={form.control}
              name="phone"
              render={({ field: { onChange, value } }) => {
                return (
                  <InputText.Root isDisabled={disabledInputs}>
                    <InputText.Icon icon={Phone} />
                    <InputText.Input onChangeText={onChange} value={value} />
                    <InputText.Invalid
                      isInvalid={!!form.formState.errors.phone?.message}
                      errorMessage={form.formState.errors?.phone?.message}
                    />
                  </InputText.Root>
                );
              }}
            />

            <Controller
              control={form.control}
              name="terms"
              render={({ field: { onChange, value } }) => {
                return (
                  <Checkbox
                    label="Aceito os termos de uso"
                    isDisabled={disabledInputs}
                    isInvalid={!!form.formState.errors.terms?.message}
                    errorMessage={form.formState.errors?.terms?.message}
                    value={value}
                    onChangeValue={onChange}
                  />
                );
              }}
            />
          </FormProvider>
          <View>
            <Button
              label="Criar conta"
              onPress={form.handleSubmit(handlerCreate)}
              isLoading={showLoading}
              disabled={disabledInputs}
            />
          </View>
          <View>
            <ButtonOutline
              label="Já tem uma conta? Faça o login"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </Container>
      </ScrollView>
      <ToastMessage
        description="Cadastro com sucesso"
        type="success"
        title="Cadastro"
        ref={toastRef}
      />
    </>
  );
};

export default SignUpScreen;
