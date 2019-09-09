import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    card: {
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: '#ffffff',
        padding: 20,
    },
});

const Card = ({children, style}) => {
    return (
        <View style={{
            ...styles.card, width: 300,
            ...style
        }}>
            {children}
        </View>
    );
};

export default Card;
