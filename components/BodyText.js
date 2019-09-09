import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans'
    }
});

const BodyText = ({children, style}) => {
    return (
        <Text style={{...styles.body, ...style}}>
            {children}
        </Text>
    );
};

export default BodyText;
