import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Cart from '../screens/Cart';
import { useCart } from '../providers/CartContext';
import Store from '../screens/Store';
import ConfirmLogout from '../components/ConfirmLogout';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const { cart } : any = useCart(); 

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="store"
        component={Store}
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

      <Tab.Screen
        name='logout'
        component={ConfirmLogout}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name='log-out' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
