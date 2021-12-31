import AsyncStorage from '@react-native-community/async-storage';
import {Component} from 'react';
import {Platform, Alert} from 'react-native';
import {apiconfig} from './config';
export default class Helper extends Component {
  static token;
  static isNotification;
  static account_type;
  static filter_type;
  static user = {};
  static defaultEstimate;
  static defaultInvoice;
  static create;
  static device_token;
  static device_type = Platform.OS === 'android' ? 'Android' : 'Ios';

  static async setData(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
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

  static async clearAllData() {
    try {
      await AsyncStorage.clear();
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
    }
  }

  static confirm(alertMessage, cb) {
    Alert.alert(
      apiconfig.app_name,
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
      {cancelable: false},
    );
  }

  render() {
    console.log(Helper.token, 'tokennnhelper');
  }
}
