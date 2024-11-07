import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import React from "react";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
