import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import BGHOME from '../../assets/images/bgHome.jpg';

function Home({navigation}) {
  const {filterQuestion} = useSelector(state => state.core);
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const [qIndex, setQIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [question, setQuestion] = useState(filterQuestion[qIndex]);

  const handleCorrect = answer => {
    if (answer === question.answer) {
      setShowSuccess(true);
    } else {
      setShowError(true);
    }

    const nextQ = qIndex + 1;

    const newArrQuest = filterQuestion.map(itm =>
      itm.answer === answer
        ? {...itm, isCorrect: true}
        : {...itm, isCorrect: false},
    );

    if (answer === question.answer) {
      if (nextQ < filterQuestion.length) {
        setQuestion(newArrQuest[nextQ]);
        setQIndex(nextQ);
      } else {
        navigation.navigate('level');
      }
    }

    setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BGHOME} resizeMode="cover" style={styles.imgBg}>
        {showSuccess ? (
          <Text style={styles.correct}>YA JAWABANMU BENAR!!</Text>
        ) : showError ? (
          <Text style={styles.correct}>YA JAWABANMU SALAH!!</Text>
        ) : null}

        <View style={styles.questionBox}>
          <Text>{question?.question ?? ''}</Text>
        </View>

        <View>
          {question?.choices?.map(item => (
            <TouchableOpacity
              key={item.onPress}
              style={styles.btnAns}
              onPress={() => handleCorrect(item.onPress)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Home;
