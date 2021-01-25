import React, {useEffect, useState} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';

const LessDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [nameCourse, setNameCourse] = useState('');
  return (
    <View style={styles.container}>
      <Backbar title={'Chi tiết khóa học'} />
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarButton}>
          <Text style={{color: '#565656'}}>Nội Dung</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabBarButton}
          onPress={() => navigation.navigate('Documents')}>
          <Text style={{color: '#565656'}}> Tài Liệu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabBarButton}
          onPress={() => navigation.navigate('Forum')}>
          <Text style={{color: '#565656'}}>Thảo Luận</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logocontainer}>
        <ImageBackground
          style={styles.image}
          source={require('../img/image15.png')}
        />
      </View>
      <ScrollView style={styles.scrollArea}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitile}>Khóa học phát triển hệ thống</Text>
          <Text style={styles.textTitile}>{nameCourse}</Text>
          <Text style={styles.text}>
            “Sợ nói sai” chính là nỗi sợ thường gặp nhất của người Việt khi học
            tiếng Anh. Từ việc sợ bị cười chê vì nói sai sẽ dẫn đến việc ngại
            nói, lâu ngày người học sẽ bị “cứng” miệng – tức là dù nghe hiểu
            nhưng không biết nói ra sao....
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterChoice')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LessDetail;
