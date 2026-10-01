import React from "react";
import { View, Text, FlatList, TouchableOpacity, } from "react-native";
import { styles } from "../styles/globalStyles";

const recipes = [
  {
    id: "1",
    name: "Chicken Adobo",
    time: "45 mins",
    description: "A famous Filipino chicken dish.",
  },
  {
    id: "2",
    name: "Pancit",
    time: "30 mins",
    description: "Stir-fried noodles with vegetables.",
  },
  {
    id: "3",
    name: "Sinigang",
    time: "60 mins",
    description: "A sour soup with pork and vegetables.",
  },
];

export default function RecipeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("RecipeDetails", {
                name: item.name,
                time: item.time,
                description: item.description,
              })
            }
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
