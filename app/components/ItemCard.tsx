import React from 'react';
import { View,StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import  {GestureHandlerRootView, Swipeable}  from 'react-native-gesture-handler';


function ItemCard(props) {
    //const item = props.item
   // console.log(props.rednderRightActions)
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={ props.rednderRightActions}>
                <TouchableHighlight 
                    underlayColor={'gainsboro'}
                    onPress={props.onPress}>
                    <View style={styles.container}>
                        <Image  source={{uri: props.image}} style={styles.image}/>
                        <View style={{padding: 16}}>
                            <Text style={styles.itemName}> {props.name}</Text>
                            <Text style={styles.price}> Birth Year: {props.price}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin:16,
        borderRadius: 16,
        overflow: 'hidden',
        
    },
    image: {
        width:'100%', 
        height: 150,
        // borderTopLeftRadius: 16,
        // borderTopRightRadius: 16,
    },
    itemName: {
        
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        
        fontSize: 24,
        fontWeight: '500',
        color: 'aqua'
    }
    
})

export default ItemCard;