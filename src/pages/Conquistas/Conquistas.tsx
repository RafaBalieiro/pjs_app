import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/ConquistaStyle";

const achievementsList = [
  {
    icon: "emoji-events",
    title: "Tudo tem o seu começo",
    description: "Crie a sua primeira tarefa",
  },
  {
    icon: "school",
    title: "Aprendiz Curioso",
    description: "Conclua a sua primeira tarefa",
  },
  {
    icon: "whatshot",
    title: "Formado na Garra",
    description: "Complete uma tarefa de estudo por 7 dias seguidos",
  },
  {
    icon: "explore",
    title: "Explorador de Temas",
    description: "Criar tarefas em todos os temas disponíveis",
  },
  {
    icon: "event",
    title: "Agenda Cheia",
    description: "Criou 5 tarefas com prazos diferentes",
  },
];

export default function AchievementsScreen() {
  const navigation = useNavigation();
  const total = 40;
  const completed = 5;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>Conquistas</Text>
      <Text style={styles.progressText}>{completed} de {total} conquistas concluídas</Text>

      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        {achievementsList.map((item, index) => (
          <View key={index} style={styles.achievementCard}>
            <MaterialIcons name={item.icon} size={40} color="#FFD700" style={{ marginRight: 15 }} />
            <View style={{ flex: 1 }}>
              <Text style={styles.achievementTitle}>{item.title}</Text>
              <Text style={styles.achievementDesc}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
