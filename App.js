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
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [enteredGoal] = useState('');

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (

    <View style={styles.screen}>
      <GoalInput  onAddGoal={addGoalHandler} />
        <FlatList 
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemsData => <GoalItem title={itemsData.item.value} />}
        />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  
  viewScreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

});
