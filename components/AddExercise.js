import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "./Title";

const AddExercise = () => {
  return (
    <View style={styles.row}>
      <Title title="Add Exercises"></Title>
    </View>
  );
};

export default AddExercise;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  scrollview: {
    marginHorizontal: 20,
  },
});
