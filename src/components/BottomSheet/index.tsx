import { LinearGradient } from 'expo-linear-gradient';
import { GripHorizontal, X } from 'lucide-react-native';
import React, { FC, ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureUpdateEvent,
  PanGestureChangeEventPayload,
  PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { StyleColor, StyleFont } from '../../theme';
import { hexToRgbA } from '../../utils/hexaToRbga';
import { SHEET_HEIGHT, SHEET_OVER_DRAG, BottomSheetStyle as style } from './style';
export interface BottomSheet {
  children: ReactNode;
  onClose: () => void;
}

export const BottomSheet: FC<BottomSheet> = (props): JSX.Element => {
  const offset = useSharedValue(0);
  const colorsBg = [hexToRgbA(StyleColor.black, 0.8), hexToRgbA(StyleColor.black, 0.3)];

  const close = () => {
    offset.value = 0;
    props.onClose();
  };

  const gesturePanEvent = Gesture.Pan()
    .onChange(
      (event: GestureUpdateEvent<PanGestureHandlerEventPayload & PanGestureChangeEventPayload>) => {
        const offsetDelta = event.changeY + offset.value;

        const clamp = Math.max(-SHEET_OVER_DRAG, offsetDelta);

        offset.value = offsetDelta > 0 ? offsetDelta : withSpring(clamp);
      },
    )
    .onFinalize(() => {
      if (offset.value < SHEET_HEIGHT / 3) {
        offset.value = withTiming(0);
      } else {
        // offset.value = withSpring(SHEET_HEIGHT, {}, () => {});
        offset.value = SHEET_HEIGHT;

        // Assim que a animação de close finalizar, executa a função runOnJS
        // para executar a função dentro da thread Javascript e não na thread de UI
        runOnJS(close)();
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureDetector gesture={gesturePanEvent}>
      <Animated.View style={[style.bg]} entering={FadeIn} exiting={FadeOut}>
        <LinearGradient colors={colorsBg} style={{ flex: 1 }}>
          <Animated.View
            style={[style.container, translateY]}
            entering={SlideInDown.damping(100)}
            exiting={SlideOutDown}>
            <View style={style.header}>
              <GripHorizontal
                style={style.dragIcon}
                size={StyleFont.size.xl}
                color={StyleFont.color.default}
              />
              <View style={style.containerClose}>
                <TouchableOpacity activeOpacity={0.7} onPress={close}>
                  <X size={StyleFont.size.xl} color={StyleFont.color.default} />
                </TouchableOpacity>
              </View>
            </View>
            {props.children}
          </Animated.View>
        </LinearGradient>
      </Animated.View>
    </GestureDetector>
  );
};
