import React from 'react';
import { Image,StyleSheet, View,StatusBar, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import ItemCard from '../components/ItemCard';
import Screen from '../components/Screen'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import routes from '../Navigation/routes';

function ViewImageSreen({navigation}) {
    return (
        <Screen backgroundColor= 'grey' children={
            <>
            <Image resizeMode='contain' style={styles.image} source={require('../assets/second.jpg')}/>
            <View style ={styles.backButton}>
            <MaterialCommunityIcons size={30} name='close'/>
            </View>
            <TouchableOpacity style ={styles.deleteButton} onPress={() => navigation.navigate(routes.ACCOUNT_SCREEN)}>
            <MaterialCommunityIcons size={30} name='delete'/>
           
            </TouchableOpacity>
            {/* <TouchableWithoutFeedback style ={styles.deleteButton} onPress={() => console.log('sa')}>
                <View style ={styles.deleteButton}>
            <MaterialCommunityIcons size={30} name='delete'/>
           
            </View>
            </TouchableWithoutFeedback> */}
            
            </>
        }/>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height:'100%',

        
    },
    container: {
        flex:1,
        top:StatusBar.currentHeight,
        backgroundColor: 'grey',
        //justifyContent: 'center',
        
    },
    backButton: {
        // backgroundColor: 'pink',
        // width: 40,
        // height: 40,
       position: 'absolute',
        top: 30,
        left:20,
    },
    deleteButton: {
        // backgroundColor: 'aqua',
        // width: 40,
        // height: 40,
        position: 'absolute',
        top: 30,
        right:20,
    },
})

export default ViewImageSreen;