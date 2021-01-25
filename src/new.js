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

const New = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <ImageBackground
          style={styles.image}
          source={require('../img/image22.png')}
        />
      </View>
      <ScrollView style={styles.scrollArea}>
        <View style={styles.textInputContainer}>
          <ImageBackground
            style={styles.image23}
            source={require('../img/image23.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textTitile}>
            Danh sách địa chỉ các bưu cục Viet Nam Post tại Bạc Liêu
          </Text>
          <Text style={styles.text}>
            Nhu cầu chuyển phát nhanh của người dân ngày càng cao nên VN Post đã
            có rất nhiều địa điểm nhận và gửi đồ, chúng ta cùng xem địa chỉ của
            các bưu cục tại Bạc Liêu nhé. Vận chuyển hàng hóa qua Vietnam Post
            đối với những đơn hàng lớn, nhiều, liên tục hằng ngày, những đơn
            hàng cod chuyển phát nhanh nhất. Đối với khách hàng gửi lẻ vui lòng
            ra điểm giao dịch chuyển phát nhanh của các bưu cục Vietnam Post gần
            nhất. Hãy đăng ký ngay các gói cước 4g vinaphone để có thể theo dõi
            đơn hàng của mình một cách dễ dàng nhất nhé
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default New;
