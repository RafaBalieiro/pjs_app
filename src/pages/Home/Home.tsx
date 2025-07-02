import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import styles from "./styles/HomeStyle";
import HomeButton from "./components/HomeButton";
import ProgressCard from "./components/ProgressCard";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";

export default function HomeScreen() {
  const auth = useAuth();

  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const handleLogout = () => {
    Alert.alert("Sair", "Tem certeza que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Sair",
        style: "destructive",
        onPress: () => {
          // Coloque aqui o logout real:
          auth.logout(); // Se estiver usando contexto de autenticação
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.fullContainer}>
      {/* Botão de sair no topo direito */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <MaterialIcons name="logout" size={28} color="#FFA500" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Header com Avatar e XP */}
        <View style={styles.header}>
          <Image
            source={require("../../assets/image.png")}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.username}>Rafael Barros</Text>
            <Text style={styles.level}>Nível 12</Text>
            <View style={styles.xpBarContainer}>
              <View style={styles.xpBar}>
                <View style={styles.xpFill} />
              </View>
              <Text style={styles.xpText}>XP 1400 / 2000</Text>
            </View>
          </View>
        </View>

        {/* Menu de ícones */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.menuIcons}
        >
          <HomeButton icon="trophy" color="#FFD700" /> {/* Dourado */}
          <HomeButton icon="medal" color="#00BFFF" /> {/* Azul Claro */}
          <HomeButton icon="book" color="#FF6347" /> {/* Vermelho */}
          <HomeButton icon="chart-bar" color="#32CD32" /> {/* Verde Limão */}
          <HomeButton icon="crown" color="#FF8C00" /> {/* Laranja */}
          <HomeButton icon="tasks" color="#BA55D3" /> {/* Roxo Médio */}
          <HomeButton icon="rocket" color="#00FFFF" />
        </ScrollView>

        {/* Minhas Atividades */}
        <View style={styles.activitiesHeader}>
          <Text style={styles.activitiesTitle}>Minhas Atividades</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateTaskCategory")}
          >
            <AntDesign name="pluscircleo" size={20} color="#ff7f50" />
          </TouchableOpacity>
        </View>

        <ProgressCard
          title="Estudo diário matemática"
          progress={0.75}
          xp="230px"
          icon="book"
        />
        <ProgressCard
          title="Academia"
          progress={0.75}
          xp="300px"
          icon="dumbbell"
        />
        <ProgressCard
          title="Curso técnico"
          progress={0.75}
          xp="600px"
          icon="briefcase"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
