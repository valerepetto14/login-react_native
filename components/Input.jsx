import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput  } from "react-native";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
    },
    input: {
        border : 1,
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
    },
})

export default Input;