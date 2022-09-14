import React from "react";
import { Text, StyleSheet, Button } from "react-native";
import { colors } from "../constants/colors";
import Card from "./Card";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    number: {
        fontSize: 22,
        color: colors.primary
    },
    title: {
        fontWeight: "bold"
    }
})

const NumberContainer = (props) => {
  return (
    <Card style={styles.container}>
        <Text style={styles.title}>Tu selección</Text>
        <Text style={styles.number}>{props.selectedNumber}</Text>
        <Button title="EMPEZAR JUEGO" color={colors.secondary} onPress={() => null}/>
    </Card>
  )
};

export default NumberContainer;
