import React, { useEffect, useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { EnvelopeIcon, EyeIcon, EyeSlashIcon, LockClosedIcon } from "react-native-heroicons/outline";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Theme } from "../theme";

export type IconTypes = "Envelope" | "LockClosed" | "Eye" | "EyeSlash";
export type EyeStatusTypes = "open" | "close";

export type IconProps = {
  type?: IconTypes;
  size?: number;
  strokeWidth?: number;
  color?: string;
};
export interface InputTextProps extends TextInputProps {
  icon?: IconProps;
  eyeShow?: boolean;
  eyeStatus?: EyeStatusTypes;
}

const GetIcon: React.FC<IconProps> = (props): React.JSX.Element => {
  const strokeWidth = props?.strokeWidth ?? 2;
  const size = props?.size ?? 2.5;
  const color = props?.color ?? Theme.colors.blue[500];
  return (
    <>
      {props?.type == "Envelope" && <EnvelopeIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />}
      {props?.type == "LockClosed" && <LockClosedIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />}
      {props?.type == "Eye" && <EyeIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />}
      {props?.type == "EyeSlash" && <EyeSlashIcon size={hp(size)} strokeWidth={strokeWidth} color={color} />}
    </>
  );
};

const InputText: React.FC<InputTextProps> = (props): React.JSX.Element => {
  const [eyeOpen, setEyeOpen] = useState<boolean>(props.secureTextEntry ?? false);

  const handleEye = () => {
    setEyeOpen(!eyeOpen);
  };

  useEffect(() => {
    props.secureTextEntry = eyeOpen;
  }, [eyeOpen]);

  return (
    <View className="flex flex-row items-center bg-white border border-gray-400 rounded-full">
      {props.icon && (
        <View className="rounded-full" style={{ paddingLeft: wp(4) }}>
          {GetIcon(props.icon)}
        </View>
      )}
      <TextInput
        className="flex-1 text-base tracking-wider"
        placeholderTextColor={Theme.colors.gray[500]}
        style={{ fontSize: hp(1.7), paddingVertical: hp(1), paddingLeft: wp(props.icon?.type ? 2 : 6.9) }}
        secureTextEntry={eyeOpen}
        {...props}
      />
      {props.eyeShow && (
        <TouchableOpacity activeOpacity={0.5} onPress={handleEye}>
          <View className="" style={{ paddingRight: wp(4) }}>
            {eyeOpen ? GetIcon({ type: "Eye" }) : GetIcon({ type: "EyeSlash" })}
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputText;
