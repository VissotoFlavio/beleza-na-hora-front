import React from 'react';
import { DimensionValue, NativeScrollEvent, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { CarouselIndicator } from './CarouselIndicator';
import { CarouselItem } from './CarouselItem';
import { CarouselStyle, slideWidth } from './style';

export interface CarouselProps<T> {
  data: T[];
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  renderItem: (item: T) => React.ReactElement;
}

export const Carousel = <T,>({ data, renderItem }: CarouselProps<T>): JSX.Element => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event: NativeScrollEvent) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  return (
    <View style={[CarouselStyle.container]}>
      <Animated.ScrollView
        scrollEventThrottle={1}
        horizontal
        snapToInterval={slideWidth}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[CarouselStyle.slide]}
        contentContainerStyle={CarouselStyle.slideContainer}
        onScroll={scrollHandler}>
        {data.map((x: T, index: number) => {
          return (
            <CarouselItem key={index} index={index} scrollOffset={scrollOffset}>
              {renderItem(x)}
            </CarouselItem>
          );
        })}
      </Animated.ScrollView>
      <View style={CarouselStyle.slideIndicator}>
        {data.map((x: T, index: number) => {
          return <CarouselIndicator key={index} index={index} scrollOffset={scrollOffset} />;
        })}
      </View>
    </View>
  );
};
