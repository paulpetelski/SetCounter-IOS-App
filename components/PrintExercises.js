import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Set from "./Set";

const exercises = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions:</Text>
      <Text style={styles.text}>
        Add the name of your exercise and press submit!{"\n"}
      </Text>
      <Text style={styles.text}>
        This will create 3 buttons, each of which count down from 60 seconds
        (your rest time).{"\n"}
      </Text>
      <Text style={styles.text}>
        Each button is a set. For now, only 3 sets available per workout but the
        ability to change this number will come soon!{"\n"}
      </Text>
      <Text style={styles.text}>
        Press the button after finishing a set, then it counts down for you.
        When it turns green, you are ready for your next set.
      </Text>
    </View>
  );
};

export default exercises;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "left",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
