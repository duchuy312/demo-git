import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from '../style/new.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import Backbar from '../view/backBar';
import Test from './test';

const testDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Backbar title={'Chi tiết cuộc thi'} />
      <View style={styles.logocontainer}>
        <ImageBackground
          style={styles.image}
          source={require('../img/image26.png')}
        />
      </View>
      <ScrollView style={styles.scrollArea}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitile}>
            Kì thi đánh giá kỹ năng nhân viên
          </Text>
          <Text style={styles.text}>Ngày Thi: </Text>
          <Text style={styles.text}>
            Điều kiện tham gia: Nhân viên bộ phận kĩ thuật
          </Text>
          <Text style={styles.text}>Thời gian làm bài:</Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('TestChoice')}
        style={styles.button}>
        <Text style={styles.buttonText}>Register Test</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('SkillTest')}
        style={styles.button}>
        <Text style={styles.buttonText}>Begin Test</Text>
      </TouchableOpacity>
    </View>
  );
};
export default testDetail;
