import React, { ComponentType, FC, useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { NavigationState, SceneMap, SceneRendererProps, TabView } from 'react-native-tab-view';
import { ViewRow } from '../ViewRow';
import { TabBarViewStyle } from './style';

export interface TabBarViewRoute {
  key: string;
  title: string;
  icon?: string;
}

type State = NavigationState<TabBarViewRoute>;

export interface RenderItemProps {
  navigationState: State;
  index: number;
  route: TabBarViewRoute;
}

export interface TabBarViewProps {
  routes: TabBarViewRoute[];
  views: { [key: string]: ComponentType };
}

export const TabBarView: FC<TabBarViewProps> = (props) => {
  const [indexActivated, setIndexActivated] = useState(0);

  const renderItem = (props: RenderItemProps): JSX.Element => {
    const activeText =
      props.index === props.navigationState.index ? TabBarViewStyle.activeText : null;

    return (
      <View style={[TabBarViewStyle.tab]}>
        <Animated.View style={[TabBarViewStyle.item]}>
          <Text style={[TabBarViewStyle.label, activeText]}>{props.route.title}</Text>
        </Animated.View>
      </View>
    );
  };

  const renderTabBar = (props: SceneRendererProps & { navigationState: State }) => {
    return (
      <ViewRow style={TabBarViewStyle.tabbar}>
        {props.navigationState.routes.map((route: TabBarViewRoute, index: number) => {
          return (
            <TouchableWithoutFeedback key={route.key} onPress={() => props.jumpTo(route.key)}>
              {renderItem({
                route,
                navigationState: props.navigationState,
                index,
              })}
            </TouchableWithoutFeedback>
          );
        })}
      </ViewRow>
    );
  };

  const renderScene = SceneMap(props.views);

  return (
    <TabView
      navigationState={{
        index: indexActivated,
        routes: props.routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      tabBarPosition="top"
      onIndexChange={setIndexActivated}
    />
  );
};
