import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles/TarefasStyles";

export default function CreateTaskDifficultyScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute();
  const {
    category,
    name,
    type,
    date,
    deadline,
    frequency,
    duration,
    knowledge,
  } = route.params as {
    category: string;
    name: string;
    type: "Unica" | "Rotina";
    date: string;
    deadline: string;
    frequency: string;
    duration: string;
    knowledge: string;
  };

  const [difficulty, setDifficulty] = useState(0);

  const handleNext = () => {
    if (difficulty === 0) return;

    navigation.navigate("CreateTaskConfirm", {
      category,
      name,
      type,
      date,
      deadline,
      frequency,
      duration,
      knowledge,
      difficulty,
    });
  };

  const getDifficultyLabel = () => {
    if (difficulty <= 1) return "Muito Fácil";
    if (difficulty === 2) return "Fácil";
    if (difficulty === 3) return "Média";
    if (difficulty === 4) return "Difícil";
    return "Muito Difícil";
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>5. Defina o grau de dificuldade esperado</Text>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((level) => (
          <TouchableOpacity key={level} onPress={() => setDifficulty(level)}>
            <MaterialIcons
              name="star"
              size={40}
              color={difficulty >= level ? "#FFD700" : "#000"}
              style={{ marginHorizontal: 5 }}
            />
          </TouchableOpacity>
        ))}
      </View>

      {difficulty > 0 && (
        <Text style={{ color: "#fff", marginBottom: 20 }}>
          Dificuldade: {getDifficultyLabel()}
        </Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
