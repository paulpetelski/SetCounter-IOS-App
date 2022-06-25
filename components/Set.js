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

function Set() {
  return (
    <>
      <View style={styles.row}>
        <OneButton></OneButton>
        <OneButton></OneButton>
        <OneButton></OneButton>
      </View>
      <View style={styles.row}></View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingTop: 50,
  },
});

export default Set;
