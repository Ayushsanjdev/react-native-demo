import React, { useState } from "react";
import { View, Text, StyleSheet, Keyboard, ScrollView } from "react-native";
import TodoInput from "../Container/TodoInput";
import TodoItem from "../Container/TodoItem";

const TodoScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss(); // to hide the keyboard on add click
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.todoHeader}>My Todos</Text>
      <ScrollView style={styles.scrollView}>
        {tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TodoItem
                index={index + 1}
                task={task}
                deleteTask={() => deleteTask(index)}
              />
            </View>
          );
        })}
      </ScrollView>
      <TodoInput addTask={addTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoHeader: {
    textAlign: "center",
    fontSize: 25,
    padding: 20,
    color: "grey",
  },
  container: {
    flex: 1,
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});

export default TodoScreen;
