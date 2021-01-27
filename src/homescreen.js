import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './home.style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Home = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const navigation = useNavigation();
  console.log(name);
  const LoginConfirm = () => {
    axios
      .post('http://elearning-uat.vnpost.vn/api/authentication', {
        username: name,
        password: pass,
      })
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          navigation.navigate('bottomTab');
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <ImageBackground
          style={styles.logo}
          source={require('../img/logo.png')}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          value={name}
          onChangeText={(nameinput) => setName(nameinput)}
          style={styles.textInput}
          placeholder={'   Tên đăng nhập'}
        />
        <TextInput
          value={pass}
          onChangeText={(passinput) => setPass(passinput)}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder={'   Mật khẩu'}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => LoginConfirm()}>
        <Text style={styles.text}>Đăng Nhập</Text>
      </TouchableOpacity>
      <View style={styles.centerText}>
        <Text>Chưa Có Tài Khoản ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linktext}>Đăng Ký</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={styles.linktext}>Quên Mật Khẩu ?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
