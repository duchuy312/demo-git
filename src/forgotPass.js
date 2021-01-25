import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './home.style';
import {useNavigation} from '@react-navigation/native';

const ForgotPass = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <ImageBackground
          style={styles.logo}
          source={require('../img/logo.png')}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={'   Email'} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Send Email</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.linktext}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ForgotPass;
