import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import styles from '../style/new.style';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ClockIcon, StarIcon} from '../svg/icon';
import {scale} from 'react-native-size-matters';
import BarView from '../view/barView';
import axios from 'axios';

const Lesson = () => {
  const navigation = useNavigation();
  const [LessonId, setLessonId] = useState('');
  const [dataCourse, setDataCourse] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [time, setTime] = useState([]);
  const [getting, setGetting] = useState(false);
  const [token, setToken] = useState('');

  const getCourse = async () => {
    await axios
      .post('http://elearning-uat.vnpost.vn/api/authentication', {
        username: 'admin',
        password: 'Abc12345',
      })
      .then(function (response) {
        console.log(response.data.data.token);
        setToken(response.data.data.token);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    await axios
      .post(
        'http://elearning-uat.vnpost.vn/api/course',
        {name: '', categoryId: null},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((response) => {
        setGetting(true);
        console.log(response);
        console.log(response.data.data);
        setDataCourse(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        console.log('finaly');
        setGetting(false);
      });
  };
  useEffect(() => {
    getCourse();
  }, []);
  const renderFooter = () => {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  };
  const renderItem = ({item}) => {
    const backgroundColor = item.id === LessonId ? '#2C2F2E' : 'white';
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailLesson')}
        style={[styles.item, {backgroundColor}]}>
        <View style={styles.imageCourseContainer}>
          <Image
            style={styles.imageLess}
            source={require('../img/image11.png')}
          />
        </View>
        <View style={styles.detailcourse}>
          <Text style={styles.title} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.text}>{item.poscodeName}</Text>
          <View style={styles.iconAndText}>
            <ClockIcon />
            <Text style={styles.text}>
              {item.courseConfig.start.slice(0, 10)} -{' '}
              {item.courseConfig.end.slice(0, 10)}
            </Text>
          </View>
          <View style={styles.iconAndText}>
            <View style={styles.bar}>
              <View style={styles.processbar} />
            </View>
            <Text style={[styles.text, {color: 'orange'}]}>70 %</Text>
          </View>
          <View style={styles.iconAndText}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <BarView />
      <FlatList
        ListFooterComponent={renderFooter}
        style={{marginTop: scale(12)}}
        refreshing={getting}
        onRefresh={() => getCourse()}
        data={dataCourse}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        extraData={LessonId}
      />
    </View>
  );
};
export default Lesson;
