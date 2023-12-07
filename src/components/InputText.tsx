import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeSlashIcon, LockClosedIcon, PhoneIcon, UserIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Theme } from "../theme";

export type IconTypes = "Envelope" | "LockClosed" | "Eye" | "EyeSlash" | "User" | "Phone";
export type EyeStatusTypes = "open" | "close";

export type IconProps = {
  type?: IconTypes;
  size?: number;
  strokeWidth?: number;
  color?: string;
};
export interface InputTextProps extends Omit<TextInputProps, "secureTextEntry"> {
  icon?: IconProps;
  eyeShow?: boolean;
  eyeStatus?: EyeStatusTypes;
}

const GetIcon: React.FC<IconProps> = (props): React.JSX.Element | null => {
  const strokeWidth = props?.strokeWidth ?? 2;
  const size = props?.size ?? 2.5;
  const color = props?.color ?? Theme.colors.blue[500];

  switch (props?.type) {
    case "Envelope":
      return <LockClosedIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />;
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

const InputText: React.FC<InputTextProps> = (props): React.JSX.Element => {
  const [eyeStatusOpen, setEyeStatusOpen] = useState<boolean>(props.eyeStatus == "open");

  const handleEye = () => {
    setEyeStatusOpen((x) => !x);
  };

  return (
    <View className="flex flex-row items-center bg-white border border-gray-400 rounded-lg">
      {props.icon && (
        <View className="rounded-full" style={{ paddingLeft: wp(4) }}>
          {GetIcon(props.icon)}
        </View>
      )}
      <TextInput
        className="flex-1 text-base tracking-wider"
        placeholderTextColor={Theme.colors.gray[500]}
        style={{ fontSize: hp(1.7), paddingVertical: hp(1), paddingLeft: wp(props.icon?.type ? 2 : 11) }}
        secureTextEntry={eyeStatusOpen}
        {...props}
      />
      {props.eyeShow && (
        <TouchableOpacity activeOpacity={0.5} onPress={handleEye}>
          <View className="" style={{ paddingRight: wp(4) }}>
            {eyeStatusOpen ? GetIcon({ type: "Eye" }) : GetIcon({ type: "EyeSlash" })}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputText;
