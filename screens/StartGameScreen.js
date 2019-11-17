import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/colors';

const StartGameScreen = props => {

        const [enteredValue, setEnterdeValue] = useState(' ');

        const numberInputHandler = inputText => {
            setEnterdeValue(inputText.replace(/[^0-9]/g, ''));
        };

        const resetInputHandler = () => {
            setEnterdeValue('');
        }

    return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.Input} 
                  blurOnSubmit
                  autoCapitalize= 'none'
                  autoCorrect={false}
                  keyboardType="number-pad"
                  maxLength={2}
                  onChangeText={numberInputHandler}
                  value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/></View>
                    <View style={styles.button}><Button title="Confirm" onPress={() => {}} color={Colors.primary}/></View>
                </View>
            </Card>
        </View>
    </TouchableWithoutFeedback>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },

    title: {
        fontSize: 20,
        marginVertical: 10
    },

    inputContainer: {
       width: 300,
       maxWidth: '80%',
       alignItems: 'center',
    },
    buttonContainer: {
        flexDirection:  'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 90,

    },
    input: {
        width: 70,
        textAlign: 'center'
    }
});

export default StartGameScreen;