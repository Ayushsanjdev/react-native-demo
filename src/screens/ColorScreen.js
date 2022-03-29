import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title='Add a color'
        style={styles.button}
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }) => {
          return (
            <View
              style={{
                marginTop: 10,
                height: 100,
                width: 100,
                backgroundColor: item,
              }}
            />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
  },
});
export default ColorScreen;
