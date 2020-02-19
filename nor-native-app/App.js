import "react-native-gesture-handler";
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Cuisine from "./screens/Cuisine";
import Distance from "./screens/Distance"
import Price from "./screens/Price";
import Roulette from "./screens/Roulette";
import Spinner from "./screens/Spinner"

import { BlurView } from 'expo-blur';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Night Out Roulette",
            // headerTitleAlign: "center",
            // headerTransparent: true,
            // headerBackground: () => (
            //   <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
            // ),
        
        }}
        />
        <Stack.Screen name="Cuisine" component={Cuisine} />
        {/* <Stack.Screen name='Distance' component={Distance} /> */}
        <Stack.Screen name="Price" component={Price} />
        <Stack.Screen name="Spinner" component={Spinner} />
        <Stack.Screen name="Roulette" component={Roulette} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
