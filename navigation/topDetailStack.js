import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Lesson from '../src/lesson';
import LessDetail from '../src/lessdetail';
import bottomTab from './bottomstack';
import DocDetail from '../src/docDetail';
import ForumDetail from '../src/forumDetail';
import {scale} from 'react-native-size-matters';
import Backbar from '../view/backBar';
import RegisterChoice from '../src/registerChoice';
import ListOfLesson from '../src/listOfLesson';
import EndTest from '../src/testBegin';
import ResultLessonTest from '../src/result';

const Stack = createStackNavigator();

function TopDetailNavigation() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="DetailLesson" component={LessDetail} />
      <Stack.Screen name="Documents" component={DocDetail} />
      <Stack.Screen name="Forum" component={ForumDetail} />
      <Stack.Screen name="RegisterChoice" component={RegisterChoice} />
      <Stack.Screen name="ListOfLesson" component={ListOfLesson} />
      <Stack.Screen name="EndTest" component={EndTest} />
      <Stack.Screen name="ResultLessonTest" component={ResultLessonTest} />
    </Stack.Navigator>
  );
}

export default TopDetailNavigation;
