import * as React from 'react';
// import Config from './Config';
// import { NavigationActions, StackActions } from 'react-navigation';
// import Toast from 'react-native-root-toast';
// import Toast from 'react-native-simple-toast';

import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
// import NetInfo from '@react-native-community/netinfo';
// import DeviceInfo from 'react-native-device-info';

// var CryptoJS = require('crypto-js');

// import { handleNavigation } from '../navigation/Appnavigation';
export default class Helper extends React.Component {
  url = '';
  static imageUrl;
  static mainApp;
  static device_id;
  static apitoken;
  static userInfo;
  static otp_token;
  static appoCount = 0;
  static messageCount = 0;
  static requestCount = 0;
  static toast;
  static Snack;
  static defaultUser = {};
  static Loader;
  static navigationRef;
  static device_token = '';
  static path;
  static device_type = Platform.OS == 'ios' ? 'Ios' : 'Android';
  static defaultMessage = 'Server not responding';
  constructor() {
    // console.log(Helper.userInfo, 'UserInfo');
  }

  // static nav = {
  //   push: (routeName, params) => {
  //     Helper.navigationRef.dispatch(
  //       NavigationActions.navigate({
  //         routeName,
  //         params,
  //       }),
  //     );
  //     //  self.props.navigation.push (page)
  //   },
  //   setRoot: (page, params) => {
  //     const resetAction = StackActions.reset({
  //       index: 0,
  //       actions: [NavigationActions.navigate({ routeName: page, params })],
  //     });
  //     Helper.navigationRef.dispatch(resetAction);
  //   },
  //   setNavigate: (page, params) => {
  //     Helper.navigationRef.navigate(page);
  //   },
  // };

  static registerNavigator(ref) {
    Helper.navigationRef = ref;
    // console.log(ref, 'redHelper', Helper.navigationRef);
    // call this function at intial page of route
    //  e.g Helper.registerNavigator(this.props.navigation)
    //  or
    //  Helper.navigationRef = this.props.navigation;
  }

  // static getFlotingValue(myStr) {
  //   return myStr.toFixed(2);
  //   //return myStr.substring(0, myStr.indexOf(".")+2);
  // }


  // static showLoader() {
  //     Helper.mainApp.setState({ loader: true })
  // }


  // static getImageUrl(url) {
  //   console.log(Config.mediaUrl + url);
  //   return Config.mediaUrl + url;
  // }

  // static hideLoader() {
  //     setTimeout(() => {
  //         Helper.mainApp.setState({ loader: false })
  //     }, 1000);
  // }

  static registerLoader(loader) {
    Helper.Loader = loader;
  }

  static showLoader() {
    Helper.Loader.setState({ loaderVisible: true });
  }

  static hideLoader() {
    Helper.Loader.setState({ loaderVisible: false });
  }



  // SnackBar Helper
  static registerSnack(loader) {
    Helper.Snack = loader;
  }

  static showSnack(val) {
    Helper.Snack.setState({ Visible: true, msg: val });
    setTimeout(() => {
      Helper.hideSnack()
    }, 1000);
  }

  static hideSnack() {
    Helper.Snack.setState({ Visible: false, msg: '' });
  }




  static registerToast(toast) {
    Helper.toast = toast;
  }

  static showToast(msg) {
    // alert(msg)
    // Toast.show('This is a toast.');
    // Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
    // if (msg) {
    //   //Toast.show(msg);
    //   Toast.show(msg, {
    //     duration: Toast.durations.SHORT,
    //     position: Toast.positions.BOTTOM,
    //     shadow: true,
    //     animation: true,
    //     hideOnPress: true,
    //     delay: 0,
    //     onShow: () => {
    //       // calls on toast\`s appear animation start
    //     },
    //     onShown: () => {
    //       // calls on toast\`s appear animation end.
    //     },
    //     onHide: () => {
    //       // calls on toast\`s hide animation start.
    //     },
    //     onHidden: () => {
    //       // calls on toast\`s hide animation end.
    //     },
    //   });
    // }
  }

  static alert(alertMessage, cb) {
    Alert.alert(
      Config.app_name,
      alertMessage,
      [
        {
          text: 'OK',
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
      ],
      { cancelable: false },
    );
  }

  static confirm(alertMessage, cb) {
    Alert.alert(
      Config.app_name,
      alertMessage,
      [
        {
          text: 'Yes',
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
        {
          text: 'No',
          onPress: () => {
            if (cb) cb(false);
          },
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  static permissionConfirm(alertMessage, cb) {
    Alert.alert(
      Config.app_name,
      alertMessage,
      [
        {
          text: 'NOT NOW',
          onPress: () => {
            if (cb) cb(false);
          },
          style: 'cancel',
        },
        {
          text: 'SETTINGS',
          onPress: () => {
            if (cb) cb(true);
            console.log('OK Pressed');
          },
        },
      ],
      { cancelable: false },
    );
  }

  static cameraAlert(alertMessage, Camera, Gallery, Cancel, cb) {
    Alert.alert(
      Config.app_name,
      alertMessage,
      [
        {
          text: Camera,
          onPress: () => {
            cb('Camera');
            console.log('OK Pressed');
          },
        },
        {
          text: Gallery,
          onPress: () => {
            cb('Gallery');
            console.log('OK Pressed');
          },
        },
        {
          text: Cancel,
          onPress: () => {
            cb('cancel');
          },
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }

  static async setData(key, val) {
    try {
      let tempval = JSON.stringify(val);
      await AsyncStorage.setItem(key, tempval);
    } catch (error) {
      console.error(error, 'AsyncStorage');
      // Error setting data
    }
  }

  static async removeData(key, val) {
    try {
      let tempval = JSON.stringify(val);
      await AsyncStorage.removeItem(key, tempval);
    } catch (error) {
      console.error(error, 'AsyncStorage');
      // Error setting data
    }
  }

  static async getData(key) {
    let value = '';
    try {
      value = await AsyncStorage.getItem(key);
      if (value) {
        let newvalue = JSON.parse(value);
        return newvalue;
      } else {
        return value;
      }
    } catch (error) {
      console.error(error, 'AsyncStorage');
      // Error retrieving data
    }
  }

  // static deviceInfo() {
  //   let systemVersion = DeviceInfo.getSystemVersion();
  //   let brandName = DeviceInfo.getBrand();
  //   return (
  //     brandName + ' ' + Platform.OS + ' ' + systemVersion + ' ' + 'version'
  //   );
  // }


}
