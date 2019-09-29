import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from '../constants/Colors';
import MainButton from "../components/MainButton";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: '#000',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: Dimensions.get('window').height / 60,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

const GameOverScreen = ({roundsNumber, userNumber, onRestart}) => {
    return (
        <ScrollView>
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
                        <Text style={styles.highlight}> {roundsNumber} </Text>
                        rounds to guess the number
                        <Text style={styles.highlight}> {userNumber}</Text>.
                    </BodyText>
                </View>
                <MainButton onPress={onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;
