import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/auth/LandingScreen";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Home"
        >
            <Stack.Screen 
            name="Home" 
            component={LandingScreen} 
            options={{
                headerShown: false,
            }} />
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
}

export default AuthStack;