import { useNavigation } from "@react-navigation/native";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles/RegisterStyle";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";

export default function VerificationCode() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

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
      <Text style={styles.subTitle}>Código de verificação</Text>

      <View style={styles.codeContainer}>
        {[...Array(4)].map((_, i) => (
          <TextInput
            key={i}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
          />
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RegisterName")}
      >
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
