import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import Title from "./Title";
//import Exercises from "../data/Exercises";
import PrintExercises from "./PrintExercises";
import { exercises } from "../data/Exercises.js";
import { TextInput } from "react-native";
//const items = Exercises();
//const items = [{ name: "Bicep Curl" }, { name: "Bench Press" }];
import PrintArray from "./PrintArray";

const AddExercise = () => {
  const [text, setText] = useState("");

  const addToArray = () => {
    console.log("presssed");
    textString = `name: ${text}, key: 4`;
    exercises.push(textString);
  };

  // text input not working yet
  return (
    <View>
      <Text>Current Exercises:</Text>
      <TextInput
        placeholder="Placeholder"
        returnKeyType="done"
        style={{ height: 60 }}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
        onSubmitEditing={(a) => exercises.push(`name: ${text}, key: 5`)}
      />
      <Button title="Submit" onPress={addToArray()}></Button>
      <Text>{text}</Text>
      <Text>
        <PrintArray items={exercises}></PrintArray>
      </Text>
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
