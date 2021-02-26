import React from 'react';
import {
    createStackNavigator,
    StackNavigationOptions,
} from '@react-navigation/stack';
import RegisterScreen from './views/RegisterScreen';

const Stack = createStackNavigator();

const createRegisterRouter = (
    screenOptions?: StackNavigationOptions,
): React.FunctionComponent => () => {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </Stack.Navigator>
    );
};

export default createRegisterRouter;
