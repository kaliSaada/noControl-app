import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import LoginScreen from './views/LoginScreen';

const Stack = createStackNavigator();

const createLoginRouter = (
  screenOptions?: StackNavigationOptions,
): React.FunctionComponent => () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default createLoginRouter;
