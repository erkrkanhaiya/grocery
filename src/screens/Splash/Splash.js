import React, { Component } from 'react'
import { Text, View, ImageBackground, Image } from 'react-native'
// import Helper from '../../Lib/Helper';
import SplashScreen from 'react-native-splash-screen'
import Helper from '../../lib/Helper';
// import Colors from '../assets/colors';
// import images from '../assets/images';
// import Helper from '../lib/Helper';
// import iid from '@react-native-firebase/iid';

async function getInstanceId() {
    // const id = await iid().get();
    // console.log('Current Instance ID: ', id);
}

export default class Splash extends Component {
    async componentDidMount() {
        // getInstanceId()
        SplashScreen.hide();
        setTimeout(() => {
            Helper.getData('userData').then((user) => {
                console.log(user, "Splash user")
                if (user) {
                    Helper.userInfo = user
                    Helper.apitoken = user?.access_token
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'DrawerStack' }],
                    });
                }
                else
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
            })
        }, 1000);
        Helper.navigationRef = this.props.navigation;
        Helper.registerNavigator(this.props.navigation)
    }

    render() {
        return (
            <View
                // resizeMode='cover'
                // source={images.Splashnew}
                style={{
                    width: '100%', height: '100%',
                    backgroundColor: 'black'
                }} />
            // />
            // <View style={{ flex: 1, backgroundColor: Colors.them, justifyContent: 'center', alignItems: 'center' }}>
            //     <Image
            // resizeMode='contain'
            // source={images.appicon}
            // style={{
            //     width: '50%', height: '50%',
            // }} />
            // </View>
        )
    }
}
