import React from 'react'
import { Platform, LogBox, View, } from 'react-native';
import Rootnav from './naviagtion/rootnav';
import FlashMessage from "react-native-flash-message";


LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notificatio



export default function index() {
    return (

        <View style={{ flex: 1 }}>
            {/* <SafeAreaView style={{ flex: 1 }}> */}
            {/* <StatusBar
                // translucent={true}
                backgroundColor={'rgba(0, 0, 0, 0.3)'}
                barStyle={'light-content'}
            /> */}
            <Rootnav />
            {/* <Notification /> */}
            {/* </SafeAreaView> */}
            {/* <CustomSnackBar /> */}
            <FlashMessage />
        </View>
    )
}
