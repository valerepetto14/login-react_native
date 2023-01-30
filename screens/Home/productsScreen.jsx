import React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, Dimensions, SafeAreaView} from 'react-native';
import { authStore } from '../../stores/authStore';


const productos = [
    {
        id: 1,
        name: 'Producto 1',
        price: 100,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 2,
        name: 'Producto 2',
        price: 200,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 3,
        name: 'Producto 3',
        price: 300,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 4,
        name: 'Producto 4',
        price: 400,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 5,
        name: 'Producto 5',
        price: 500,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
        id: 6,
        name: 'Producto 6',
        price: 600,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
]

const ProfileScreen = () => {
    const { user, setUser } = authStore((state) => state);
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/login1.png')} style={styles.bg}>
                <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 50, marginLeft: 20}}>Home</Text>
                <Image
                style={styles.avatar}
                source={{
                    uri:
                    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                }}
                />
            </ImageBackground>
            <View style={styles.productConteiner}>
                {productos.map((producto) => {
                    return(
                        <View style={styles.product}>
                            <Image
                                style={styles.productImage}
                                source={{
                                    uri: producto.image,
                                }}
                            />
                            <View style={styles.info}>
                                <Text style={styles.name}>{producto.name}</Text>
                                <Text style={styles.price}>{producto.price}</Text>
                            </View>
                        </View>
                    )
                })}
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
    bg : {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 75,
        marginVertical: 20,
        marginRight: 20,
        marginTop: 47,
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
    productConteiner : {
        display: 'flex-wrap',
        bottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 3,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    product: {
        width: Dimensions.get('window').width - 40,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    info : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default ProfileScreen;
