import { Check } from 'lucide-react-native';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { StyleColor } from '../../theme';
import { BaseControlProps } from '../types/base-control.props';
import { CheckboxStyle } from './checkbox.style';

export interface CheckboxProps extends BaseControlProps {
  label: string;
  value: boolean;
  isInvalid?: boolean;
  onChangeValue?: ((text: boolean) => void) | undefined;
  errorMessage?: string;
}

export const Checkbox: React.FC<CheckboxProps> = (props): React.JSX.Element => {
  const [checked, setChecked] = useState(props.value);

  const handlerPress = (value: boolean) => {
    setChecked(value);
    if (props.onChangeValue) {
      props.onChangeValue(value);
    }
  };
  return (
    <View style={[CheckboxStyle.container, props.isDisabled ? CheckboxStyle.disabled : null]}>
      <Pressable style={CheckboxStyle.checkboxContainer} onPress={() => handlerPress(!checked)}>
        <View style={[CheckboxStyle.checkboxIcon, checked ? CheckboxStyle.checked : null]}>
          {checked && <Check size={24} strokeWidth={2} color={StyleColor.white} />}
        </View>
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
