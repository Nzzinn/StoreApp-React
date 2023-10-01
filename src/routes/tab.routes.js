import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import { useCart } from '../providers/CartContext';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { cart } = useCart(); 

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: 'Home'
        }}
      />
      <Tab.Screen
        name="list"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" size={size} color={color} />
          ),
          tabBarLabel: 'Bag',
          tabBarBadge: cart.length,
        }}
      />
    </Tab.Navigator>
  );
}
