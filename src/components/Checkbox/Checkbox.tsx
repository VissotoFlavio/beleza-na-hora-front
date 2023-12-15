import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import { StyleColorValues } from "../../theme";
import { BaseControlProps } from "../types/base-control.props";
import { CheckboxStyle } from "./checkbox.style";

export interface CheckboxProps extends BaseControlProps {
  label: string;
  value: boolean;
  onChangeValue?: ((text: boolean) => void) | undefined;
}

export const Checkbox: React.FC<CheckboxProps> = (props): React.JSX.Element => {
  const [checked, setChecked] = useState(props.value);

  const handlerPress = (value: boolean) => {
    setChecked(value);
    if (props.onChangeValue) {
      props.onChangeValue(value);
    }
  }
  return (
    <View style={[CheckboxStyle.container, props.isDisabled ? CheckboxStyle.disabled : null]}>
      <Pressable
        style={CheckboxStyle.checkboxContainer}
        onPress={() => handlerPress(!checked)}>
        <View style={[
          CheckboxStyle.checkboxIcon,
          checked ? CheckboxStyle.checked : null
        ]}>{checked && <CheckIcon size={24} strokeWidth={2} color={StyleColorValues.white} />}</View>
        <View>
          <Text style={[CheckboxStyle.label]}>{props.label}</Text>
        </View>
      </Pressable>
      <View style={[CheckboxStyle.labelErrorContainer]}>
        <Text style={[CheckboxStyle.labelErrorText]}>{props.errorMessage}</Text>
      </View>
    </View>
  );
};