import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import React from 'react';

import { RouteProp, useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../screens/Home';
import { ProfessionalDetailsScreen } from '../screens/ProfessionalDetails';

export type AppStackScreenParamList = {
  HomeScreen: undefined;
  ProfessionalDetailsScreen: { idProfessional: string };
};

const AppStack = createNativeStackNavigator<AppStackScreenParamList>();

export const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name="HomeScreen" component={HomeScreen} />
    <AppStack.Screen name="ProfessionalDetailsScreen" component={ProfessionalDetailsScreen} />
  </AppStack.Navigator>
);

export interface AppRouterProps<T extends keyof AppStackScreenParamList> {
  navigation: NativeStackNavigationProp<AppStackScreenParamList, T>;
  route: RouteProp<AppStackScreenParamList, T>;
}

export const useAppNavigation = () => {
  return useNavigation<NativeStackNavigationProp<AppStackScreenParamList>>();
};
