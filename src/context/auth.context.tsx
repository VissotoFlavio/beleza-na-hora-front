import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { STORAGE_CONST } from "../constants/storage.constants";
import * as authService from "./../services/auth.services";

export interface AuthContextData {
  signed: boolean;
  //token: string;
  user: object | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props): React.JSX.Element => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      const storage = await AsyncStorage.multiGet([STORAGE_CONST.userData, STORAGE_CONST.userToken]);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      // storage[0][1] = userData
      // storage[1][1] = userToken
      if (storage[0][1] && storage[1][1]) {
        console.log("UserData", JSON.parse(storage[0][1]));
        setUser(JSON.parse(storage[0][1]));
      }
      setLoading(false);
    };

    loadStorageData();
  }, []);

  const signIn = async () => {
    const response = await authService.signIn();
    console.log(response);
    setUser(response.user);
    await AsyncStorage.setItem(STORAGE_CONST.userData, JSON.stringify(response.user));
    await AsyncStorage.setItem(STORAGE_CONST.userToken, response.token);
  };

  const signOut = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await AsyncStorage.multiRemove([STORAGE_CONST.userData, STORAGE_CONST.userToken]);
    setUser(null);
    setLoading(false);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  return context;
};
