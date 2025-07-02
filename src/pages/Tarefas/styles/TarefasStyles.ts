import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#3A0D0D",
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 30,
  },

  /** Estilo para labels gerais, como "Estudos", "Saúde", etc */
  categoryLabel: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  /** Card de imagem clicável */
  imageCard: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /** Container para campos de input com ícone */
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginBottom: 30,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
  },

  /** Botão principal do fluxo */
  button: {
    backgroundColor: "#7A5FFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  typeSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
  },
  typeButton: {
    flex: 1,
    backgroundColor: "#4A0D0D",
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 25,
    alignItems: "center",
  },
  typeButtonActiveGreen: {
    backgroundColor: "#32CD32",
  },
  typeButtonActiveOrange: {
    backgroundColor: "#FFA500",
  },
  typeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  optionButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    width: "100%",
    alignItems: "center",
  },
  optionButtonActive: {
    backgroundColor: "#32CD32",
  },
  optionButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  taskTitle: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "bold",
  },
  infoCard: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 16,
    width: "100%",
    marginBottom: 20,
  },
  infoText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },
  summaryText: {
    color: "#fff",
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resultCard: {
    backgroundColor: "#FFA500",
    padding: 15,
    borderRadius: 16,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  resultText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});
