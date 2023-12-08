import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import HomeScreen from "../screens/Home";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    <AppStack.Screen name="HomeScreen" component={HomeScreen} />
  </AppStack.Navigator>
);

export default AppRoutes;
