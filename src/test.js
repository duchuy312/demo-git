import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from '../style/new.style';
import {useNavigation} from '@react-navigation/native';
import {CalendarIcon, ClockIcon, StarIcon} from '../svg/icon';
import {scale} from 'react-native-size-matters';
import BarView from '../view/barView';

const LessonList = [
  {
    id: '1',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '2',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '3',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '4',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '5',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '6',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '7',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
  {
    id: '8',
    name: 'Bài thi đánh giá nâng bậc',
    image: require('../img/image11.png'),
    time: '28/12/2019 - 30/12/2020',
    testtime: '60 phút',
  },
];

const Test = () => {
  const navigation = useNavigation();
  const [LessonId, setLessonId] = useState('');
  const renderItem = ({item}) => {
    const backgroundColor = item.id === LessonId ? '#2C2F2E' : 'white';
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TestDetail', {
            time: item.time,
            testtime: item.testtime,
          })
        }
        style={[styles.itemTest, {backgroundColor}]}>
        <Image style={styles.imageTest} source={item.image} />
        <View style={styles.viewTest}>
          <Text style={styles.titleTest}>{item.name}</Text>
          <View style={styles.iconAndText}>
            <CalendarIcon />
            <Text style={styles.textTest}>{item.time}</Text>
          </View>
          <View style={styles.iconAndText}>
            <ClockIcon />
            <Text style={styles.textTest}>{item.testtime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <BarView />
      <FlatList
        style={{marginTop: scale(20)}}
        data={LessonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={LessonId}
        numColumns={2}
      />
    </View>
  );
};
export default Test;
