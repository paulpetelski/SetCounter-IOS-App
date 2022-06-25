import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Set from "./components/Set";
import Title from "./components/Title";

// yellow: #ffd97d
// light green: #aaf683
// dark green: #60d394
// red: #ee6055

export default function App() {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          style={styles.scrollview}
          showsVerticalScrollIndicator="false"
        >
          <View style={styles.row}>
            <Title title="Exercises" />
          </View>

          <Set exercise="Bicep Curl"></Set>
          <Set exercise="Bench Press"></Set>
          <Set exercise="Squat"></Set>
          <Set exercise="Shoulder Press"></Set>
        </ScrollView>
      </SafeAreaView>
    </>
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
});
