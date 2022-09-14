import React, { useState } from "react";
import { Keyboard } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: colors.text,
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    color: colors.text,
    paddingVertical: 5,
  },
  inputContainer: {
    width: 320,
    height: 200,
    maxWidth: "80%",
    justifyContent: "center",
    marginHorizontal: 20,
    alignItems: "center",
  },
  input: {
    width: "100%",
    maxWidth: 70,
    fontSize: 25,
    paddingVertical: 10,
    textAlign: "center",
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
  },
});

const StartGameScreen = () => {
  const [number, setNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const onHandleChange = (text) => {
    //Todo lo que no sea un nro de 0 al 9 es reemplazado por string vacío
    //El input escucha lo que se ingrese, se ejecuta la función que setea con setNumber el value en el input.
    setNumber(text.replace(/[^0-9]/g, ""));
  };

  const onHandleClean = () => {
    setNumber("");
    setConfirmed(false);
  };

  const onHandleConfirmInput = () => {
    const chosenNumber = parseInt(number);

    if (chosenNumber == NaN || chosenNumber <= 0 || chosenNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(parseInt(number));
    setNumber("");
  };

  //Guardo en una variable, si confirmed es true, un texto a mostrarse en el return. sino un null.
  // const confirmedOutput = confirmed ? <Text>Número elegido: {selectedNumber}</Text> : null

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Comenzar juego</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Elija un número</Text>
          <Input
            value={number}
            onChangeText={(text) => onHandleChange(text)}
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Limpiar"
              color={colors.primary}
              onPress={onHandleClean}
            />
            <Button
              title="Confirmar"
              color={colors.secondary}
              onPress={onHandleConfirmInput}
            />
          </View>
        </Card>
        {confirmed ? <NumberContainer selectedNumber={selectedNumber} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
