import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, Image } from "react-native";
import styles from "./styles/loginStyle";
import LoginForm from "./components/LoginForm";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/game-icon.png")} // Ajuste o caminho para sua imagem real
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Entrar</Text>

      <LoginForm />
    </KeyboardAvoidingView>
  );
}
