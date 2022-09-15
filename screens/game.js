import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    color: colors.text,
    paddingVertical: 20,
    fontFamily: "Lato-Regular"
  },  
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  number: {
    fontSize: 22,
    color: colors.primary,
    fontFamily: "Lato-Bold"
  },
});

const generateRandomNumberBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  if (randomNumber === exclude) {
    return generateRandomNumberBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
};

const GameScreen = ({ selectedNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 100, selectedNumber)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>La suposición del oponente</Text>
        <Text style={styles.number}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button title="MENOR" onPress={() => null}  color={colors.primary}/>
          <Button title="MAYOR" onPress={() => null}  color={colors.secondary}/>
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
