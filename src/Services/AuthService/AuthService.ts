import AsyncStorage from '@react-native-community/async-storage';
import { fetcher, tokenfetcher } from '../../helpers';
// import {AppAtomInstance} from '../../../src/Recoil/Atoms/appAtom';
import { useDispatch } from 'react-redux';

class AuthService {
  queryKeys = {};

  login = (data: any, cb: Function) => {
    return fetcher({
      url: 'login',
      method: 'post',
      data,
      cb,
    });
  };

  checkUser = (data: any, cb: Function) => {
    return fetcher({
      url: 'userexist',
      method: 'post',
      data,
      cb,
    });
  };

  register = (data: any, cb: Function) => {
    return fetcher({
      url: 'firebaseUser',
      method: 'post',
      data,
      cb,
    });
  };

  verifyotp = (data: any) => {
    return fetcher({
      url: 'otp-verify',
      method: 'POST',
      data,
    });
  };


  chnagepassword = (data: any, cb: Function) => {
    return tokenfetcher({
      url: 'updatepassword',
      method: 'post',
      data,
      cb,
    });
  };


  _resetpassword = (data: any, cb: Function) => {
    return tokenfetcher({
      url: 'resetpassword',
      method: 'post',
      data,
      cb,
    });
  };


  completeProfile = (data: any) => {
    return fetcher({
      url: 'complete-merchant-profile',
      method: 'POST',
      data,
    });
  };

  changepassword = (data: any) => {
    return fetcher({
      url: 'change-password',
      method: 'POST',
      data,
    });
  };

  forgotPassword = (data: any) => {
    return fetcher({
      url: 'forget-password',
      method: 'POST',
      data,
    });
  };

  resetPassword = (data: any) => {
    return fetcher({
      url: 'reset-password',
      method: 'POST',
      data,
    });
  };

  updateProfile = (data: any) => {
    return fetcher({
      url: 'update-profile',
      method: 'POST',
      data,
    });
  };

  logout = () => {
    AsyncStorage.multiRemove(['user', 'token']);
  };
}

export default new AuthService();

// const AuthService = {
//   login: (data: any,) => {
//     Helper.makerequest({ url: 'login', data: data, method: 'POST' }, cb => {
//       if (cb) {
//         alert('hiii')
//       }
//     })
//   },
// }
// export default AuthService;
