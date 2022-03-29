import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>CounterScreen</Text>
      <Button title='+' onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
      <Button title='-' onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default CounterScreen;
