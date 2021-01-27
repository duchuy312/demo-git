import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './home.style';
import {useNavigation} from '@react-navigation/native';
import {Icon} from '../svg/icon';

const Begin = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <ImageBackground
          style={styles.image}
          source={require('../img/asset1.png')}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Begin</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Begin;
