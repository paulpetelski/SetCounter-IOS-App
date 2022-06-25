import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import OneButton from "./Buttons";
import Title from "./Title";

const Set = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Title title={props.exercise}></Title>
        </View>
        <View style={styles.row}>
          <OneButton></OneButton>
          <OneButton></OneButton>
          <OneButton></OneButton>
        </View>
        <View style={styles.row}></View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingTop: 20,
  },
  container: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default Set;
