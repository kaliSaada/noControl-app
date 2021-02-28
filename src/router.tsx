import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import createLoginRouter from './modules/Login/router';
import createHomeRouter from './modules/Home/router';
import createRegisterRouter from './modules/Register/router';

const TabNavigator = createBottomTabNavigator();
const RootStack = createStackNavigator();

const LoginRouter = createLoginRouter({
  headerShown: false,
});

const HomeRouter = createHomeRouter({
  headerShown: false,
});

const RegisterRouter = createRegisterRouter({
  headerShown: false,
});

const RootTabs = () => {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen component={LoginRouter} name="LoginRouter" />
      <TabNavigator.Screen component={HomeRouter} name="HomeRouter" />
      <TabNavigator.Screen component={RegisterRouter} name="RegisterRouter" />
    </TabNavigator.Navigator>
  );
};

const Stack = () => {
  return (
    <RootStack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
        headerTitle: () => false,
        headerBackAllowFontScaling: false,
      }}>
      <RootStack.Screen name="Login" component={LoginRouter} />
      <RootStack.Screen name="MainTabs" component={RootTabs} />
    </RootStack.Navigator>
  );
};

const AppRouter: React.FunctionComponent = () => {
  return <Stack />;
};

export default AppRouter;
