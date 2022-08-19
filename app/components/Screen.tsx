import React from 'react';
import {StyleSheet, View,StatusBar } from 'react-native';

function Screen(props) {
    return (
        <View style={[styles.container, {backgroundColor: props.backgroundColor} ]}>
            {props.children}
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
       // top: StatusBar.currentHeight,
        flex:1,
    }
})

export default Screen;