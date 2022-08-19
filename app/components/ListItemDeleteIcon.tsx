import React from 'react';
import { View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteIcon(props) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>

        <View style={{backgroundColor: 'red', width:60,height:'100%', justifyContent: 'center',alignItems: 'center'}}> 
            <MaterialCommunityIcons size={30} name='delete'/>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default ListItemDeleteIcon;