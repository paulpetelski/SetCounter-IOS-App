import React from "react";
import { Text, StyleSheet } from "react-native";

const Title = (props) => {
  return (
    <>
      <Text style={styles.title}>{props.title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingTop: 20,
    alignContent: "center",
  },
});

export default Title;
