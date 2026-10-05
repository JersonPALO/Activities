import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff8f0",
  },


  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#8B4513",
  },


  text: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },


  button: {
    backgroundColor: "#8B4513",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
  },


  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },


  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 10,
    width: "90%",
    borderRadius: 10,
    elevation: 3,
  }

});


export default globalStyles;