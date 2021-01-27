import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import New from '../src/new';
import Lesson from '../src/lesson';
import Test from '../src/test';
import User from '../src/user';
import {LessonIcon, UserIcon, TestIcon, NewsIcon} from '../svg/icon';
import {View} from 'react-native';
import DetailNavigation from '../navigation/lessondetail';
import TestDetailNavigation from './testtodetail';

const Tab = createBottomTabNavigator();

function bottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Lesson') {
            iconName = focused ? (
              <LessonIcon color="orange" />
            ) : (
              <LessonIcon color="black" />
            );
          } else if (route.name === 'Test') {
            iconName = focused ? (
              <TestIcon color="orange" />
            ) : (
              <TestIcon color="black" />
            );
          } else if (route.name === 'New') {
            iconName = focused ? (
              <NewsIcon color="orange" />
            ) : (
              <NewsIcon color="black" />
            );
          } else if (route.name === 'User') {
            iconName = focused ? (
              <UserIcon color="orange" />
            ) : (
              <UserIcon color="black" />
            );
          }
          return <View>{iconName}</View>;
        },
        // tabBarVisible: false,
      })}
      tabBarOptions={{
        labelStyle: {fontSize: 20},
        inactiveTintColor: '#707070',
        activeTintColor: 'orange',
        style: {
          height: 70,
          color: 'red',
          paddingBottom: 5,
        },
      }}>
      <Tab.Screen name="Lesson" component={Lesson} />
      <Tab.Screen name="Test" component={TestDetailNavigation} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
  );
}
export default bottomTab;
