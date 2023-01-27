import { View, Text, StyleSheet } from 'react-native';

const Products = () => {
    return (
        <View style={styles.container}>
            <Text>Products</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Products;