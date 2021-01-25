import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: scale(660),
    width: scale(350),
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    marginLeft: scale(5),
  },
  dataLesson: {
    marginTop: scale(10),
    height: scale(150),
    width: scale(350),
    borderBottomWidth: scale(5),
  },
  dataContainer: {
    height: scale(355),
    width: scale(350),
    backgroundColor: '#f0f0f0',
  },
  image: {
    flex: 1,
    height: scale(660),
    width: scale(350),
  },
  button: {
    backgroundColor: 'orange',
    width: scale(290),
    height: scale(50),
    alignSelf: 'center',
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: scale(20),
    color: 'white',
  },
  item: {
    height: scale(16),
    width: scale(16),
    borderRadius: scale(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    height: scale(18),
    width: scale(18),
    borderRadius: scale(9),
    backgroundColor: '#3b7ad0',
    justifyContent: 'center',
    padding: scale(5),
    marginVertical: scale(8),
    marginHorizontal: scale(8),
  },
  answertext: {
    fontSize: scale(15),
  },
  question: {
    fontSize: scale(18),
    marginLeft: scale(5),
  },
  answer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(8),
    marginRight: scale(8),
  },
  time: {
    backgroundColor: 'white',
    width: scale(350),
    height: scale(50),
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconAndText: {
    marginLeft: scale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeCountdown: {
    fontSize: scale(20),
    marginLeft: scale(5),
  },
  checkAndText: {
    flexDirection: 'row',
    height: scale(30),
    width: scale(150),
    alignItems: 'center',
    marginTop: scale(4),
  },
  logocontainer: {
    height: scale(350),
    width: scale(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  bigCircle: {
    height: scale(250),
    width: scale(250),
    borderRadius: scale(125),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(3),
    borderColor: 'orange',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: scale(300),
    width: scale(300),
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    width: scale(50),
    borderRadius: scale(10),
    padding: 10,
    elevation: 2,
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: scale(15),
    marginBottom: scale(15),
    textAlign: 'center',
  },
  titleResult: {
    fontSize: scale(30),
    alignSelf: 'center',
    marginTop: scale(80),
  },
  textResult: {
    color: 'orange',
    fontSize: scale(30),
  },
});
export default styles;
