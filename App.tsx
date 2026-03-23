import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const userName = "Cubo";

  const dataList = [
    { name: "Charmander", price: 19.0, category: "Fire", onSale: true },
    { name: "Pikachu", price: 50.0, category: "Thunder", onSale: true },
    { name: "Dragonite", price: 150.0, category: "Dragon", onSale: false },
    { name: "Gyarados", price: 100.0, category: "Water", onSale: false },
    { name: "MewTwo", price: 1000000.0, category: "Psychic", onSale: true },
    { name: "Ratatta", price: 0.5, category: "Mouse", onSale: true },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, {userName}!</Text>
      <Text style={styles.subtitle}>
        There are the list of Pokémons that we're selling!
      </Text>

      {dataList.map((pokemon, index) => (
        <View key={index}>
          <Text style={styles.pokemonCard}>{pokemon.name}</Text>
          <Text>{pokemon.category}</Text>
          <Text>{pokemon.price}</Text>
          <Text>{pokemon.onSale && <Text>Available</Text>}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  pokemonCard: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 25,
  },
  subtitle: {
    fontSize: 17,
  },
  pokemonName: {
    fontSize: 20,
    fontWeight: "600",
  },
  fire: {
    color: "orange",
  },
});
