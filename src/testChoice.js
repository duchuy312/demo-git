import React from 'react';
import {View} from 'react-native';
import styles from '../style/new.style';
import Backbar from '../view/backBar';
import ChoiceView from '../view/choiceview';

const TestChoice = () => {
  return (
    <View style={styles.container}>
      <Backbar title={'      Tên kỳ thi'} />
      <ChoiceView
        title={'Chọn phương thức đăng ký thi:'}
        optionname1={'Đăng ký bằng mã code'}
        optionname2={'Đăng ký chờ phê duyệt'}
        screen={'TestDetail'}
      />
    </View>
  );
};
export default TestChoice;
