import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { styles } from "../styles/globalStyles";

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
