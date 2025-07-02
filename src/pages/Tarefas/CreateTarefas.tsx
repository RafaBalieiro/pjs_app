import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles/TarefasStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";

export default function CreateTaskCategoryScreen() {
  const navigation =
     useNavigation<NativeStackNavigationProp<AppStackParamList>>();
 
   const handleSelectCategory = (category: string) => {
     navigation.navigate("CreateTaskDetails", { category });
   };
   
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>1. Defina a categoria da tarefa</Text>

      <Text style={styles.categoryLabel}>Estudos</Text>
      <TouchableOpacity style={styles.imageCard} onPress={() => handleSelectCategory("Estudos")}>
        <Image source={require("../../assets/estudos-bg.png")} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.categoryLabel}>Saúde</Text>
      <TouchableOpacity style={styles.imageCard} onPress={() => handleSelectCategory("Saúde")}>
        <Image source={require("../../assets/treino-bg.png")} style={styles.image} />
      </TouchableOpacity>

      <Text style={styles.categoryLabel}>Trabalho / Atividades técnicas</Text>
      <TouchableOpacity style={styles.imageCard} onPress={() => handleSelectCategory("Trabalho")}>
        <Image source={require("../../assets/trabalho-bg.png")} style={styles.image} />
      </TouchableOpacity>
    </ScrollView>
  );
}
