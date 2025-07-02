import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../../context/AuthContext";
import styles from "../styles/loginStyle";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../../routes";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  
  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Atenção", "Preencha todos os campos");
      return;
    }
    login(email, senha);
  };

  const handleCadastro = () => {
    Alert.alert(
      "Cadastro",
      "Funcionalidade de cadastro ainda não implementada"
    );
  };

  const handleGoogleLogin = () => {
    Alert.alert("Google Login", "Funcionalidade de login com o Google");
    // Aqui você pode integrar o Expo AuthSession ou biblioteca de sua escolha
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>
        <MaterialIcons
          name="email"
          size={20}
          color="#fff"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleGoogleLogin} style={styles.googleButton}>
        <AntDesign name="google" size={20} color="#fff" />
        <Text style={styles.googleButtonText}>Entrar com o Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.register} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>
          Não tem uma conta?{" "}
          <Text style={styles.registerLink}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
