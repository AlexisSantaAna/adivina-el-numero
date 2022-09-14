import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/start-game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <StartGameScreen />
    </View>
  );
}
