import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "../styles/HomeStyle";

type Props = {
  icon: string;
  color?: string; // Cor personalizada
  onPress?: () => void;
};

export default function HomeButton({ icon, color = "#fff", onPress }: Props) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <FontAwesome5 name={icon} size={28} color={color} />
    </TouchableOpacity>
  );
}