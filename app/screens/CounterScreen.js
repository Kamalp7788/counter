import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Images} from '../utility/Images';

const CounterScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconView}
        onPress={() => setCount(count - 1)}>
        <Image source={Images.minusIcon} style={styles.minusIcon} />
      </TouchableOpacity>
      <Text style={styles.counterText}>{count}</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconView}
        onPress={() => setCount(count + 1)}>
        <Image source={Images.plusIcon} style={styles.plusIcon} />
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
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  iconView: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  counterText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  minusIcon: {
    height: 20,
    width: 20,
  },
  plusIcon: {
    height: 20,
    width: 20,
  },
});
