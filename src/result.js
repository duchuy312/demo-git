import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../style/lesson.style';
import {useNavigation, useRoute} from '@react-navigation/native';

const ResultLessonTest = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.titleResult}>Kết quả bài thi cuối khóa</Text>
      <View style={styles.logocontainer}>
        <View style={styles.bigCircle}>
          <Text style={styles.textResult}>Result</Text>
          <Text style={styles.textResult}>
            {route.params.yourpoint * 10}/100
          </Text>
          <Text style={styles.textResult}>
            {route.params.yourpoint < 6 ? 'YOU FAIL !!!' : 'YOU PASS !!!'}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ResultLessonTest;
