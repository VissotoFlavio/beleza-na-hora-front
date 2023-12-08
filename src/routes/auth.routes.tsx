import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import LoginScreen from "../screens/LogIn";
import SignUpScreen from "../screens/SignUp";

const AuthStack = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    initialRouteName="LoginScreen"
    screenOptions={{
      headerShown: false,
    }}
  >
    {/* <AuthStack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
    <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
