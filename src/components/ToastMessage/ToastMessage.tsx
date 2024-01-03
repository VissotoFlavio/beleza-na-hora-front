import React, { Ref, forwardRef, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { ToastMessageStyle } from './toast.style';

export type ToastType = 'success' | 'danger' | 'info' | 'warning';

export type ToastHandle = {
  show: () => void;
};

export interface ToastMessageProps {
  type: ToastType;
  title: string;
  description: string;
  timeoutInMilisseconds?: number;
}

const ToastMessage = (props: ToastMessageProps, ref: Ref<ToastHandle>): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const timeOut = props.timeoutInMilisseconds ?? 5000;

  const showToast = () => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      clearTimeout(timer);
    }, timeOut);
  };

  useImperativeHandle(ref, () => ({
    show: showToast,
  }));

  return (
    <>
      {isVisible && (
        <Animated.View
          style={[ToastMessageStyle.container, ToastMessageStyle[props.type]]}
          entering={FadeInUp.delay(200)}
          exiting={FadeOutUp}>
          <View style={[ToastMessageStyle.content]}>
            <Text style={[ToastMessageStyle.title]}>{props.title}</Text>
            <Text style={[ToastMessageStyle.description]}>{props.description}</Text>
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default forwardRef(ToastMessage);
