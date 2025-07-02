import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/TarefasStyles";

export default function CreateTaskConfirmScreen() {
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
    difficulty,
  } = route.params as {
    category: string;
    name: string;
    type: "Unica" | "Rotina";
    date: string;
    deadline: string;
    frequency: string;
    duration: string;
    knowledge: string;
    difficulty: number;
  };

  const calcularXpTotal = () => {
    const baseXp = 1000;
    const fatorDificuldade = difficulty * 1.5;
    const fatorConhecimento =
      knowledge === "iniciante"
        ? 1.2
        : knowledge === "intermediario"
        ? 1
        : knowledge === "avancado"
        ? 0.8
        : 0.6;
    return Math.floor(baseXp * fatorDificuldade * fatorConhecimento * 10);
  };

  const xpTotal = calcularXpTotal();

  const dificuldadeFinal = () => {
    if (difficulty <= 1) return "Muito Fácil";
    if (difficulty === 2) return "Fácil";
    if (difficulty === 3) return "Média";
    if (difficulty === 4) return "Difícil";
    return "Muito Difícil";
  };

  const handleConfirm = () => {
    console.log({
      category,
      name,
      type,
      date,
      deadline,
      frequency,
      duration,
      knowledge,
      difficulty,
      xpTotal,
    });
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>6. Confirmar Tarefa</Text>

      <Text style={styles.taskTitle}>Título: {name}</Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Tipo: {type}</Text>
        <Text style={styles.infoText}>Data Início: {date}</Text>
        {type === "Rotina" && (
          <>
            <Text style={styles.infoText}>Data Fim: {deadline}</Text>
            <Text style={styles.infoText}>Periodicidade: {frequency}</Text>
          </>
        )}
        <Text style={styles.infoText}>Duração: {duration}</Text>
      </View>

      <Text style={styles.summaryText}>Grau de conhecimento: {knowledge}</Text>
      <Text style={styles.summaryText}>
        Dificuldade estimada: {dificuldadeFinal()}
      </Text>

      <View style={{ flexDirection: "row", marginBottom: 20 }}>
        {[1, 2, 3, 4, 5].map((level) => (
          <MaterialIcons
            key={level}
            name="star"
            size={30}
            color={difficulty >= level ? "#FFD700" : "#000"}
            style={{ marginHorizontal: 4 }}
          />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Dificuldade Calculada</Text>

      <View style={styles.resultCard}>
        <Text style={styles.resultText}>{dificuldadeFinal()}</Text>
        <Text style={styles.resultText}>XP TOTAL : {xpTotal}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
