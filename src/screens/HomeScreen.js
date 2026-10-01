import React from "react";
import { View, Text, TouchableOpacity, } from "react-native";
import { styles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Recipe Book!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RecipeList")}
      >
        <Text style={styles.buttonText}>View Recipes</Text>
      </TouchableOpacity>
    </View>
  );
}
