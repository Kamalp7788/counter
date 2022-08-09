import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {Store} from './app/updateRedux/Store';
// import {Counter} from './app/screens/Counter';
import StyledScreen from './app/utility/StyledScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="Count"
            component={Counter}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Style"
            component={StyledScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
