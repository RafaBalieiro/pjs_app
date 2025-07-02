import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A0D0D", // Tom de fundo vinho escuro igual ao print
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  form: {
    width: "100%",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 8,
  },
  loginButton: {
    backgroundColor: "#7A5FFF",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 30,
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  registerButton: {
    alignItems: "center",
  },
  register: {
    alignItems: "center",
  },
  registerText: {
    color: "#fff",
  },
  registerLink: {
    textDecorationLine: "underline",
    color: "#fff",
    fontWeight: "bold",
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingVertical: 12,
    borderRadius: 25,
    justifyContent: "center",
    marginBottom: 20,
  },
  googleButtonText: {
    color: "#fff",
    marginLeft: 10,
    fontWeight: "bold",
  },
});
