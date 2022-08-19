import React,{useEffect, useState} from 'react';
import { View,Image,Text,StyleSheet,StatusBar, Switch } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

import SellerDetailCard from '../components/SellerDetailCard';
import Screen from '../components/Screen';
import TextInputField from '../components/TextInputField';
import AppPicker from '../components/AppPicker';


const fakeItems = [
    {name: 'chair', value: 1},
    {name: 'table', value: 2},
    {name: 'bed', value: 3},
]

function ItemDetailsScreen({route}) {
    const item = route.params

    const getRequest = async()=>{
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if( !result.granted ){
            alert('permission not granted!!!')
        } 
    }

    useEffect(()=>{
        getRequest()
    },[])


    const [firstName,setFirstName] = useState('')
    const [isSwitchOn,setIsSwitchOn] = useState(false)
    const [selectedItem,setSelectedItem] = useState(fakeItems[0])
    return (
        <Screen backgroundColor= 'white' children={
            <>
                <Image  source={{uri: item.image}} style={styles.image}/>
                <View style={{padding: 16}}>

                <Text style={styles.itemName}> {item.text}</Text>
                <Text style={styles.price}> ${item.price}</Text>
                </View>
                <SellerDetailCard image={item.image} name='Abdullah Usman' description='5  listings'/>
                <View style={{padding: 8}}>

                    <TextInputField icon='email' placeholder='First Name' onTextChange={(text: string)=> setFirstName(text)}/>
                    <Text>{firstName}</Text>
                </View>
                <Switch value={isSwitchOn} onValueChange={value => setIsSwitchOn(value) }/>
                <AppPicker items={fakeItems} onItemSelect={(item)  =>  {
                    
                    setSelectedItem(item)
                    }} icon='apps' placeholder={selectedItem.name}/>
                
           </>
        }/>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex:1,
        top: StatusBar.currentHeight,
    },
    image: {
        width:'100%', 
        height: '30%',
        
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

export default ItemDetailsScreen;