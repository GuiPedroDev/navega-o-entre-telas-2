import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/index'
import Details from '../screens/Details/index';

export default function Route(){
const stack = createStackNavigator();
return (
  <NavigationContainer>
    <stack.Navigator>
      <stack.Screen name="Home" component={Home}/>
      <stack.Screen name="Details" component={Details}/>
    </stack.Navigator>

  </NavigationContainer>
);
}