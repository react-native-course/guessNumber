import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#000000',
        fontSize: 18,
    },
});

const Header = ({title}) => (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
);

export default Header;
