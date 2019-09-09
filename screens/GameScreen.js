import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Button, Alert} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import BodyText from "../components/BodyText";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',
    }
});

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = ({userChoice, onGameOver}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 99, userChoice)),
        [rounds, setRounds] = useState(0),
        currentLow = useRef(1),
        currentHigh = useRef(100);

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const lowerHandler = () => {
        nextGuessHandler('lower');
    };

    const greaterHandler = () => {
        nextGuessHandler('greater');
    };

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert(
                "Don't lie!",
                'You know that this is wrong...',
                [{text: 'Sorry!', style: 'cancel'}]
            );
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds((curRounds) => curRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <BodyText>Oppenent's Guess</BodyText>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="lower" onPress={lowerHandler}/>
                <Button title="greater" onPress={greaterHandler}/>
            </Card>
        </View>
    );
};

export default GameScreen;
