import React from "react";
import { Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ContainerForm from "./ContainerForm";

export interface ScreenTitleProps {
  title: string;
}
const ScreenTitle: React.FC<ScreenTitleProps> = (props): React.JSX.Element => {
  return (
    <ContainerForm>
      <Text className="text-blue-500 font-bold" style={{ fontSize: hp(3) }}>
        {props.title}
      </Text>
    </ContainerForm>
  );
};

export default ScreenTitle;
