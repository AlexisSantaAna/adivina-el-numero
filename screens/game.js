import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
} from "react-native";
import Card from "../components/Card";
import { colors } from "../constants/colors";

const { height, width } = Dimensions.get("window");

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
    fontFamily: "Lato-Regular",
  },
  card: {
    marginTop: 20,
    marginHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: width / 1.8,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  number: {
    fontSize: 22,
    color: colors.primary,
    fontFamily: "Lato-Bold",
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

const GameScreen = ({ selectedNumber, onGameOver, setUserNumber }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumberBetween(1, 100, selectedNumber)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const onHandleNextGuess = (direction) => {
    if (
      (direction === "lower" && currentGuess < selectedNumber) ||
      (direction === "greater" && currentGuess > selectedNumber)
    ) {
      Alert.alert("Psss que ponés! Capoeira cósmico del altiplano boliviano")
      return
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess
    } else {
      currentLow.current = currentGuess
    }

    const nextNumber = generateRandomNumberBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(currentRounds => currentRounds + 1)
  };

  useEffect(() => {
    if (currentGuess === selectedNumber) {
      onGameOver(rounds)
      setRounds(0)
    }
  }, [selectedNumber, currentGuess, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>La suposición del oponente</Text>
        <Text style={styles.number}>{currentGuess}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="MENOR"
            onPress={() => onHandleNextGuess("lower")}
            color={colors.primary}
          />
          <Button
            title="MAYOR"
            onPress={() => onHandleNextGuess("greater")}
            color={colors.secondary}
          />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;
