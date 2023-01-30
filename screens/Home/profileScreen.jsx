import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Dimensions, SafeAreaView} from 'react-native';
import { authStore } from '../../stores/authStore';

const ProfileScreen = () => {
    const { user, setUser } = authStore((state) => state);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/login1.png')} style={styles.bg}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 50, marginLeft: 20}}>Profile</Text>
            </ImageBackground>
            <View style={styles.profileConteiner}>
                <Image
                style={styles.avatar}
                source={{
                    uri:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                }}
                />
                <View style={styles.info}>
                    <Text style={styles.name}>{user}</Text>
                    <Text style={styles.email}>johndoe@email.com</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    email: {
        fontSize: 18,
        color: 'gray',
    },
    bg : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
    },
    profileConteiner : {
        flex: 1,
        bottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2,

        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    info : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProfileScreen;
