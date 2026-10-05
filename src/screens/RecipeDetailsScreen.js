import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../globalStyles";

export default function RecipeDetailsScreen({ route, navigation }) {
  const { name, price, description } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Recipe Details
      </Text>
      <Text style={styles.text}>
        Name: {name}
      </Text>
      <Text style={styles.text}>
        Price: {price}
      </Text>
      <Text style={styles.text}>
        Description: {description}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}