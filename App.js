// 導入元件
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// UI渲染
export default function App() {
  // const food = 'noodles'
  const [food, setfood] = useState('candy')
  const [count, setcount] = useState(0)
  const changefood = () => {
    setfood('noodles')
    console.log('已按到setfood')
  }
  const changecount = () => {
    setcount(count + 1)
    console.log('已按到setcount')
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, color: 'rgb(110,0,0)' }}>Hello World!!</Text>
      <Text style={{ fontSize: 20, color: '#dfc5ae' }}>食物:{food}</Text>
      <Text style={{ fontSize: 20, color: '#4ea5da' }}>計數器:{count}</Text>
      <Button title='Change food' onPress={() => changefood()} />
      <Button title='Change count' onPress={() => changecount()} />
    </View >
  );
}

// 樣式表
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
