import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const textInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.viewScreen}>
                <TextInput
                    placeholder="Ecrivez Ici !"
                    style={styles.input}
                    onChangeText={textInputHandler}
                    value={enteredGoal}
                />
                <Button title="Annuler" color="red" onPress={props.onCancel} />
                <Button title="Ajouter" onPress={addGoalHandler}  />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create ({
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

    viewScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default GoalInput;
