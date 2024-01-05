import React, { ReactNode, useState } from 'react';
import { LayoutChangeEvent, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export interface ExpandableViewProps {
  expanded: boolean;
  children: ReactNode;
}

export const ViewExpandable = (props: ExpandableViewProps): JSX.Element => {
  const { expanded } = props;
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsableStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height) : withTiming(0);

    return {
      height: animatedHeight.value,
    };
  }, [expanded]);

  return (
    <Animated.View style={[collapsableStyle, { overflow: 'hidden' }]}>
      <View style={{ position: 'absolute' }} onLayout={onLayout}>
        {props.children}
      </View>
    </Animated.View>
  );
};
