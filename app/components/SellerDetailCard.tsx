import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';

function SellerDetailCard(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.image}}/>
            <View style={{padding:8}}>

            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.detail}>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
       // backgroundColor: 'grey',
        padding: 8,
        flexDirection:'row',
        
    },
    image:{
        borderRadius: 50,
        width:100,
        height: 100,
    },
    name:{
        fontSize: 24,
        fontWeight: '400',
    },
    detail:{
        fontSize: 18,
        fontWeight: '600',
        color: 'grey',
    },
})

export default SellerDetailCard;