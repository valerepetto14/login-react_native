import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import Constants from "expo-constants";
import { useNavigation } from '@react-navigation/native';

const LandingScreen = () => {
    
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/login1.png')} style={styles.bg}>
            </ImageBackground>
            <Image source={require('../../assets/logo.png')} style={{width : 150, height : 150}}></Image>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.text}>Get started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "space-evenly",
        alignItems : "center",
    },
    bg : {
        width : "100%",
        height : "100%",
        position : "absolute",
        top : 0,
    },
    text: {
        fontFamily: "poppins",
        fontWeight: "light",
        color: "black",
        fontSize: 20,
        textAlign: "center",
    },
    title : {
        fontFamily: "poppins",
        fontWeight: "light",
        color: "white",
        fontSize: 30,
    },
    button : {
        borderRadius : 10,
        width : 200,
        padding : 10,
        backgroundColor : "white",
    }
})

export default LandingScreen;