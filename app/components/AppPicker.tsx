import React,{useState} from 'react';
import {Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function AppPicker({icon, placeholder, items, onItemSelect}) {
    const [modalVisible,setModalVisible] = useState(false)
   
    return (
        <>
            <TouchableHighlight  underlayColor={'gainsboro'}  onPress={ ()=> {
                console.log('true')
                setModalVisible(true)} }>
            <View style={styles.container}>
                { icon && <MaterialCommunityIcons name={icon} size={20} />}
            <Text style={styles.placeholder}>
                    {placeholder}
            </Text>
            <MaterialCommunityIcons name='chevron-down' size={20} />
            </View>
            </TouchableHighlight>
            <Modal visible={modalVisible} animationType='slide'>
                <Button title='close' onPress={()=> setModalVisible(false)}/>
                <FlatList 
                    data={items}
                    keyExtractor={(item)=> item.value.toString()}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={ () => {
                            setModalVisible(false)
                            onItemSelect(item)
                            }}>

                            <ModalItems item={item}/>
                        </TouchableOpacity>
                    )}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container:{

        padding: 16,
        borderRadius: 8,
        backgroundColor: 'gainsboro',
        flexDirection: 'row',
        alignItems: 'center',

    },
    placeholder:{
        flex:1,
        marginLeft: 8,
    }
})



function ModalItems({item}) {
    return (
        <View style={modalStyles.container}>
            <Text>{item.name}</Text>
        </View>
    );
}

const modalStyles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})



export default AppPicker;