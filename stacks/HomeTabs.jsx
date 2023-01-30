import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from "../screens/Home/productsScreen";
import ProfileScreen from "../screens/Home/profileScreen";
const Stack = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Products"
        screenOptions={{
            headerShown: false,
            tabBarStyle: {
                marginBottom: 10,
                width: '90%',
                alignSelf: 'center',
                borderRadius: 30,
                backgroundColor: '#4632A1',
                marginBottom: 20,
            },
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
            },
        }}
        >
        <Stack.Screen 
            name="Home" 
            component={ProductScreen} 
        />
         <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
        />

        </Stack.Navigator>
    );
}

export default HomeStack;