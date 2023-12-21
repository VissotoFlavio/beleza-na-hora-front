import { Eye, EyeOff } from 'lucide-react-native';
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleColorValues } from '../../theme';
import { useInputText } from './inputText.context';
import { InputTextStyle } from './style';

export interface InputTextEye {
  eyeStatus: 'open' | 'close';
}

export const InputTextEye: FC<InputTextEye> = (props): JSX.Element => {
  const inputContext = useInputText();
  const [eyeStatus, setEyeStatus] = useState(props.eyeStatus);

  const handlePressEye = () => {
    if (!inputContext.isDisabled) {
      setEyeStatus((currentValue) => {
        return currentValue === 'open' ? 'close' : 'open';
      });
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePressEye}
      disabled={inputContext.isDisabled}>
      <View style={[InputTextStyle.iconEnd]}>
        {eyeStatus === 'open' ? (
          <Eye color={StyleColorValues.gray[600]} size={24} />
        ) : (
          <EyeOff color={StyleColorValues.gray[600]} size={24} />
        )}
      </View>
    </TouchableOpacity>
  );
};
