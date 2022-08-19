import React from 'react';
import {StyleSheet, TextInput, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

function TextInputField({onTextChange,  icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name={icon} size={20} />}
            <TextInput style={{width:'100%',marginLeft: 8}}  onChangeText={ text => onTextChange(text)} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        
        padding: 16,
        borderRadius: 8,
        backgroundColor: 'gainsboro',
        flexDirection: 'row',
        alignItems: 'center',
        
    }
})

export default TextInputField;