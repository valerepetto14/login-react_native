import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Products from "../screens/Home/Products";

const Stack = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Products"
        >
            <Stack.Screen 
            name="Products" 
            component={Products} 
            options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

export default HomeStack;