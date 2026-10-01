import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function RecipeDetailsScreen({ navigation, route }) {
  const { name, time, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>

      <Text style={styles.subtitle}>Cooking Time</Text>
      <Text>{time}</Text>

      <Text style={styles.subtitle}>Description</Text>
      <Text>{description}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});