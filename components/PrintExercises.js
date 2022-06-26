import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Set from "./Set";

const exercises = ({ items }) => {
  return items.map((item) => <Set exercise={item.name} key={item.key}></Set>);
};

export default exercises;
