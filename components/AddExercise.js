import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import Title from "./Title";
import PrintExercises from "./PrintExercises";
import { TextInput } from "react-native";
import PrintArray from "./PrintArray";
import Set from "./Set";

export default function AddExercise() {
  const [exercise, setExercise] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleAddTask = () => {
    setExercises([...exercises, exercise]);
    setExercise(null);
  };

  // text input not working yet
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator="false">
      <Text style={styles.header}>Add an Exercise:</Text>
      <TextInput
        placeholder="Placeholder"
        returnKeyType="done"
        style={styles.input}
        onChangeText={(newExercise) => setExercise(newExercise)}
        onSubmitEditing={() => handleAddTask()}
      />
      <Button title="Submit" onPress={() => handleAddTask()}></Button>
      <Button title="Reset"></Button>

      {exercises.map((item, index) => {
        return <Set exercise={item} key={index}></Set>;
        //return <Text key={index}>{item}</Text>;
      })}
    </ScrollView>
  );
}

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
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#dee2e6",
    borderRadius: 60,
    borderColor: "#ff5500",
    borderWidth: 1,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
});
