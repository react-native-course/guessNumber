import React, {useState} from 'react';
import {View, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Card from "../components/Card";
import Colors from '../constants/Colors';
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold',
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#ffffff',
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

const StartGameScreen = ({onStart}) => {
    const [enteredValue, setEnteredValue] = useState(''),
        [confirmed, setConfirmed] = useState(false),
        [selectedNumber, setSelectedNumber] = useState(undefined);
    let confirmedOutput = null;

    const inputHandler = (value) => {
        setEnteredValue(value.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        setConfirmed(true);
        closeKeyboard();
    };

    const onStartGame = () => {
        onStart(selectedNumber);
    };

    const closeKeyboard = () => {
        Keyboard.dismiss();
    };

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <BodyText>You selected</BodyText>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="start game" onPress={onStartGame}/>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputContainer}>
                    <BodyText>Select a Number</BodyText>
                    <Input style={styles.input}
                           blurOnSubmit
                           autoCapitalize="none"
                           autoCorrect={false}
                           keyboardType="number-pad"
                           maxLength={2}
                           onChangeText={inputHandler}
                           value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="Reset"
                                color={Colors.accent}
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="Confirm"
                                color={Colors.primary}
                                onPress={confirmInputHandler}
                            />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;
