// In App.js in a new project
import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./stacks/Auth"; 
import HomeStack from "./stacks/HomeTabs";
import { authStore } from "./stores/authStore";

function App() {
  const { user, setUser } = authStore((state) => state);
  
  return (
    <NavigationContainer>
      {user ? <HomeStack/> : <AuthStack/>}
    </NavigationContainer>
  );
}

export default App;
