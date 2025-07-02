import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/PerfilStyles";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.refreshButton}>
        <MaterialIcons name="refresh" size={28} color="#FFA500" />
      </TouchableOpacity>

      <Image source={require("../../assets/image.png")} style={styles.avatar} />

      <Text style={styles.name}>Rafael Barros</Text>
      <Text style={styles.level}>Nível 12</Text>

      <View style={styles.xpBarContainer}>
        <View style={styles.xpBar}>
          <View style={[styles.xpFill, { width: "70%" }]} />
        </View>
        <Text style={styles.xpText}>XP 1400 / 2000</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoText}>Email: testeemail@gmail.com</Text>
        <Text style={styles.infoText}>Data Aniversário: 15/04/2025</Text>
        <Text style={styles.infoText}>Idade: 20</Text>

        <TouchableOpacity style={styles.editButton}>
          <MaterialIcons name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.orangeCard}>
          <Text style={styles.cardText}>Tarefas criadas: 30</Text>
          <Text style={styles.cardText}>Tarefas concluídas: 15</Text>
          <Text style={styles.cardText}>Tarefas em andamento: 8</Text>
          <Text style={styles.cardText}>Tarefas canceladas: 7</Text>
        </View>

        <View style={styles.redCard}>
          <Text style={styles.cardText}>Aproveitamento</Text>
          <MaterialIcons
            name="mood-bad"
            size={40}
            color="#fff"
            style={{ marginVertical: 5 }}
          />
          <Text style={styles.cardText}>50%</Text>
        </View>
      </View>
    </View>
  );
}
