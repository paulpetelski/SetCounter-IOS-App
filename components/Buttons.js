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

const OneButton = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  const [time, setTime] = useState(60);
  const timerRef = React.useRef(time);

  const [color, setColor] = useState("#4a4e69");

  const startTimer = () => {
    onPress();
    if (time === 60) {
      const timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
          setColor("#aaf683");
        } else {
          setTime(timerRef.current);
          setColor("#ee6055");
        }
      }, 1000);
    }
    return () => {
      clearInterval(timerId);
    };
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startTimer}>
        <SafeAreaView style={[styles.button, { backgroundColor: color }]}>
          <Text style={styles.timeText}>{time}</Text>
        </SafeAreaView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    borderColor: "black",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#00bbf9",
    borderRadius: 50,
    width: "100%",
    height: 100,
    padding: 10,
    justifyContent: "center",
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  countText: {
    color: "white",
  },
  timeText: {
    fontSize: 30,
    color: "white",
  },
});

export default OneButton;
