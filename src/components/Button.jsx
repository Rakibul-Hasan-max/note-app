import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ title, onPress, customStyles }) {
  return (
    <TouchableOpacity
      style={[styles.button, customStyles]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: 165,
    borderRadius: 30,
    backgroundColor: "#FFE600",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
});
