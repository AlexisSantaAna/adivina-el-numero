import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
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
  card: {
    marginTop: 20,
    width: width * 0.8,
    alignItems: "center",
  },
  title: {
    fontFamily: "Lato-Bold",
    fontSize: 30,
    paddingVertical: 20,
  },
  buttonContainer: {
    padding: 16,
  },
  imageContainer: {
    paddingVertical: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "Lato-Regular",
  },
});

const GameOver = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/gameover.jpg")}
              style={{ height: 200, width: 250 }}
            />
          </View>
          <Text style={styles.text}>{`Rondas totales: ${
            roundsNumber + 1
          }`}</Text>
          <Text style={styles.text}>{`Tu número era ${userNumber}`}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="REINICIAR"
              onPress={onRestart}
              color={colors.secondary}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default GameOver;
