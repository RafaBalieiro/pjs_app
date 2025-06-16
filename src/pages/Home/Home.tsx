import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';
import HomeButton from "./components/HomeButton";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎯 Bem-vindo ao App!</Text>
      <Text style={styles.subtitle}>Escolha uma ação para começar:</Text>

      <View style={styles.buttonGrid}>
        <HomeButton icon="document-text-outline" label="Criar Tarefa" />
        <HomeButton icon="calendar-outline" label="Agenda" />
        <HomeButton icon="person-outline" label="Perfil" />
        <HomeButton icon="settings-outline" label="Configurações" />
      </View>
    </ScrollView>
  );
}