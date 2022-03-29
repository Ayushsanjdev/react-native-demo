import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import ImageDetail from "../Container/ImageDetail";

const ImageComponent = () => {
  return (
    <View>
      <ImageDetail title='Forest' path={require("../../assets/forest.jpg")} score="ImageScore - 7" />
      <ImageDetail
        path={require("../../assets/mountain.jpg")}
        title='Mountain' score="Image Score - 6"
      />
      <ImageDetail path={require("../../assets/beach.jpg")} title='Beach' score="Image Score - 9" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageComponent;
