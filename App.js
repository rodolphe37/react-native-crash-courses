import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={{padding: 50}}>
      <TextInput placeholder="Ecrivez ici" style={{borderColor: 'black', borderWidth: 1, padding: 10}}/>
      <Button title="Ajouter"/>
    </View>
  );
}
