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
    if (exercise != null) {
      setExercises([...exercises, exercise]);
      setExercise(null);
    }
  };

  const resetExercises = () => {
    setExercises([]);
  };

  // text input not working yet
  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator="false">
      <TextInput
        placeholder="Add an exercise..."
        value={exercise}
        returnKeyType="done"
        style={styles.input}
        onChangeText={(newExercise) => setExercise(newExercise)}
        onSubmitEditing={() => handleAddTask()}
      />
      <View style={styles.row}>
        <Button
          color="red"
          title="Clear"
          onPress={() => resetExercises()}
        ></Button>
        <Button title="Submit" onPress={() => handleAddTask()}></Button>
      </View>

      {exercises.map((item, index) => {
        return <Set exercise={item} key={index}></Set>;
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
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderColor: "#00bbf9",
    borderWidth: 1,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    paddingTop: 30,
    paddingBottom: 10,
  },
  red: {
    color: "red",
  },
});
