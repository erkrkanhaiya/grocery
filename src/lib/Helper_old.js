import * as React from 'react';
import Config from './Config';
// import { NavigationActions, StackActions } from 'react-navigation';
// import Toast from 'react-native-root-toast';
// import Toast from 'react-native-simple-toast';

import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Moment from 'moment';
import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';

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

  static getFlotingValue(myStr) {
    return myStr.toFixed(2);
    //return myStr.substring(0, myStr.indexOf(".")+2);
  }
  // static showLoader() {
  //     Helper.mainApp.setState({ loader: true })
  // }
  static getImageUrl(url) {
    console.log(Config.mediaUrl + url);
    return Config.mediaUrl + url;
  }

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

  static registerToast(toast) {
    Helper.toast = toast;
  }

  // static showToast(msg) {
  //   // alert(msg)
  //   // Toast.show('This is a toast.');
  //   Toast.showWithGravity(msg, Toast.LONG, Toast.BOTTOM);
  //   // if (msg) {
  //   //   //Toast.show(msg);
  //   //   Toast.show(msg, {
  //   //     duration: Toast.durations.SHORT,
  //   //     position: Toast.positions.BOTTOM,
  //   //     shadow: true,
  //   //     animation: true,
  //   //     hideOnPress: true,
  //   //     delay: 0,
  //   //     onShow: () => {
  //   //       // calls on toast\`s appear animation start
  //   //     },
  //   //     onShown: () => {
  //   //       // calls on toast\`s appear animation end.
  //   //     },
  //   //     onHide: () => {
  //   //       // calls on toast\`s hide animation start.
  //   //     },
  //   //     onHidden: () => {
  //   //       // calls on toast\`s hide animation end.
  //   //     },
  //   //   });
  //   // }
  // }

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

  static deviceInfo() {
    let systemVersion = DeviceInfo.getSystemVersion();
    let brandName = DeviceInfo.getBrand();
    return (
      brandName + ' ' + Platform.OS + ' ' + systemVersion + ' ' + 'version'
    );
  }

  static async makeRequest({ url, method, data, isImage, loader, imgkey, imgvalue, imgdata, img }) {
    // let token = await this.getData('token');
    // var varheaders = {
    //   Accept: 'application/json',
    //   'Content-Type': isImage ? 'multipart/form-data' : 'application/json'
    // };
    // if (token && token) varheaders['Authorization'] = 'Bearer ' + token;
    // if (!token && !token) varheaders['Authorization'] = 'Basic ' + Config.Basictoken;
    let finalUrl = Config.url;
    // let key = CryptoJS.enc.Latin1.parse(Config.key);
    // let iv = CryptoJS.enc.Latin1.parse(Config.iv);
    // let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
    //   iv,
    // }).toString();
    // let formdata = new FormData();


    // formdata.append('data', encrypted);
    // if (imgkey) {
    //   formdata.append(imgkey, {
    //     uri: imgvalue,
    //     name: 'test.jpg',
    //     type: 'image/jpg',
    //   });
    // } else if (imgdata) {
    //   formdata.append(imgdata?.imgKey1, {
    //     uri: imgdata?.imgValue1,
    //     name: 'test.jpg',
    //     type: 'image/jpg',
    //   });
    //   formdata.append(imgdata?.imgKey2, {
    //     uri: imgdata?.imgValue2,
    //     name: 'test.jpg',
    //     type: 'image/jpg',
    //   });

    // }

    console.log('Api URL-----', finalUrl);
    // console.log('Api Data encrypted----', encrypted);
    console.log('Method--------  ', method);
    console.log('Api Data decrypt----', data);
    // console.log('data?.post_data?.image----', formdata);

    return NetInfo.fetch().then(state => {
      if (state.isConnected) {
        return fetch(finalUrl, {
          body: data,
          method: method,
        })
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            let Objstatus = responseJson;
            console.log('Api Resp--------- ', Objstatus);
            if (Objstatus.success === 0) {
              // Helper.showToast(Objstatus.message);
            }
            // return Objstatus;
            if (Objstatus.message == 'EXPIRED') {
              this.setData('UserData', '');
              this.setData('token', '');
              Helper.userInfo = '';
              Helper.navigationRef.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
              this.showToast('Your Session is Expired. Login again');
            } else {
              return Objstatus;
            }
          })
          .catch((error, a) => {
            // Helper.showToast('Error in Data Fetching!', 'error');
            console.log('Error---->  ', error);
            return false;
          });
      } else {
        Helper.alert('No Internet Connection! Please connect to the Internet.');

        return false;
      }
    });
  }
}

//   static async makeRequest2({url, data, method = 'POST', loader = true}) {
//     let finalUrl = Config.url + url;
//     let form;
//     let methodnew;
//     let token = await this.getData('token');
//     let varheaders;

//     if (method == 'POSTUPLOAD') {
//       methodnew = 'POST';

//       varheaders = {
//         Accept: 'application/json',
//         'Content-Type': 'multipart/form-data',
//         Authorization: 'Bearer ' + token,
//       };
//       form = data;
//     } else if (method == 'POST') {
//       methodnew = 'POST';
//       if (token) {
//         varheaders = {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         };
//       } else {
//         varheaders = {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         };
//       }
//       form = JSON.stringify(data);
//     } else {
//       methodnew = 'GET';
//       if (token) {
//         varheaders = {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: 'Bearer ' + token,
//         };
//       } else {
//         varheaders = {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         };
//       }
//     }

//     console.log('Api URL------------ ', finalUrl);
//     console.log('Api Header--------', varheaders);
//     console.log('Api Data Send--------  ', form);
//     console.log('Api Method Send--------  ', methodnew);

//     return fetch(finalUrl, {
//       body: form,
//       method: methodnew,
//       headers: varheaders,
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseJson) => {
//         console.log('Api Resp @@@@@@@@@@@', responseJson);
//         if (Number(responseJson.status) == 401) {
//           AsyncStorage.removeItem('userdata');
//           AsyncStorage.removeItem('token');
//           Helper.navigationRef.reset({index: 0, routes: [{name: 'Login'}]});
//           this.showToast(responseJson.message);
//         } else return responseJson;
//       })
//       .catch((error, a) => {
//         this.showToast('Please check your internet connection.');
//         console.log('Api Error--------   ', error);
//       });
//   }
// }
