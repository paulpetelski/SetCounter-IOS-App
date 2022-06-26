import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Set from "./Set";

const PrintArray = ({ items }) => {
  return items.map((item) => <Text> {item.name}</Text>);
};

export default PrintArray;
