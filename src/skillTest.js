import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
} from 'react-native';
import styles from '../style/lesson.style';
import {useNavigation} from '@react-navigation/native';
import {TimeIcon} from '../svg/icon';
import Backbar from '../view/backBar';
import axios from 'axios';

const SkillTest = () => {
  const navigation = useNavigation();
  const [LessonId, setLessonId] = useState('');
  const [data, setData] = useState([]);
  const [dataid, setDataid] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState([]);
  const [minute, setMinute] = useState(60 - 1);
  const [counter, setCounter] = useState(59);
  const [yourAnswer, setYourAnswer] = useState([]);
  const [checked, setChecked] = useState(false);
  const [point, setPoint] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) {
      setCounter(59);
      setMinute(minute - 1);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api.php?amount=10.&category=27&type=multiple')
      .then((response) => {
        var correct = [];
        for (let h = 0; h < response.data.results.length; h++) {
          for (
            let i = response.data.results[h].incorrect_answers.length - 1;
            i > 0;
            i--
          ) {
            correct[h] = response.data.results[h].correct_answer;
            response.data.results[h].incorrect_answers[3] = correct[h];
          }
          shuffleArray(response.data.results[h].incorrect_answers);
        }
        setData(response.data.results);
        setCorrectAnswer(correct);
        console.log(data);
        console.log(correct);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(() => {
        console.log('finaly');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  function checkCorrect() {
    var count = 0;
    for (var i = 0; i < yourAnswer.length; i++) {
      if (yourAnswer[i] === correctAnswer[i].toString()) {
        count = count + 1;
      }
    }
    setPoint(count);
  }

  function addAnswer(stt, choose) {
    yourAnswer[stt] = choose;
    console.log(yourAnswer);
  }
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={styles.question}>
          {index + 1}. {item.question}
        </Text>
        <View style={styles.answer}>
          <View style={styles.checkAndText}>
            <View style={styles.circle}>
              <TouchableOpacity
                onPress={() => addAnswer(index, item.incorrect_answers[0])}
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      yourAnswer[index] === item.incorrect_answers[0]
                        ? '#56ff3c'
                        : 'white',
                  },
                ]}
              />
            </View>
            <Text style={styles.answertext}>{item.incorrect_answers[0]}</Text>
          </View>
          <View style={styles.checkAndText}>
            <View style={styles.circle}>
              <TouchableOpacity
                onPress={() => addAnswer(index, item.incorrect_answers[1])}
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      yourAnswer[index] === item.incorrect_answers[1]
                        ? '#56ff3c'
                        : 'white',
                  },
                ]}
              />
            </View>
            <Text style={styles.answertext}>{item.incorrect_answers[1]}</Text>
          </View>
        </View>
        <View style={styles.answer}>
          <View style={styles.checkAndText}>
            <View style={styles.circle}>
              <TouchableOpacity
                onPress={() => addAnswer(index, item.incorrect_answers[2])}
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      yourAnswer[index] === item.incorrect_answers[2]
                        ? '#56ff3c'
                        : 'white',
                  },
                ]}
              />
            </View>
            <Text style={styles.answertext}>{item.incorrect_answers[2]}</Text>
          </View>
          <View style={styles.checkAndText}>
            <View style={styles.circle}>
              <TouchableOpacity
                onPress={() => addAnswer(index, item.incorrect_answers[3])}
                style={[
                  styles.item,
                  {
                    backgroundColor:
                      yourAnswer[index] === item.incorrect_answers[3]
                        ? '#56ff3c'
                        : 'white',
                  },
                ]}
              />
            </View>
            <Text style={styles.answertext}>{item.incorrect_answers[3]}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Backbar title1={'Bài thi kết thúc khóa học'} />
      <View style={styles.time}>
        <View style={styles.iconAndText}>
          <TimeIcon />
          <Text style={styles.timeCountdown}>
            {minute} : {counter.toString().padStart(2, '0')}
          </Text>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        extraData={dataid}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Bạn có chắc muốn nộp bài và xem kết quả
            </Text>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                navigation.navigate('ResultLessonTest', {yourpoint: point});
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        onPress={() => [checkCorrect(), setModalVisible(true)]}
        style={styles.button}>
        <Text style={styles.buttonText}>Nộp bài</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SkillTest;
