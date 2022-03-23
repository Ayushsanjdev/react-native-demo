import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = (props) => {
  const { text } = props;
  return (
    <View>
      <Text style={styles.component}>Another Component</Text>
      <Text style={styles.component}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    textAlign: "center",
    marginTop: 15
  },
});

export default ComponentsScreen;
