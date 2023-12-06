import React from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export interface ContainerProps extends ViewProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = (props): React.JSX.Element => {
  return <View style={[styles.boxContainer, props.style]}>{props.children}</View>;
};

const styles = StyleSheet.create({
  boxContainer: {
    paddingHorizontal: wp(4),
  },
});

export default Container;
