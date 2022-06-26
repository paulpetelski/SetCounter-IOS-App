import { StyleSheet, Text, View, ScrollView } from "react-native";
import Set from "./Set";
import React from "react";
import PrintExercises from "./PrintExercises";
import { exercises } from "../data/Exercises.js";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator="false">
      <PrintExercises items={exercises}></PrintExercises>
    </ScrollView>
  );
};

export default HomeScreen;

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
