import React from "react";
import { View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export interface ContainerFormProps {
  children?: React.ReactNode;
}

const ContainerForm: React.FC<ContainerFormProps> = (props): React.JSX.Element => {
  return <View style={{ marginVertical: hp(0.8) }}>{props.children}</View>;
};

export default ContainerForm;
