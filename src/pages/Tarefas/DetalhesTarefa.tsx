import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../routes";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import styles from "./styles/TarefasDetalhesStyles";

export default function TaskDetailsScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const route = useRoute();

  const { task } = route.params as { task: any };

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [progress, setProgress] = useState<number[]>([]); // Dias concluídos
  const [xpTotal, setXpTotal] = useState(0);

  const xpPorDia = 100;

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const getDiasNoMes = (mes: number, ano: number) => {
    return new Date(ano, mes + 1, 0).getDate();
  };

  const diasNoMes = getDiasNoMes(currentMonth, currentYear);

  // Retorna dias que caem em Segunda (1), Quarta (3) ou Sexta (5)
  const diasComTarefa = () => {
    const lista: number[] = [];
    for (let i = 1; i <= diasNoMes; i++) {
      const data = new Date(currentYear, currentMonth, i);
      const diaSemana = data.getDay(); // 0-domingo, 1-segunda, ..., 6-sábado
      if (diaSemana === 1 || diaSemana === 3 || diaSemana === 5) {
        lista.push(i);
      }
    }
    return lista;
  };

  const diasPlanejados = diasComTarefa();
  const diaAtual = diasPlanejados.find((dia) => !progress.includes(dia));

  const proximoMes = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const mesAnterior = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const concluirDia = () => {
    if (!diaAtual) return;
    setProgress((prev) => [...prev, diaAtual]);
    setXpTotal((prev) => prev + xpPorDia);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title}>{task.name}</Text>
      <Text style={styles.description}>
        {task.description ?? "Sem descrição"}
      </Text>

      <View style={styles.monthNav}>
        <TouchableOpacity onPress={mesAnterior}>
          <MaterialIcons name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {meses[currentMonth]} {currentYear}
        </Text>
        <TouchableOpacity onPress={proximoMes}>
          <MaterialIcons name="chevron-right" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.calendarGrid}>
        {[...Array(diasNoMes)].map((_, index) => {
          const dia = index + 1;
          const dataAtual = new Date();
          const dataDia = new Date(currentYear, currentMonth, dia);
          const temTarefa = diasPlanejados.includes(dia);
          const concluido = progress.includes(dia);
          const hoje = new Date();
          hoje.setHours(0, 0, 0, 0); // Zera horas para comparar apenas datas

          const diaPassado = dataDia < hoje;
          const atrasado = temTarefa && diaPassado && !concluido;

          return (
            <View
              key={index}
              style={[
                styles.calendarDay,
                !temTarefa && styles.calendarDayInactive,
                temTarefa && styles.calendarDayPlanned,
                concluido && styles.calendarDayCompleted,
                atrasado && styles.calendarDayLate,
                dia === diaAtual && temTarefa && styles.calendarDayCurrent,
              ]}
            >
              <Text style={styles.calendarDayText}>{dia}</Text>
            </View>
          );
        })}
      </View>

      <Text style={styles.xpText}>XP Acumulado: {xpTotal}</Text>

      {diaAtual ? (
        <TouchableOpacity style={styles.button} onPress={concluirDia}>
          <Text style={styles.buttonText}>Concluir Dia {diaAtual}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Tarefa Finalizada</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
