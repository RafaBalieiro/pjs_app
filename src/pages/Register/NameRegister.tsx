import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform,Image,Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles/RegisterStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";


export default function NameRegister() {
  const [name, setName] = useState("");
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/game-icon.png")} style={styles.logo} />
      </View>

      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="person" size={20} color="#fff" style={styles.icon} />
        <TextInput
          placeholder="Digite seu nome"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterPassword")}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}