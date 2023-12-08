import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/LogIn";
import SignUpScreen from "../screens/SignUp";
import WelcomeScreen from "../screens/Welcome";

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
};

export interface ScreenProps<T extends keyof RootStackParamList> {
  navigation: NativeStackNavigationProp<RootStackParamList, T>;
  route: RouteProp<RootStackParamList, T>;
}

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
