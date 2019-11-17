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
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Annuler" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Ajouter" onPress={addGoalHandler}  />
                    </View>
                </View>
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

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
        marginTop: 20
    },
    button: {
        width: '40%',
    }
});

export default GoalInput;
