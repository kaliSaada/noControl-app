import * as React from "react";
import {Button, Text, View} from "react-native";

const LoginScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {}}
            />
        </View>
    );
}

export default LoginScreen;