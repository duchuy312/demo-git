import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lesson from '../src/lesson';
import LessDetail from '../src/lessdetail';
import bottomTab from './bottomstack';
import TopDetailNavigation from './topDetailStack';
import {useNavigation, useRoute } from '@react-navigation/native';
import Test from '../src/test';

const Stack = createStackNavigator();

function DetailNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="bottomTab" component={bottomTab} />
      <Stack.Screen name="DetailLesson" component={TopDetailNavigation} />
      <Stack.Screen name="LessDetail" component={LessDetail} />
    </Stack.Navigator>
  );
}

export default DetailNavigation;
