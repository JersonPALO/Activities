import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RecipeListScreen from "./screens/RecipeListScreen";
import RecipeDetailsScreen from "./screens/RecipeDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Recipes"
          component={RecipeListScreen}
        />

        <Stack.Screen
          name="Details"
          component={RecipeDetailsScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}