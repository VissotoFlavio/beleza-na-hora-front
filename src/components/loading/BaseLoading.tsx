import React, { ReactNode, useEffect, useState } from 'react';
import { Animated, Easing, View } from 'react-native';

export interface BaseLoadingProps {
  animationEasing: (value: number) => number,
  animationDuration: number,
  hideAnimationDuration: number,

  animating: boolean,
  interaction: boolean,
  hidesWhenStopped: boolean,

  renderComponent: (values: { index: number, count: number, progress: Animated.Value }) => ReactNode | null,
  count: number,
}

export interface LoadingState {
  progress: Animated.Value;
  hideAnimation: Animated.Value;
}

export enum AnimationState {
  Stopped = -1,
  Save = 0,
  Running = 1,
}

const BaseLoading: React.FC<BaseLoadingProps> = (props): React.JSX.Element => {

  props.animationEasing = Easing.linear;
  props.animationDuration = 1200;
  props.hideAnimationDuration = 200;
  props.animating = true;
  props.interaction = true;
  props.hidesWhenStopped = true;
  props.count = 1;


  const [animationState, setAnimationState] = useState<AnimationState>(AnimationState.Save);
  const [savedValue, setSavedValue] = useState(0);

  useEffect(() => {
    if (props.animating) {
      startAnimation();
    }
  }, []);

  const state: LoadingState = {
    progress: new Animated.Value(0),
    hideAnimation: new Animated.Value(props.animating ? 1 : 0),
  }

  const startAnimation = () => {
    if (AnimationState.Save !== animationState) {
      return;
    }

    const animation = Animated.timing(state.progress, {
      duration: props.animationDuration,
      easing: props.animationEasing,
      useNativeDriver: true,
      isInteraction: props.interaction,
      toValue: 1
    });

    Animated.loop(animation).start();
    setAnimationState(AnimationState.Running);
  }

  const stopAnimation = () => {
    if (AnimationState.Running !== animationState) {
      return;
    }

    const listener = state.progress.addListener((callback) => {
      state.progress.removeListener(listener);
      state.progress.stopAnimation(() => saveAnimation(callback.value));
    });

    setAnimationState(AnimationState.Stopped);
  }

  const saveAnimation = (value: number) => {
    setSavedValue(value);
    setAnimationState(AnimationState.Save);

    if (props.animating) {
      resumeAnimation();
    }
  }

  const resumeAnimation = () => {
    if (AnimationState.Save !== animationState) {
      return;
    }

    Animated.timing(state.progress, {
      useNativeDriver: true,
      isInteraction: props.interaction,
      duration: (1 - savedValue) * props.animationDuration,
      toValue: 1
    }).start((callback: Animated.EndResult) => {
      if (callback.finished) {
        state.progress.setValue(0);
        setAnimationState(AnimationState.Save);
        startAnimation();
      }
    });

    setSavedValue(0);
    setAnimationState(AnimationState.Running);
  }

  const renderComponent = (item: number, index: number): ReactNode | null => {
    if ('function' === typeof renderComponent) {
      return props.renderComponent({
        count: props.count,
        index: item,
        progress: state.progress
      });
    }
    return null;
  }

  return (
    <View {...props}>
      {Array.from(new Array(props.count)).map((x) => {
        return renderComponent(x, x);
      })}
    </View>
  )
}

export default BaseLoading