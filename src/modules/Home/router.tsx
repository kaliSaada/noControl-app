import React from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import HomeScreen from './views/HomeScreen';

const Stack = createStackNavigator();

const createHomeRouter = (
    screenOptions?: StackNavigationOptions,
): React.FunctionComponent => () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
    );
};

export default createHomeRouter;
