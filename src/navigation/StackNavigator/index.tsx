import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from 'container/Login';
import Register from 'container/Register';
import ProjectAdd from 'container/ProjectAdd';
import TaskAdd from 'container/AddTask';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={TaskAdd} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

