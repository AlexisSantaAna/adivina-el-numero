import { useFonts } from "expo-font";
import { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/game";
import StartGameScreen from "./screens/start-game";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerLoader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default function App({ selectedNumber }) {
  const [userNumber, setUserNumber] = useState(0);
  const [loaded] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
  });

  const title = !userNumber ? "Adivina el número" : "Comienza el juego";
  
  //esta función la pasamos a la pantalla inicial del juego y nos devuelve el nro confirmado, luego se cambia de screen en la app
  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  //Si no ha cargado las fuentes, que se muestre un spinner en pantalla
  if(!loaded) {
    return (
      <View style={styles.containerLoader}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  //Cambio de pantallas según userNumber true o false
  //Si es false se ejecuta el bloque de código con la pantalla inicial, cuando se asigna
  //el nro elegido y se envia por props a la variable userNumber, se renderiza el componente de
  //pantalla de juego
  let content = <StartGameScreen onStartGame={onStartGame} />

  if (userNumber) {
    content = <GameScreen selectedNumber={userNumber} />
  }

  return (
    <View style={styles.container}>
      <Header title={title} />
      {content}
    </View>
  );
}
