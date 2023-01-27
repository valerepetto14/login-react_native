import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, ImageBackground, Dimensions, Icon } from 'react-native';
import Constants from "expo-constants";
import { Button } from 'native-base';


const LoginScreen = () => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}
            showsHorizontalScrollIndicator={false}
        >
            <ImageBackground source={require('../../assets/login1.png')} style={styles.bg}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 50, marginLeft: 20}}>Login</Text>
            </ImageBackground>     
            <View style={styles.bottomView}>
                <View style={{padding:  40}}>
                    <Text style={styles.welcome}>Welcome</Text>
                    <Text>Dont't have an account?
                        <Text style={{color: '#4632A1', fontSize:15, fontWeight:'bold'}}> Register now</Text>
                    </Text>
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Email"
                            style={{borderBottomWidth: 1, borderBottomColor: '#4632A1', marginTop: 25, fontSize:20}}
                        />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={true}
                            style={{borderBottomWidth: 1, borderBottomColor: '#4632A1', marginTop: 25, fontSize:20}}
                        />
                        <View style={{height: 100, justifyContent: 'center', alignItems:'center'}}>
                            <TouchableOpacity style={styles.buttonSignIn}>
                                <Text style={{color: 'white', fontSize: 20, fontWeight: 'light', textAlign: 'center', marginTop: 10}}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{textAlign: 'center', marginTop: 20}}>Or</Text>
                            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                                <TouchableOpacity style={{backgroundColor: 'white', width: 50, height: 50, borderRadius: 50, marginRight: 20}}>
                                    <Image source={require('../../assets/google.png')} style={{width: 40, height: 40, marginLeft: 15, marginTop: 10}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    welcome : {
        color: '#4632A1',
        fontSize: 30,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white'
    },
    bg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2.5,
    },
    bottomView: {
        flex: 1,
        backgroundColor: 'white',
        bottom: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        marginTop: 50,
    },
    buttonSignIn: {
        backgroundColor: '#4632A1',
        width: Dimensions.get('window').width / 2,
        height: 50,
        borderRadius: 50,
        marginTop: 30,
        //shadow
        shadowColor: '#4632A1',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default LoginScreen;