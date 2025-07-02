import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styles from "./styles/RegisterStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";

export default function PasswordRegister() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleFinalizar = () => {
    Alert.alert("Cadastro concluído!", "Sua conta foi criada com sucesso.", [
      {
        text: "OK",
        onPress: () => navigation.navigate("Login"),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/game-icon.png")}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput
          placeholder="Confirme sua senha"
          placeholderTextColor="#aaa"
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleFinalizar}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
