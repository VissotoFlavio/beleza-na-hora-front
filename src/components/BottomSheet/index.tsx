import { GripHorizontal } from 'lucide-react-native';
import React, { FC, ReactNode } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
    Gesture,
    GestureDetector,
    GestureUpdateEvent,
    PanGestureChangeEventPayload,
    PanGestureHandlerEventPayload,
} from 'react-native-gesture-handler';
import Animated, {
    SlideInDown,
    SlideOutDown,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { StyleColor, StyleFont } from '../../theme';
import { StyleBorder } from '../../theme/border.style';
import { StyleSpacing } from '../../theme/spacing.style';

export interface BottomSheet {
  children: ReactNode;
  onClose: () => void;
}

export const BottomSheet: FC<BottomSheet> = (props): JSX.Element => {
  const offset = useSharedValue(0);

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
        offset.value = withSpring(0);
      } else {
        offset.value = withSpring(SHEET_HEIGHT, {}, () => {
          // Assim que a animação de close finalizar, executa a função runOnJS
          // para executar a função dentro da thread Javascript e não na thread de UI
          runOnJS(close)();
        });
      }
    });

  const translateY = useAnimatedStyle(() => ({
    transform: [{ translateY: offset.value }],
  }));

  return (
    <GestureDetector gesture={gesturePanEvent}>
      <Animated.View
        style={[styles.container, translateY]}
        entering={SlideInDown.springify().damping(100)}
        exiting={SlideOutDown}>
        <GripHorizontal
          style={styles.dragIcon}
          size={StyleFont.size.xl}
          color={StyleFont.color.default}
        />
        {props.children}
      </Animated.View>
    </GestureDetector>
  );
};

const DIMENSIONS = Dimensions.get('window');
const SHEET_HEIGHT = (DIMENSIONS.height / 5) * 4;
const SHEET_OVER_DRAG = 20;

export const styles = StyleSheet.create({
  container: {
    ...StyleBorder.shadow,
    height: SHEET_HEIGHT,
    width: DIMENSIONS.width,
    backgroundColor: StyleColor.gray[50],
    position: 'absolute',
    bottom: -SHEET_OVER_DRAG * 1.2,
    zIndex: 9999,
    borderTopRightRadius: StyleBorder.radius.lg,
    borderTopLeftRadius: StyleBorder.radius.lg,
  },
  title: {
    color: StyleColor.white,
    fontSize: StyleFont.size.lg,
    fontWeight: 'bold',
    marginHorizontal: StyleSpacing.horizontal.lg,
    marginVertical: StyleSpacing.vertical.md,
  },
  dragIcon: {
    alignSelf: 'center',
  },
});
