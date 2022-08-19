import { useCameraPermissions } from 'expo-image-picker';
import React,{ useEffect,useState} from 'react';
import {ActivityIndicatorComponent, FlatList,  ImageEditor,  View,Text, ActivityIndicator } from 'react-native';
import ApiRequests from '../api/requests'


import ItemCard from '../components/ItemCard';
import ListItemDeleteIcon from '../components/ListItemDeleteIcon';


import Screen from '../components/Screen'
import UseApi from '../Hooks/UseApi';
import routes from '../Navigation/routes';

const fakeData = [
    {
        id: 1,
        name: 'table',
        price: 100,
        image:'https://reactjs.org/logo-og.png'
    },
    {
        id: 2,
        name: 'chair',
        price: 50,
        image: 'https://reactjs.org/logo-og.png'
    },
]

function ItemsScreen({navigation}) {
    const {items,isloading,error,getData} =UseApi(ApiRequests.getData())
    const [refresh,setRefresh] = useState(false)
    
    useEffect(()=>{
        getData()
        let i:number = 1
        
    },[])

    

    // const deleteItem = item=>{
       
    //    const newItemList = items.filter(i => i.id !== item.id)
       
    //    setItems(newItemList)
    // }

    // const addItems = item=>{
    //     const tempList = items.concat()
    //     tempList.push(item)
       
    //     setItems(tempList)
    // }

    return (
        <Screen backgroundColor= 'ghostwhite' children={
            <>
            
            {error && <Text> error occured</Text>}
            {isloading && <ActivityIndicator animating={true} size={50}/>}
             <FlatList 
            data={items}
            keyExtractor= {item => item.dateOfBirth.toString() + item.name}
            renderItem={({item})=> <ItemCard 
                name={item.name} 
                price = {(item.yearOfBirth) ? item.yearOfBirth : 0} 
                image={item.image} 
                onPress={()=> {
                    navigation.navigate(routes.ITEM_DETAIL_SCREEN,{image:item.image, itemName:item.name, price: item.yearOfBirth})
                }}
                rednderRightActions= {()=> (
                     <ListItemDeleteIcon onPress={()=>deleteItem(item)}/>
                )}
            />}
            refreshing={refresh}
            onRefresh={()=>{
                alert('items updated')
            }}
            />
            </>
        }/>
            
        
    );
}



export default ItemsScreen;