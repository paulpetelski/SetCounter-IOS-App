import { StyleSheet, Text, View, ScrollView } from "react-native";
import Set from "./Set";
import React from "react";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator="false">
      <Set exercise="Bicep Curl"></Set>
      <Set exercise="Bench Press"></Set>
      <Set exercise="Squat"></Set>
      <Set exercise="Shoulder Press"></Set>
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
