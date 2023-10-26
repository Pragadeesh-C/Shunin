import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'container/Login';
import Register from 'container/Register';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

