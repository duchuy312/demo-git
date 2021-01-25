import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import styles from '../style/new.style';
import {BackIcon} from '../svg/icon';
import {useNavigation} from '@react-navigation/native';

export const Backbar = (props) => {
  const navigation = useNavigation();
  const {title, title1} = props;
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.iconPosition}>
        <BackIcon />
      </TouchableOpacity>
      <Text style={styles.topTittle1}>{title1}</Text>
      <Text style={styles.topTittle}>{title}</Text>
    </View>
  );
};
export default Backbar;
