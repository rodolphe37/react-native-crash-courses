import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder="Ecrivez ici" 
        style={{ width: '80%', borderColor: 'black', borderWidth: 1, padding: 10 }}/>
        <Button title="Ajouter"/>
      </View>
    </View>
  );
}
