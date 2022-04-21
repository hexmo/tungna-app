import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../router/BottomMenuNavigation";
import Login from "../screens/auth/Login";
import SignUp from "../screens/auth/SignUp";

import ProductDetail from "../screens/product/ProductDetail";
import ProductsList from "../screens/product/ProductsList";

import { isLoggedIn } from "../services/authServices";

const Stack = createNativeStackNavigator();

const MainStackNavigation = () => {
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    isLoggedIn()
      .then((res) => {
        setAuthStatus(true);
      })
      .catch((error) => {
        setAuthStatus(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <></>;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!authStatus ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ProductsList"
              component={ProductsList}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ProductsList"
              component={ProductsList}
              options={{ headerShown: true }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;

const styles = StyleSheet.create({});
