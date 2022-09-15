import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { colors } from "../constants/colors";
import Card from "./Card";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
        width: "80%",
        height: 150
    },
    number: {
        fontSize: 22,
        color: colors.primary,
        paddingBottom: 15,
        fontFamily: "Lato-Bold",
    },
    title: {
        fontFamily: "Lato-Regular",
        paddingVertical: 10,
        fontSize: 16
    }
})

const NumberContainer = (props) => {
  return (
    <Card style={styles.container}>
        <Text style={styles.title}>Tu selección</Text>
        <Text style={styles.number}>{props.selectedNumber}</Text>
        <Button title="EMPEZAR JUEGO" color={colors.secondary} onPress={() => props.onStartGame(props.selectedNumber)}/>
    </Card>
  )
};

export default NumberContainer;
