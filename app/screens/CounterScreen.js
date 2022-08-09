import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  // INCREMENT_COUNT,
  // DECREMENT_COUNT,
  setDecrement,
  setIncrement,
} from '../redux/Action';
const CounterScreen = () => {
  const {count} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#224f85" />
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconView}
        onPress={() => dispatch(setDecrement(count))}>
        <Text style={styles.minusIcon}>-1</Text>
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconView}
        onPress={() => dispatch(setIncrement(count))}>
        <Text style={styles.plusIcon}>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#224f85',
  },
  iconView: {
    height: 50,
    width: 150,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 100,
  },
  counterText: {
    fontSize: 40,
    fontWeight: '600',
    color: '#75e6e2',
  },
  minusIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  plusIcon: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
});
