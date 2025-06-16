import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#f4f4f4",
    flexGrow: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  button: {
    width: 140,
    height: 120,
    backgroundColor: "#4f46e5",
    borderRadius: 16,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    elevation: 4,
  },
  buttonLabel: {
    color: "#fff",
    marginTop: 8,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
