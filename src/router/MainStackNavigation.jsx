import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../router/BottomMenuNavigation";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

import ProductDetail from "../screens/product/ProductDetail";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
