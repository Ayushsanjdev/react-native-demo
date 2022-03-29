import React, { useState } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import CatComponent from "./Cat.view";
import ComponentsScreen from "./ComponentsScreen";
import ListComponent from "./ListComponent";

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <Text style={styles.text}>Home screen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title='Go to Components screen'
      />
      <Button
        onPress={() => navigation.navigate("Image")}
        title='Go to Image component'
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title='Go to Counter Screen'
      />
      <Button
        onPress={() => navigation.navigate("Colors")}
        title='Go to Color Screen'
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title='Go to Square Screen'
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});

export default HomeScreen;
