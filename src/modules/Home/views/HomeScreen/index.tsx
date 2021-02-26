import * as React from "react";
import {Button, Text, View} from "react-native";

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <Button
                title="Back"
                onPress={() => {}}
            />
        </View>
    );
}

export default HomeScreen;
