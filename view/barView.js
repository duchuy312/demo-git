import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import styles from '../style/new.style';
import {MenuIcon, BellIcon, SearchIcon, DropDownIcon} from '../svg/icon';

export const BarView = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  return (
    <View>
      <View style={styles.searchBar}>
        <TouchableOpacity
          style={styles.iconPosition}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <MenuIcon />
        </TouchableOpacity>
        <View style={styles.searchInput}>
          <SearchIcon style={{marginLeft: scale(8)}} />
          <TextInput
            style={{fontSize: scale(15)}}
            placeholder={'Search . . .'}
          />
        </View>
        <TouchableOpacity style={styles.iconPosition}>
          <BellIcon />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.bottomView}>
          <View style={styles.modalBottomView}>
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setDropDown1(!dropDown1)}>
              <Text style={styles.modalText}>Khóa học của tôi</Text>
              <DropDownIcon />
            </TouchableOpacity>
            {dropDown1 ? (
              <View style={styles.listdropdown}>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>Khóa học đang học</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>Khóa học chưa học</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>
                    Khóa học đã hoàn thành
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
            <TouchableOpacity
              style={styles.dropdown}
              onPress={() => setDropDown2(!dropDown2)}>
              <Text style={styles.modalText}>Danh mục khóa học</Text>
              <DropDownIcon />
            </TouchableOpacity>
            {dropDown2 ? (
              <View style={styles.listdropdown}>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>Danh mục 1</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>Danh mục 2</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.dropdowntext}>Danh mục 3</Text>
                </TouchableOpacity>
              </View>
            ) : null}
            <TouchableOpacity
              style={styles.hideButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default BarView;
