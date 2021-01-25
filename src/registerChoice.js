import React from 'react';
import {View} from 'react-native';
import styles from '../style/new.style';
import Backbar from '../view/backBar';
import ChoiceView from '../view/choiceview';
import {useNavigation} from '@react-navigation/native';

const RegisterChoice = () => {
  return (
    <View style={styles.container}>
      <Backbar title={'Đăng Ký khóa học'} />
      <ChoiceView
        title={'Chọn phương thức đăng ký học:'}
        optionname1={'Đăng ký bằng mã code'}
        optionname2={'Đăng ký chờ phê duyệt'}
        screen={'ListOfLesson'}
      />
    </View>
  );
};
export default RegisterChoice;
