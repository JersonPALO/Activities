import React, { useState } from "react";
import { View,Text,TextInput,TouchableOpacity,FlatList,StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [item, setItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return;

    setGroceryList([
      ...groceryList,
      {
        id: Date.now().toString(),
        name: item,
      },
    ]);

    setItem("");
  };

  const deleteItem = (id) => {
    setGroceryList(groceryList.filter((listItem) => listItem.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter grocery item"
        value={item}
        onChangeText={setItem}
      />

      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>

      <FlatList
        data={groceryList}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>No grocery items yet.</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteItem(item.id)}
            >
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },

  addButton: {
    backgroundColor: "#2E86DE",
    padding: 14,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },

  itemText: {
    fontSize: 18,
  },

  deleteButton: {
    backgroundColor: "red",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },

  deleteText: {
    color: "white",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    color: "gray",
    fontSize: 16,
  },
});