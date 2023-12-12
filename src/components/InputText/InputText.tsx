import React, { useState } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, PhoneIcon, UserIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Colors } from "../../theme";
import { BaseControlProps } from "../types/base-control.props";
import { InputTextStyle } from './input-text.style';

export type IconTypes = "Envelope" | "LockClosed" | "Eye" | "EyeSlash" | "User" | "Phone";
export type EyeStatusTypes = "open" | "close";

export interface IconProps {
  type?: IconTypes;
  size?: number;
  strokeWidth?: number;
  color?: string;
};
export interface InputTextProps extends Omit<TextInputProps, "secureTextEntry">, BaseControlProps {
  icon?: IconProps;
  eyeShow?: boolean;
  eyeStatus?: EyeStatusTypes;
}

const GetIcon: React.FC<IconProps> = (props): React.JSX.Element | null => {
  const strokeWidth = props?.strokeWidth ?? 2;
  const size = props?.size ?? 2.5;
  const color = props?.color ?? Colors.blue[500];

  switch (props?.type) {
    case "Envelope":
      return <EnvelopeIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    case "Eye":
      return <EyeIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    case "EyeSlash":
      return <EyeSlashIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    case "LockClosed":
      return <LockClosedIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    case "User":
      return <UserIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    case "Phone":
      return <PhoneIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
    default:
      return null;
  }
};

const InputText: React.FC<InputTextProps> = React.forwardRef((props: InputTextProps, ref: any) => {
  const [eyeStatusOpen, setEyeStatusOpen] = useState<boolean>(props.eyeStatus == "open");

  const handleEye = () => {
    setEyeStatusOpen((x) => !x);
  };

  return (
    <View style={[InputTextStyle.container]}>
      <View style={[props.isDisabled ? InputTextStyle.disabled : null]}>
        <View style={[InputTextStyle.content]}>
          {props.icon && (
            <View style={[InputTextStyle.icon]}>
              {GetIcon(props.icon)}
            </View>
          )}
          <TextInput
            placeholderTextColor={Colors.gray[500]}
            style={[InputTextStyle.text, props.icon ? InputTextStyle.textWithicon : null]}
            secureTextEntry={eyeStatusOpen}
            editable={!props.isDisabled}
            {...props}
          />
          {props.eyeShow && (
            <TouchableOpacity activeOpacity={0.5} onPress={handleEye} disabled={props.isDisabled}>
              <View style={[InputTextStyle.iconEnd]}>
                {eyeStatusOpen ? GetIcon({ type: "Eye" }) : GetIcon({ type: "EyeSlash" })}
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {props.isInvalid && (
        <View style={[InputTextStyle.labelErrorContainer]}>
          <Text style={[InputTextStyle.labelErrorText]}>{props.errorMessage}</Text>
        </View>
      )}
    </View>
  );
});

export default InputText;
