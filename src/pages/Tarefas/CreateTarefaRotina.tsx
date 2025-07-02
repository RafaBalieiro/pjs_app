import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles/TarefasStyles";

export default function CreateTaskRotineScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute();
  const { category, name } = route.params as { category: string; name: string };

  const [type, setType] = useState<"Unica" | "Rotina">("Unica");
  const [date, setDate] = useState("");
  const [deadline, setDeadline] = useState("");
  const [frequency, setFrequency] = useState("");
  const [duration, setDuration] = useState("");

  const handleNext = () => {
    navigation.navigate("CreateTaskKnowledge", {
      category,
      name,
      type,
      date,
      deadline,
      frequency,
      duration,
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

      <Text style={styles.title}>3. Defina a rotina</Text>

      <View style={styles.typeSelector}>
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "Unica" && styles.typeButtonActiveOrange,
          ]}
          onPress={() => setType("Unica")}
        >
          <Text style={styles.typeButtonText}>Única</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "Rotina" && styles.typeButtonActiveGreen,
          ]}
          onPress={() => setType("Rotina")}
        >
          <Text style={styles.typeButtonText}>Rotina</Text>
        </TouchableOpacity>
      </View>

      {/* Campos se for Única */}
      {type === "Unica" && (
        <>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="calendar-today"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Digite a data da atividade"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="timer"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Defina o tempo de conclusão estimado"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={duration}
              onChangeText={setDuration}
            />
          </View>
        </>
      )}

      {/* Campos se for Rotina */}
      {type === "Rotina" && (
        <>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="calendar-today"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Digite a data de início"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="calendar-today"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Defina a data limite"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={deadline}
              onChangeText={setDeadline}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="repeat"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Defina a periodicidade"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={frequency}
              onChangeText={setFrequency}
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons
              name="timer"
              size={20}
              color="#fff"
              style={styles.icon}
            />
            <TextInput
              placeholder="Defina o tempo de conclusão estimado"
              placeholderTextColor="#aaa"
              style={styles.input}
              value={duration}
              onChangeText={setDuration}
            />
          </View>
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
}
