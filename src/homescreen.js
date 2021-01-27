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
      .get('https://600685103698a80017de189e.mockapi.io/api/demo/UsersData', {
        params: {
          username: name,
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.data[0].pass === pass) {
          navigation.navigate('DetailNavigation');
        } else {
          console.log(
            'Đăng nhập thất bại, vui lòng kiểm tra lại tên tài khoản hoặc mật khẩu !!!',
          );
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
