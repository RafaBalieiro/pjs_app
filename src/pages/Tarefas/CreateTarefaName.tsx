import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/TarefasStyles";

export default function CreateTaskNameScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute();
  const { category } = route.params as { category: string };

  const [taskName, setTaskName] = useState<string>("");

  const handleNext = () => {
    if (!taskName) return;

    navigation.navigate("CreateTaskRotine", { category, name: taskName});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>2. Defina o nome da tarefa</Text>

      <View style={styles.inputContainer}>
        <MaterialIcons name="label" size={20} color="#fff" style={styles.icon} />
        <TextInput
          placeholder="Digite o nome da atividade"
          placeholderTextColor="#aaa"
          style={styles.input}
          value={taskName}
          onChangeText={setTaskName}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
