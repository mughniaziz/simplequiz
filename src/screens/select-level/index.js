import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import useStyles from './styles';
import {levelSelect} from '../../redux/select-level/actions';
import levels from '../../dummy/level.json';

function SelectLevel({navigation}) {
  const {colors} = useTheme();
  const styles = useStyles(colors);
  const dispatch = useDispatch();
  const {filterQuestion} = useSelector(state => state.core);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Level</Text>
      <View style={styles.content}>
        {levels.map(item => (
          <TouchableOpacity
            key={item.onPress}
            style={styles.btnLvl}
            onPress={() => {
              dispatch(levelSelect(item.onPress));
              if (filterQuestion !== null) {
                navigation.navigate('home');
              }
            }}>
            <Text style={styles.btnText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default SelectLevel;
