import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const textInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.viewScreen}>
            <TextInput
                placeholder="Ecrivez Ici !"
                style={styles.input}
                onChangeText={textInputHandler}
                value={enteredGoal}
            />
            <Button title="Ajouter" onPress={props.onAddGoal.bind(this,enteredGoal)}  />
        </View>
    );
};

const styles = StyleSheet.create ({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
      },
});

export default GoalInput;