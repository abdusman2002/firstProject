//import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView, Text, View,Image, Button, Alert ,StatusBar} from 'react-native';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';

import {NavigationContainer} from '@react-navigation/native'
import NavigationTheam from './app/Navigation/NavigationTheam';
import AuthNavigator from './app/Navigation/AuthNavigator';









//const { landscape } = useDeviceOrientation()
export default function App() {
 // let x:number = '4'
 // x = '3'
 //console.log(x)
 
  return  <NavigationContainer theme={NavigationTheam}>
  <AuthNavigator/>
</NavigationContainer>
  //<ItemDetailsScreen image='https://reactjs.org/logo-og.png' text='table' price= {150}/>
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <View style={innerViewStyle.container}>
  //     <Text style={{color: 'white'}} numberOfLines={1}  >hello world </Text>
      
  //     <Button 
  //     title='alert'
  //     onPress={()=>Alert.alert('title','message',[
  //       {
  //       text: 'yes',
  //       onPress: ()=> console.log('yes pressed')
  //     },
  //     {
  //       text: 'No',
  //       onPress: ()=> console.log('No pressed')
  //     }
  //     ])}/>
  //     <Button title='promt' 
  //      onPress={()=> Alert.prompt('title','message', text=>console.log(text))}
       
  //      />
  //      <Button title='promt' 
  //      onPress={()=> Alert.prompt('title','message', text=>console.log(text))}
       
  //      />
       
  //     </View>
  //     <StatusBar backgroundColor={'blue'}></StatusBar>
  //   </SafeAreaView>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    //paddingTop: StatusBar.currentHeight,
   // paddingHorizontal:8,
   // width:'50%',
    //height: 10,
    //  alignItems: 'center',        //align items in secondary acis (horizontal in portrait mode)
    //  justifyContent: 'center',    //align items in main axis (vertival in portrait mode)
    //  flexWrap: 'wrap'       //just like flutter wala wrap...row main items aty jaen gy aur jb screen puri ho gai to next row
  },

  
});

const innerViewStyle = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex:0.5,
    flexDirection: 'row',
    padding:16,
    alignContent: 'center',
    alignItems: 'center',        //align items in secondary acis (horizontal in column)
     justifyContent: 'center',    //align items in main axis (vertival in column)
     flexWrap: 'wrap',       //just like flutter wala wrap...row main items aty jaen gy aur jb screen puri ho gai to next row
    height:'50%'}
})

