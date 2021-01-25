import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from '../style/lesson.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ClockIcon, StarIcon} from '../svg/icon';
import {scale} from 'react-native-size-matters';
import Backbar from '../view/backBar';

const LessonList = [
  {
    id: '1',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '2',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '3',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '4',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '5',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '6',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '7',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
  {
    id: '8',
    name: 'Chương 1: Tổng quan khóa học',
    less1: 'Bài 1: Giới thiệu, làm quen với phần mềm ',
    less2: 'Bài 2: Quy trình xử lý nghiệp vụ',
    less3: 'Bài 3: Kĩ thuật nâng cao',
    less4: 'Bài 4: Thực hành',
    less5: 'Bài 5: Tổng kết chương',
  },
];

const ListOfLesson = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const navigation = useNavigation();
  const [LessonId, setLessonId] = useState('');
  const renderItem = ({item}) => {
    return (
      <View style={styles.dataLesson}>
        <TouchableOpacity>
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{item.less1}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{item.less2}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{item.less3}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{item.less4}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.title}>{item.less5}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Backbar title1={'Khóa học phát triển kỹ năng'} />
      <FlatList
        data={LessonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={LessonId}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EndTest')}>
        <Text style={styles.buttonText}>Thi cuối khóa</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListOfLesson;
