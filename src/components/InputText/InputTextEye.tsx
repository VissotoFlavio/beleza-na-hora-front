import { Eye, EyeOff } from 'lucide-react-native';
import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleColor } from '../../theme';
import { useInputText } from './inputText.context';
import { InputTextStyle } from './style';

export type InputTextEyeStatus = 'open' | 'close';
export interface InputTextEye {
  eyeStatus: InputTextEyeStatus;
  onPress?: ((event: InputTextEyeStatus) => void) | undefined;
}

export const InputTextEye: FC<InputTextEye> = (props): JSX.Element => {
  const inputContext = useInputText();
  const [eyeStatus, setEyeStatus] = useState(props.eyeStatus);

  const handlePressEye = () => {
    if (!inputContext.isDisabled) {
      setEyeStatus((currentValue) => {
        const newValue = currentValue === 'open' ? 'close' : 'open';
        if (props.onPress) {
          props.onPress(newValue);
        }
        return newValue;
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
          <Eye color={StyleColor.gray[600]} size={24} />
        ) : (
          <EyeOff color={StyleColor.gray[600]} size={24} />
        )}
      </View>
    </TouchableOpacity>
  );
};
