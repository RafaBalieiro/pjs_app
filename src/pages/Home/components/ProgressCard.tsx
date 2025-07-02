import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../styles/HomeStyle";

interface Props {
  title: string;
  progress: number;
  xp: string;
  icon: string;
}

export default function ProgressCard({ title, progress, xp, icon }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <FontAwesome5 name={icon} size={24} color="#fff" />
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardXP}>{xp}</Text>
      </View>

      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>

      <Text style={styles.progressText}>{Math.round(progress * 100)}%</Text>
    </View>
  );
}
