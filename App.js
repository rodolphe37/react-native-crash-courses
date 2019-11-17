import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
