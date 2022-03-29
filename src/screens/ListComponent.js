import React from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

const ListComponent = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.listItem}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 50,
  },
});

export default ListComponent;
