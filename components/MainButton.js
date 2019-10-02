import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    },
});

const MainButton = ({children, onPress}) => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent onPress={onPress} activeOpacity={0.8}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>

            </ButtonComponent>
        </View>
    );
};

export default MainButton;
