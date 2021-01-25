import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: scale(660),
    width: scale(350),
    backgroundColor: 'white',
  },
  imagecontainer: {
    marginTop: scale(80),
    height: scale(450),
    width: scale(350),
    justifyContent: 'center',
  },
  textcontainer: {
    height: scale(150),
    width: scale(350),
    backgroundColor: 'black',
  },
  image: {
    flex: 1,
    height: scale(250),
    width: scale(370),
  },
  logocontainer: {
    marginTop: scale(80),
    height: scale(150),
    width: scale(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logocontainerRegister: {
    marginTop: scale(30),
    height: scale(100),
    width: scale(350),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    height: scale(69),
    width: scale(100),
    alignSelf: 'center',
  },
  textInputContainer: {
    height: scale(150),
    width: scale(350),
  },
  textInput: {
    backgroundColor: '#F6F4F5',
    width: scale(290),
    height: scale(50),
    alignSelf: 'center',
    borderRadius: scale(25),
    marginBottom: scale(20),
    fontSize: scale(15),
  },
  button: {
    backgroundColor: 'orange',
    width: scale(290),
    height: scale(50),
    alignSelf: 'center',
    borderRadius: scale(25),
    marginBottom: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scale(15),
    color: 'white',
  },
  centerText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scale(5),
  },
  linktext: {
    fontSize: scale(12),
    color: '#2787CD',
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
  circle: {
    height: scale(200),
    width: scale(200),
    borderRadius: scale(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: scale(3),
    borderColor: '#f4f2f2',
  },
  circlelogo: {
    flex: 1,
    marginTop: scale(40),
    height: scale(108),
    width: scale(160),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  titleText: {
    alignSelf: 'center',
    fontSize: scale(20),
    color: 'orange',
    marginBottom: scale(20),
  },
  textInputContainerRegister: {
    height: scale(400),
    width: scale(350),
  },
});

export default styles;
