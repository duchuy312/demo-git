import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../style/new.style';
import {CheckIcon} from '../svg/icon';
import {useNavigation} from '@react-navigation/native';

export const ChoiceView = (props) => {
  const {title, optionname1, optionname2, screen} = props;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal3Visible, setModal3Visible] = useState(false);
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const [color1, setColor1] = useState('white');
  const [color2, setColor2] = useState('white');
  const [pressed, setPressed] = useState(false);
  const [verify, setVerify] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [textModal, setTextModal] = useState('');
  const [code, setCode] = useState('');
  function OtpCode() {
    var otp = Math.floor(100000 + Math.random() * 900000);
    setVerificationCode(otp);
  }
  console.log(verificationCode);
  console.log(textModal);
  // const checkPressed = async () => {
  //   await setPressed((prevState) => ({
  //     pressed: !prevState.pressed,
  //   })); // setState is async function.

  //   // Call function type prop with return values.
  // };
  const changeColor = () => {
    if (!pressed) {
      setPressed(true);
      setColor1('#48e650');
      setColor2('white');
    } else {
      setPressed(false);
      setColor1('white');
      setColor2('#48e650');
    }
  };
  function checkCode(code1, code2) {
    console.log('check');
    console.log(code1);
    console.log(code2);
    if (code1 === code2) {
      setModalVisible(true);
    } else {
      setModal3Visible(true);
    }
  }
  // const changeColor2 = () => {
  //   if (!pressed2) {
  //     setPressed2(true);
  //     setColor2('#48e650');
  //   } else {
  //     setPressed2(false);
  //     setColor2('white');
  //   }
  // };
  console.log(code);
  return (
    <View style={styles.choiceContainer}>
      <Text style={styles.textTitile}>{title}</Text>
      <View style={styles.choice}>
        <View style={styles.circle}>
          <TouchableOpacity
            onPress={() => [
              changeColor(),
              OtpCode(),
              setModal2Visible(true),
              setShouldShow(!shouldShow),
              setTextModal('Đăng ký thành công!'),
            ]}
            style={[styles.circleTouch, {backgroundColor: color1}]}
          />
        </View>
        <Text style={styles.textchoice}>{optionname1}</Text>
      </View>
      <View style={styles.choice}>
        <View style={styles.circle}>
          <TouchableOpacity
            onPress={() => [
              changeColor(),
              setShouldShow(false),
              setTextModal(
                'Gửi đăng ký thành công! Hãy chờ được phê duyệt để vào thi',
              ),
            ]}
            style={[styles.circleTouch, {backgroundColor: color2}]}
          />
        </View>
        <Text style={styles.textchoice}>{optionname2}</Text>
      </View>
      {shouldShow ? (
        <View style={styles.codeInput}>
          <TextInput
            value={code}
            onChangeText={(any) => setCode(any)}
            style={styles.codeText}
            placeholder={' Nhập code'}
          />
        </View>
      ) : null}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CheckIcon />
            <Text style={styles.modalText}>{textModal}</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                navigation.navigate(screen);
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modal2View}>
            <Text style={styles.modal2Text}>Your Verification Code Is:</Text>
            <Text style={styles.modal2Text}>{verificationCode}</Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModal2Visible(!modal2Visible);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal3Visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Mã lớp bạn nhập không chính xác Hãy thử lại!
            </Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModal3Visible(!modal3Visible);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => checkCode(verificationCode.toString(), code.toString())}>
        <Text style={styles.buttonText}>Gửi yêu cầu</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ChoiceView;
