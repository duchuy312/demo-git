import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Test from '../src/test';
import testDetail from '../src/testDetail';
import TestChoice from '../src/testChoice';
import SkillTest from '../src/skillTest';
import ResultLessonTest from '../src/result';

const Stack = createStackNavigator();

function TestDetailNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="TestDetail" component={testDetail} />
      <Stack.Screen name="TestChoice" component={TestChoice} />
      <Stack.Screen name="SkillTest" component={SkillTest} />
      <Stack.Screen name="ResultLessonTest" component={ResultLessonTest} />
    </Stack.Navigator>
  );
}

export default TestDetailNavigation;
