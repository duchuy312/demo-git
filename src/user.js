import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './home.style';
import {useNavigation} from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <View style={styles.circle}>
          <ImageBackground
            style={styles.circlelogo}
            source={require('../img/logo.png')}
          />
        </View>
        <Text>User</Text>
      </View>
      <View style={styles.textInputContainer} />
    </View>
  );
};
export default User;
