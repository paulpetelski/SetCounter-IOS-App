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

const arr = [{ name: "Bicep Curl", key: 1 }];
let array = ["Bicep Curl"];
class AddExercise extends React.Component {
  //const [text, setText] = useState("");

  constructor(props) {
    super(props);
    this.state = {
      text: "",
      key: 5,
      arr,
    };
  }

  addToArray = () => {
    console.log("presssed");
    textString = `name: ${text}, key: 4`;
    exercises.push(textString);
  };

  printArray = () => {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  };

  resetArray = () => {
    array = [""];
    console.log("Cleared");
  };

  // text input not working yet
  render() {
    return (
      <View>
        <Text>Current Exercises:</Text>
        <TextInput
          placeholder="Placeholder"
          returnKeyType="done"
          style={{ height: 60 }}
          onChangeText={(newText) =>
            this.setState({ text: newText, key: this.state.key + 1 })
          }
          defaultValue={this.state.text}
          onSubmitEditing={(a) => array.push(this.state.text)}
        />
        <Button title="Submit" onPress={this.printArray}></Button>
        <Button title="Reset" onPress={this.resetArray}></Button>
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

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
