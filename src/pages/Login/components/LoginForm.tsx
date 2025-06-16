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
import { useAuth } from "../../../context/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

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

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity onPress={handleCadastro} style={styles.cadastroBtn}>
        <Text style={styles.cadastroText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cadastroBtn: {
    marginTop: 16,
    alignItems: "center",
  },
  cadastroText: {
    color: "#4f46e5",
    fontWeight: "600",
  },
});
