import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Platform, // we can show diffrent type of styles using platform if ios or android..
} from "react-native";

const CatComponent = (props) => {
  const { setText } = props;
  console.log(Platform.OS);
  console.log(Platform.constants);
  console.log(Platform.Version);

  return (
    <View style={styles.imageView}>
      <Image
        source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        placeholder='type your cat name'
        onChangeText={(newText) => setText(newText)}
        style={styles.textArea}
      />
      <Button style={styles.button} title='ok' />
    </View>
  );
};

const styles = StyleSheet.create({
  imageView: {
    alignSelf: "center",
  },
  textArea: {
    borderColor: "black",
    borderWidth: 1,
    height: 40,
    textAlign: "center",
  },
  button: {
    width: 50,
    marginTop: 10,
  },
});

export default CatComponent;
