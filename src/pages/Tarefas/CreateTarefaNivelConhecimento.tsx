import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles/TarefasStyles";

export default function CreateTaskKnowledgeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute();
  const { category, name, type, date, deadline, frequency, duration } =
    route.params as {
      category: string;
      name: string;
      type: "Unica" | "Rotina";
      date: string;
      deadline: string;
      frequency: string;
      duration: string;
    };

  const [knowledge, setKnowledge] = useState("");

  const handleNext = () => {
    if (!knowledge) return;
    navigation.navigate("CreateTaskDifficulty", {
      category,
      name,
      type,
      date,
      deadline,
      frequency,
      duration,
      knowledge,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>4. Defina o seu grau de conhecimento</Text>

      <TouchableOpacity
        style={[
          styles.optionButton,
          knowledge === "iniciante" && styles.optionButtonActive,
        ]}
        onPress={() => setKnowledge("iniciante")}
      >
        <Text style={styles.optionButtonText}>Sou iniciante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          knowledge === "intermediario" && styles.optionButtonActive,
        ]}
        onPress={() => setKnowledge("intermediario")}
      >
        <Text style={styles.optionButtonText}>Sou intermediário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          knowledge === "avancado" && styles.optionButtonActive,
        ]}
        onPress={() => setKnowledge("avancado")}
      >
        <Text style={styles.optionButtonText}>Sou avançado</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          knowledge === "especialista" && styles.optionButtonActive,
        ]}
        onPress={() => setKnowledge("especialista")}
      >
        <Text style={styles.optionButtonText}>Sou especialista</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
