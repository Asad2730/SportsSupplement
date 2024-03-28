import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomIcon({ txt, onClick, iconName }) {
  return (
    <Pressable style={styles.conatiner} onPress={onClick}>
      <MaterialIcons name={iconName} size={24} color={colors.primary_color} />
      <Text style={styles.itemName}>{txt}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 0.9,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    color: colors.secondary_light,
    fontSize: 14,
  },
});
