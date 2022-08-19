import React from 'react';
import { View,Text,StyleSheet, TouchableOpacity } from 'react-native';

let color: string

function FullWidthButton(props) {
   // color = props.color
   
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={ [styles.buttonContainer, {backgroundColor: props.color,}]}>
                
                <Text style= { styles.buttonText }>{props.text}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
       
        height: 70,
       
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
       
        //marginHorizontal: 16,
        
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})

export default FullWidthButton;