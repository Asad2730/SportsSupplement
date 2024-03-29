import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  MaterialIcons , FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../utils/colors";
import LogoutUser from '../screens/auth/Logout';
import Products from "../screens/home/Products";
import Cart from "../screens/home/Cart";
import History from "../screens/home/History";


const Tab = createBottomTabNavigator();

export default function HomeNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        headerShown: false,
        tabBarActiveTintColor: colors.secondary_color,
        tabBarStyle: {
          backgroundColor: colors.primary_color,
        },
      }}
    >
      <Tab.Screen
        name="products"
        component={Products}
        options={{
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="view-list" size={size} color={color} />
          ),
        }}
      />
       <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="shopping-cart" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({ color,size }) => (
            <MaterialIcons name="history" size={size} color={color} />
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
