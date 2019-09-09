import React from 'react';
import {View, Text, StyleSheet, Button, Image} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
        marginVertical: 30,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={400}
                    resizeMode="cover"
                    source={require('../assets/images/success.png')}
                    style={styles.image}/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed
                    <Text style={styles.highlight}>{roundsNumber}</Text>
                    rounds to guess the number
                    <Text style={styles.highlight}>{userNumber}</Text>.
                </BodyText>
            </View>
            <Button title="NEW GAME" onPress={onRestart}/>
        </View>
    );
};

export default GameOverScreen;
