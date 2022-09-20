import React from "react";
import { View, Text, Button } from "react-native";

const GameOver = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View>
      <Text>Game Over!</Text>
      <Text>{`Rondas totales: ${roundsNumber + 1}`}</Text>
      <Text>{`Tu número era ${userNumber}`}</Text>
      <Button title="Reiniciar" onPress={onRestart}/>
    </View>
  );
};

export default GameOver;
