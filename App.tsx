import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouter, AppRouterLogged } from './src/router';

const App = () => {
    return (
        <NavigationContainer>
            <AppRouter />
        </NavigationContainer>
    );
}

export default App;
