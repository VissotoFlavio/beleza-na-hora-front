import React from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BaseControlProps } from './types/base-control.props';

export interface FormControlProps extends BaseControlProps {
  children: React.ReactNode;
}

const FormControl: React.FC<FormControlProps> = (props): React.JSX.Element => {
  return <View style={{ marginVertical: hp(0.8) }}>{props.children}</View>;
};

export default FormControl;
