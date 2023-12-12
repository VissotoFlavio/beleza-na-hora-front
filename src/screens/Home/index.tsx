import React from "react";
import { View } from "react-native";
import Button from "../../components/Button/Button";
import { useAuth } from "../../context/auth.context";

const HomeScreen = () => {
  const authContext = useAuth();

  const handlerSair = async () => {
    await authContext.signOut();
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Button label="Sair" onPress={handlerSair} />
    </View>
  );
};

export default HomeScreen;
