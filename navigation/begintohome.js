import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Begin from '../src/beginScreen';
import Home from '../src/homescreen';
import bottomTab from '../navigation/bottomstack';
import Register from '../src/registerScreen';
import ForgotPass from '../src/forgotPass';

const Stack = createStackNavigator();

function beginNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Begin" component={Begin} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="bottomTab" component={bottomTab} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPass" component={ForgotPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default beginNavigation;
