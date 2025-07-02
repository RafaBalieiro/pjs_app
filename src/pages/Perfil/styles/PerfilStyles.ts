import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A0D0D",
    padding: 20,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
  },
  refreshButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 15,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  level: {
    color: "#fff",
    marginBottom: 10,
  },
  xpBarContainer: {
    width: "100%",
    marginBottom: 20,
  },
  xpBar: {
    height: 8,
    backgroundColor: "#555",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 5,
  },
  xpFill: {
    height: 8,
    backgroundColor: "#FFA500",
  },
  xpText: {
    color: "#fff",
    fontSize: 12,
    alignSelf: "flex-end",
  },
  infoCard: {
    backgroundColor: "#4B0082",
    width: "100%",
    padding: 15,
    borderRadius: 16,
    marginBottom: 20,
    position: "relative",
  },
  infoText: {
    color: "#fff",
    marginBottom: 5,
  },
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  statsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  orangeCard: {
    backgroundColor: "#FFA500",
    flex: 1,
    padding: 15,
    borderRadius: 16,
    marginRight: 10,
  },
  redCard: {
    backgroundColor: "#FF4500",
    flex: 1,
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
  },
  cardText: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 5,
  },
});
