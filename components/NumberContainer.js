import React from 'react';
import {View, StyleSheet} from "react-native";
import Colors from '../constants/Colors';
import BodyText from "./BodyText";

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.accent,
        fontSize: 22,
    }
});

const NumberContainer = ({children}) => (
    <View style={styles.container}>
        <BodyText style={styles.number}>
            {children}
        </BodyText>
    </View>
);

export default NumberContainer;
