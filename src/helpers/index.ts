import AsyncStorage from '@react-native-community/async-storage';
import Axios, { AxiosRequestConfig } from 'axios';
import { apiconfig } from './config';
import NetInfo from '@react-native-community/netinfo';
import { GlobalHandler } from '../utils/SnackbarHandler';
import Helper from '../lib/Helper';

export const fetcher = async config => {
  const { url, method, data, headers, cb = () => { } } = config;
  const finalUrl = apiconfig.API_URL + url;
  console.log('ApiData>>>>>', {
    finalUrl,
    body: data,
    method: method,
  });

  return NetInfo.fetch().then(state => {
    if (state.isConnected) {
      return fetch(finalUrl, {
        body: JSON.stringify(data),
        method: method,
        headers: {
          'Content-type': 'application/json',
          Accept: '*/*',
        },
      })
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log('Api res>>>>>>>>>>', responseJson);
          let Objstatus = responseJson;
          cb(responseJson);
          // else {
          //   GlobalHandler.errorMessage(`${Objstatus.msg}`);
          // }
          return Objstatus;
        })
        .catch(err => {
          GlobalHandler.errorMessage(`Network Error ${err}`);
        });
    } else {
      return GlobalHandler.errorMessage(`Internet not connected`);
    }
  });
};

export const tokenfetcher = async config => {
  const { url, method, data, headers, cb = () => { } } = config
  const token = Helper.userInfo?.access_token
  const finalUrl = apiconfig.API_URL + url;
  console.log(
    {
      finalUrl,
      body: data,
      method: method,
      token: token,
    },
    'ApiData >>>>>>>>>>>>>>>>>.',
  );
  return NetInfo.fetch().then(state => {
    if (state.isConnected) {
      return fetch(finalUrl, {
        body: JSON.stringify(data),
        method: method,
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`,
          Accept: '*/*',
        },
      })
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log('Api res>>>>>>>>>>', responseJson);
          let Objstatus = responseJson;
          cb(responseJson);
          // else {
          //   GlobalHandler.errorMessage(`${Objstatus.msg}`);
          // }
          return Objstatus;
        })
        .catch(err => {
          GlobalHandler.errorMessage(`Network Error ${err}`);
        });
    } else {
      return GlobalHandler.errorMessage(`Internet not connected`);
    }
  });
};

export const onError = (error: any) => {
  if (error?.response) {
    console.log({ error: error?.response });
    if (error?.response?.status === 401) {
      // AppAtomInstance.resetState();

      try {
        AsyncStorage.clear();
      } catch (_error) { }
    }
  } else {
  }
};
