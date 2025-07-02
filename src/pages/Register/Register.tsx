import {
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles/RegisterStyle";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";

export default function CadastroScreen() {
  const [email, setEmail] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  
  const handleAvancar = () => {
    if (!email) {
      Alert.alert("Atenção", "Informe seu email");
      return;
    }
    Alert.alert("Avançar", `Email informado: ${email}`);
    // Aqui segue para o próximo passo do cadastro
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
        <MaterialIcons
          name="email"
          size={20}
          color="#fff"
          style={styles.icon}
        />
        <TextInput
          placeholder="Digite seu email"
          placeholderTextColor="#aaa"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RegisterCode")}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
