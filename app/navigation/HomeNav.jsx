import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  MaterialIcons , FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import LogoutUser from '../screens/auth/Logout';
import Products from "../screens/home/Products";


const Tab = createBottomTabNavigator();

export default function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShown: false,
        tabBarActiveTintColor: colors.secondary_light,
        tabBarStyle: {
          backgroundColor: colors.primary_color,
        },
      }}
    >
      <Tab.Screen
        name="products"
        component={Products}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="logout"
        component={LogoutUser}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="sign-out-alt" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
