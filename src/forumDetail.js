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
import {useNavigation} from '@react-navigation/native';
import Backbar from '../view/backBar';
const ForumDetail = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Backbar title={'Chi tiết khóa học'} />
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabBarButton}
          onPress={() => navigation.navigate('DetailLesson')}>
          <Text style={{color: '#565656'}}>Nội Dung</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabBarButton}
          onPress={() => navigation.navigate('Documents')}>
          <Text style={{color: '#565656'}}> Tài Liệu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabBarButton}>
          <Text style={{color: '#565656'}}>Thảo Luận</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollArea}>
        <View style={styles.textContainer}>
          <Text style={styles.textTitile}>Forum</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default ForumDetail;
