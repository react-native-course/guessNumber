import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import TitleText from "./TitleText";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: '#000000',
    },
});

const Header = ({title}) => (
    <View style={styles.header}>
        <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
);

export default Header;
