import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Set from "./components/Set";
import Title from "./components/Title";
import AddExercise from "./components/AddExercise";
import HomeScreen from "./components/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

// === COLORS ===
// yellow: #ffd97d
// light green: #aaf683
// dark green: #60d394
// red: #ee6055

// === ICONS ===
// https://icons.expo.fyi/
// Search starting with ios-
// use Ionicons

// === TABS/NAVIGATION ===
// https://reactnavigation.org/

const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    //primary: "rgb(255, 45, 85)",
    background: "rgb(255, 255, 255)",
    //card: "rgb(255, 255, 255)",
    //text: "rgb(28, 28, 30)",
    //border: "rgb(199, 199, 204)",
    //notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={styles.row}>
          <Title title="Exercises" />
        </View>
      </SafeAreaView>

      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Add Exercises") {
                iconName = focused ? "ios-list-outline" : "ios-list";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            headerShown: false,
            headerMode: "none",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
          <Tab.Screen name="Add Exercises" component={AddExercise}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
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
