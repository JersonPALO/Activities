import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  // State 1: the data fetched from the API
  const [pokemon, setPokemon] = useState([]);
  // State 2: loading indicator
  const [loading, setLoading] = useState(true);
  // Extra state: error message (if the request fails)
  const [error, setError] = useState(null);

  // Runs once when the component mounts (empty dependency array)
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setPokemon(data.results); // PokeAPI puts the list inside "results"
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.message}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Pokémon List</Text>
      <ScrollView>
        {pokemon.map((item) => (
          <View key={item.name} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.body}>{item.url}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Plain style objects (no StyleSheet.create needed)
const styles = {
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  message: { fontSize: 18 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  card: {
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  body: { fontSize: 12, color: '#444' },
};