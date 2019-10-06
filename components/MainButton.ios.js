import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
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

const MainButtonIos = ({children, onPress}) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>

    </TouchableOpacity>
);

export default MainButtonIos;
