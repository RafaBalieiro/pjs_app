import { StyleSheet } from "react-native";

export default StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: "#3A0D0D",
  },
  logoutContainer: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  container: {
    padding: 20,
    backgroundColor: "#3A0D0D",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  menuButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4A0D0D",
    padding: 15,
    borderRadius: 16,
    width: 70,
    height: 70,
    marginHorizontal: 8,
    marginBottom: 10,
  },
  menuIcon: {
    marginBottom: 4,
  },
  menuLabel: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
  menuIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  level: {
    color: "#ccc",
    marginBottom: 5,
  },
  xpBarContainer: {
    marginTop: 5,
  },
  xpBar: {
    height: 8,
    backgroundColor: "#555",
    borderRadius: 4,
    overflow: "hidden",
  },
  xpFill: {
    height: 8,
    width: "70%",
    backgroundColor: "#ff7f50",
  },
  xpText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 2,
  },
  activitiesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  activitiesTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#4B0082",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  cardTitle: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 10,
  },
  cardXP: {
    color: "#fff",
  },
  progressBar: {
    height: 6,
    backgroundColor: "#333",
    borderRadius: 3,
    overflow: "hidden",
    marginBottom: 5,
  },
  progressFill: {
    height: 6,
    backgroundColor: "#00ff00",
  },
  progressText: {
    color: "#fff",
    fontSize: 12,
    alignSelf: "flex-end",
  },
});
