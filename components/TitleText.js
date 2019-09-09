import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    }
});

const TitleText = ({children, style}) => {
    return (
        <Text style={{...styles.title, ...style}}>
            {children}
        </Text>
    );
};

export default TitleText;
