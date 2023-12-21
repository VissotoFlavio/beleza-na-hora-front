import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../components/Button';
import { useAuth } from '../../context/auth.context';

const HomeScreen = () => {
  const authContext = useAuth();

  const handlerSair = async () => {
    await authContext.signOut();
  };

  return (
    <View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        {/* avatar and Welcome */}
        {/* <Header /> */}
        <Button onPress={handlerSair} label="Sair" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
