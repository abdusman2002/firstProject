import React from 'react';
import { ImageBackground,StyleSheet, View,Text, Image } from 'react-native';

import FullWidthButton from '../components/FullWidthButton/FullWidthButton';
import Screen from '../components/Screen'
import routes from '../Navigation/routes';

function WelcomeScreen({navigation}) {
    return (
        <Screen backgroundColor= 'grey'  children={
            <>
                <ImageBackground blurRadius={5} style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.logoWithText}>
            <Image style={styles.logo} source={require('../assets/bike.png')}/>
            <Text style={styles.mainText}> my App</Text>
            </View>
            {/* 
            FullWidthButton component has two files one with android and one with ios
            this approch is used when a component has a platform specific code
            the compiler will automatically decide which file to run, depending on the platform
            no need for adding platform checks
            */}
            <View style={{padding: 16,width: '100%'}}>

            <FullWidthButton text="LogIn" color = 'blue' onPress = {()=>{
                
                console.log(' login tapped')
                navigation.navigate(routes.HOME)
                }}/>
            </View>
            <View style={{padding: 16,width: '100%'}}>

            <FullWidthButton text="Sign Up" color = 'pink' onPress = {()=>console.log(' signup tapped')}/>
            </View>
            
        </ImageBackground>
        </>
        }
        
        />
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical:32
      //  bottom:30
        
    },
    
    logoWithText:{
        
        position: 'absolute',
        top: 100,
        alignItems: 'center'
    },
    logo:{
        height:130,
        width:130,
       // position: 'absolute',
        //top: 100,
    },
    mainText: {
        color: 'white',
        fontSize: 28,
       // fontStyle: 'italic',
        fontWeight: '500',
       // position: 'absolute',
       // top: 120,
    }
})

export default WelcomeScreen;