import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screens/Login';
import Main from './screens/Main';

const Stack = createStackNavigator({
  login: {
    screen: Login
  },
  main: {
    screen: Main
  }
}, {
  initialRouteName: 'login',
  headerMode: 'none',
  navigationOptions: {
    headerShown: false
  }
});

export default createAppContainer(Stack);