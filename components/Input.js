import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
  },
});

const Input = ({ style, ...props }) => {
  return (  
    <TextInput style={{ ...styles.input, ...style }} {...props} />
  )
};

export default Input;
