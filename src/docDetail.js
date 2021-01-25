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
const DocDetail = () => {
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

        <TouchableOpacity style={styles.tabBarButton}>
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
          <Text style={styles.textTitile}>Documents</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default DocDetail;
