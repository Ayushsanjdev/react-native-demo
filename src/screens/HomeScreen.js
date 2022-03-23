import React, {useState} from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import CatComponent from "./Cat.view";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = () => {
  const [text, setText] = useState("");

  return (
    <ScrollView>
      <Text style={styles.text}>Title/name</Text>
      <CatComponent setText={setText} />
      <ComponentsScreen text={text} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
  },
});

export default HomeScreen;
