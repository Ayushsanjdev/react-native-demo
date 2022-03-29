import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

const ImageDetail = ({ path, title, score }) => {
  return (
    <View>
      <Image source={path} />
      <Text>{title}</Text>
      <Text>{score}</Text>
    </View>
  );
};

export default ImageDetail;
