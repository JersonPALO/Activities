import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "../globalStyles";


export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        Recipe Explorer
      </Text>


      <Text style={styles.text}>
        Discover simple recipes!
      </Text>


      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Recipes")}
      >

        <Text style={styles.buttonText}>
          View Recipes
        </Text>

      </TouchableOpacity>


    </View>

  );

}