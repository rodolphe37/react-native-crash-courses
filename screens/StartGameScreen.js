import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';

const StartGameScreen = props => {

        const [enteredValue, setEnterdeValue] = useState(' ');
        const [confirmed, setConfirmed] = useState(false);
        const [SelectedNumber, setSelecteNumber] = useState();

        const numberInputHandler = inputText => {
            setEnterdeValue(inputText.replace(/[^0-9]/g, ''));
        };

        const resetInputHandler = () => {
            setEnterdeValue('');
            setConfirmed(false);
        };

        const confirmInputHandler = () => {
              const choseNumber = parseInt(enteredValue);
              if ( isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
                Alert.alert(
                    'Invalid Number',
                    'Number has to be a number between 1 and 99.',
                    [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
                ); 
                return;
              }
            setConfirmed(true);
            setSelecteNumber(choseNumber);
            setEnterdeValue('');
            Keyboard.dismiss();
        };
     
        let confirmedOutput;

        if (confirmed) {
        confirmedOutput = 
        <Card  style={styles.summaryContainer}>
            <Text>You selected{SelectedNumber}</Text>
            <NumberContainer>{SelectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => onStartGame(SelectedNumber)}/>
        </Card>
        };

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
                    <View style={styles.button}>
                        <Button title="Reset"
                        onPress={resetInputHandler}
                        color={Colors.accent}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="Confirm"
                        onPress={confirmInputHandler}
                        color={Colors.primary}
                        />
                    </View>
                </View>
            </Card>
            {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;