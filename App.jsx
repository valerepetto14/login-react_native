// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./tabs/Auth"; 
import HomeStack from "./tabs/HomeTabs";

function App() {
  return (
    <NavigationContainer>
        <AuthStack></AuthStack>
    </NavigationContainer>
  );
}

export default App;
