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

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const RegisterConfirm = () => {
    axios
      .post('https://600685103698a80017de189e.mockapi.io/api/demo/UsersData', {
        username: name,
        email: email,
        phone: phone,
        pass: pass,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  const ClearInput = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPass('');
    setPass1('');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logocontainerRegister}>
        <ImageBackground
          style={styles.logo}
          source={require('../img/logo.png')}
        />
      </View>
      <View style={styles.textInputContainerRegister}>
        <Text style={styles.titleText}>Đăng Ký tài Khoản</Text>
        <TextInput
          value={name}
          onChangeText={(nameinput) => setName(nameinput)}
          style={styles.textInput}
          placeholder={'   Tên đăng nhập'}
        />
        <TextInput
          value={email}
          onChangeText={(emailinput) => setEmail(emailinput)}
          style={styles.textInput}
          placeholder={'   Email'}
        />
        <TextInput
          value={phone}
          onChangeText={(phoneinput) => setPhone(phoneinput)}
          style={styles.textInput}
          placeholder={'   Số Điện Thoại'}
        />
        <TextInput
          value={pass}
          onChangeText={(passinput) => setPass(passinput)}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder={'   Mật khẩu'}
        />
        <TextInput
          value={pass1}
          onChangeText={(passinput1) => setPass1(passinput1)}
          style={styles.textInput}
          secureTextEntry={true}
          placeholder={'   Nhập lại Mật khẩu'}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => [RegisterConfirm(), ClearInput()]}>
        <Text style={styles.text}>Đăng Ký</Text>
      </TouchableOpacity>
      <View style={styles.centerText}>
        <Text>Đã Có Tài Khoản ? </Text>
        <TouchableOpacity onPress={navigation.goBack()}>
          <Text style={styles.linktext}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.linktext}>Quên Mật Khẩu ?</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;
