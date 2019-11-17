import React, { useState } from 'react';
import { 
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const textInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <ScrollView>
    <View style={styles.screen}>
      <View style={styles.viewScreen}>
        <TextInput
          placeholder="Ecrivez Ici !"
          style={styles.input}
          onChangeText={textInputHandler}
          value={enteredGoal}
        />
        <Button title="Ajouter" onPress={addGoalHandler}  />
      </View>
      <View>
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemsData => (
          <View style={styles.listItem} >
            <Text>{itemsData.item.value}</Text>
          </View>
        )}
        />
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  viewScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1
  }


});
