import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../context/AuthContext";
import Register from "../pages/Register/Register";
import VerificationCode from "../pages/Register/VerificationCode";
import NameRegister from "../pages/Register/NameRegister";
import PasswordRegister from "../pages/Register/PasswordRegister";
import CreateTaskCategoryScreen from "../pages/Tarefas/CreateTarefas";
import CreateTaskNameScreen from "../pages/Tarefas/CreateTarefaName";
import CreateTaskRotineScreen from "../pages/Tarefas/CreateTarefaRotina";
import CreateTaskKnowledgeScreen from "../pages/Tarefas/CreateTarefaNivelConhecimento";
import CreateTaskDifficultyScreen from "../pages/Tarefas/CreateTarefaNivelDificuldade";
import CreateTaskConfirmScreen from "../pages/Tarefas/CreateTarefaConfirmacao";

export type AppStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  RegisterCode: undefined;
  RegisterName: undefined;
  RegisterPassword: undefined;
  CreateTaskCategory: undefined;
  CreateTaskDetails: { category: string };
  CreateTaskRotine: { category: string; name: string };
  CreateTaskKnowledge: {
    category: string;
    name: string;
    type: "Unica" | "Rotina";
    date: string;
    deadline: string;
    frequency: string;
    duration: string;
  };
  CreateTaskDifficulty: {
    category: string;
    name: string;
    type: "Unica" | "Rotina";
    date: string;
    deadline: string;
    frequency: string;
    duration: string;
    knowledge: string;
  };
  CreateTaskConfirm: {
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
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#4f46e5" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {signed ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="CreateTaskCategory"
              component={CreateTaskCategoryScreen}
            />
            <Stack.Screen
              name="CreateTaskDetails"
              component={CreateTaskNameScreen}
            />
            <Stack.Screen
              name="CreateTaskRotine"
              component={CreateTaskRotineScreen}
            />
            <Stack.Screen
              name="CreateTaskKnowledge"
              component={CreateTaskKnowledgeScreen}
            />
            <Stack.Screen
              name="CreateTaskDifficulty"
              component={CreateTaskDifficultyScreen}
            />
            <Stack.Screen
              name="CreateTaskConfirm"
              component={CreateTaskConfirmScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="RegisterCode" component={VerificationCode} />
            <Stack.Screen name="RegisterName" component={NameRegister} />
            <Stack.Screen
              name="RegisterPassword"
              component={PasswordRegister}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
