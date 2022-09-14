import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: colors.background,
    borderRadius: 5,
  },
});

const Card = ({ children, style }) => {
  return (
        //estoy concatenando los estilos en este componente más los estilos del componente padre (todos con spread operator)
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
  )
};

export default Card;
