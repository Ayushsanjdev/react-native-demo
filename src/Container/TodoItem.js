import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CheckBox from "react-native-check-box";
import { MaterialIcons } from "@expo/vector-icons";

const TodoItem = (props) => {
  const { index, task, deleteTask } = props;
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          isChecked={isChecked}
        />
      </View>
      <View style={styles.taskContainer}>
        <Text style={!isChecked ? styles.task : styles.taskDone}>{task}</Text>
        <TouchableOpacity onPress={() => {
          deleteTask();
          setIsChecked(false);
        }}>
          <MaterialIcons
            style={styles.delete}
            name='delete'
            size={18}
            color='#777'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", marginHorizontal: 20 },
  indexContainer: {
    borderRadius: 20,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "lightgrey",
  },
  taskContainer: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
    backgroundColor: "lightgrey",
  },
  task: { color: "#000", width: "90%", fontSize: 16 },
  taskDone: {
    color: "#888",
    width: "90%",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  delete: { marginLeft: 10 },
});

export default TodoItem;
