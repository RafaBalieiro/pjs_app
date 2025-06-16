import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { login as loginApi } from "../services/Auth/authService";
import axios from "axios";

type AuthContextData = {
  signed: boolean;
  login: (email: string, senha: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("token").then((storedToken) => {
      if (storedToken) setToken(storedToken);
      setLoading(false);
    });
  }, []);

  const login = async (email: string, senha: string) => {
    try {
      const token = await loginApi(email, senha);
      await AsyncStorage.setItem("token", token);
      setToken(token);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const msg = err.response?.data || err.message;
        Alert.alert(
          "Erro ao logar",
          typeof msg === "string" ? msg : JSON.stringify(msg)
        );
      } else {
        const error = err as Error;
        Alert.alert("Erro inesperado", error.message);
      }
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ signed: !!token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
