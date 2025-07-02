import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A0D0D",
    padding: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    color: "#fff",
    marginBottom: 15,
  },
  monthNav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  monthText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  calendarDay: {
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#555",
  },
  calendarDayText: {
    color: "#fff",
    fontWeight: "bold",
  },
  calendarDayPlanned: {
    borderWidth: 2,
    borderColor: "#FFD700",
  },
  calendarDayInactive: {
    opacity: 0.2,
  },
  calendarDayCompleted: {
    backgroundColor: "#32CD32",
  },
  calendarDayCurrent: {
    borderWidth: 3,
    borderColor: "#FFA500",
  },
  xpText: {
    color: "#fff",
    marginBottom: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#7A5FFF",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  calendarDayLate: {
    backgroundColor: "#FF6347", // Vermelho para atraso
  },
});
