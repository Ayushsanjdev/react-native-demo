import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import ColorCounter from "../Container/ColorCounter";

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColorLimit = (color, increment) => {
    switch (color) {
      case "red":
        red + increment > 255 || red + increment < 0
          ? null
          : setRed(red + increment);
        return;
      case "blue":
        blue + increment > 255 || blue + increment < 0
          ? null
          : setBlue(blue + increment);
        return;
      case "green":
        green + increment > 255 || green + increment < 0
          ? null
          : setGreen(green + increment);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setColorLimit("red", COLOR_INCREMENT)}
        onDecrease={() => setColorLimit("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => setColorLimit("blue", COLOR_INCREMENT)}
        onDecrease={() => setColorLimit("blue", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => setColorLimit("green", COLOR_INCREMENT)}
        onDecrease={() => setColorLimit("green", -1 * COLOR_INCREMENT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${blue},${green})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
