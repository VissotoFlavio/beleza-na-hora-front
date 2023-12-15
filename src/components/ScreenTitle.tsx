import React from 'react';
import { Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FormControl from './FormControl';

export interface ScreenTitleProps {
  title: string;
}
const ScreenTitle: React.FC<ScreenTitleProps> = (props): React.JSX.Element => {
  return (
    <FormControl>
      <Text className="text-black font-bold" style={{ fontSize: hp(3) }}>
        {props.title}
      </Text>
    </FormControl>
  );
};

export default ScreenTitle;
