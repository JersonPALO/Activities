import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../globalStyles";


const recipes = [

  {
    id: 1,
    name: "Pancakes",
    price: "₱50",
    description: "Fluffy pancakes with syrup."
  },


  {
    id: 2,
    name: "Chicken Adobo",
    price: "₱120",
    description: "Classic Filipino chicken dish."
  },


  {
    id: 3,
    name: "Spaghetti",
    price: "₱80",
    description: "Sweet Filipino-style spaghetti."
  }

];

export default function RecipeListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Recipe List
      </Text>
      {
        recipes.map((recipe)=> (

          <TouchableOpacity

            key={recipe.id}

            style={styles.card}

            onPress={() => 
              navigation.navigate(
                "Details",
                {
                  name: recipe.name,
                  price: recipe.price,
                  description: recipe.description
                }
              )
            }
          >
            <Text style={styles.text}>
              {recipe.name}
            </Text>
          </TouchableOpacity>
        ))
      }
    </View>
  );
}