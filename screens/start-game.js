import React, { useState } from "react";
import { Keyboard, ScrollView, Dimensions, KeyboardAvoidingView, Platform } from "react-native";
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

const { height, width } = Dimensions.get("window");

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
    fontFamily: "Lato-Regular",
  },
  label: {
    fontSize: 16,
    color: colors.text,
    paddingVertical: 5,
    fontFamily: "Lato-Regular",
  },
  inputContainer: {
    height: 200,
    width: "80%",
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
    fontFamily: "Lato-Bold",
    color: colors.primary,
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: width / 1.8,
  },
  containerScroll: {
    flex: 1,
  },
});

const StartGameScreen = ({ onStartGame }) => {
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

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNumber("");
  };

  //Guardo en una variable, si confirmed es true, un texto a mostrarse en el return. sino un null.
  // const confirmedOutput = confirmed ? <Text>Número elegido: {selectedNumber}</Text> : null

  return (
    <KeyboardAvoidingView style={styles.containerScroll} behavior={Platform.OS == "android" ? "padding" : "position"} keyboardVerticalOffset={30}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={styles.containerScroll}>
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
            {confirmed ? (
              <NumberContainer
                selectedNumber={selectedNumber}
                onStartGame={onStartGame}
              />
            ) : null}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;
