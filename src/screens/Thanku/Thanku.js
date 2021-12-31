import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';

export default function Thanku({ navigation }) {

    function _onPress(params) {
        navigation.popToTop()
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Button
                    mode="contained"
                    color='red'
                    onPress={() => _onPress()}>
                    Continue
                </Button>
            </View>
        </View>
    )
}
