import { useDispatch, useSelector } from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';
import AuthService from '../AuthService';
import { AxiosResponse } from 'axios';
import Helper from '../../../Helpers/Helper';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../Constants/Config';
import { useCallback } from 'react';
import { useMutation ,} from 'react-query';
import { useNavigation } from '@react-navigation/core';

function useAuthMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loginMutation = useMutation(AuthService.login, {
    onSuccess: (responseData: AxiosResponse<any>,variables) => {
      
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Login Api Response');

        if (status === 200 || true) {
          Helper.setData('user', data?.data);
          Helper.setData('token', data?.data?.jwtToken);
          Helper.token = data?.data?.jwtToken;
          Helper.user = data?.data;
          dispatch({ type: 'UPDATE_USER', payload: data?.data });
          if (
            data?.data?.account_type === 'Customer' &&
            data?.data?.is_complete
          ) {
            if (!data?.data?.billing_address) {
             return navigation.navigate('CustomerAddress')
            }
            if(!data?.data?.contact_person){
              return navigation.navigate('CustomerContact')
            }
            navigation.reset({
              index: 0,
              routes: [{ name: 'CustomerStack' }],
            });
          } else
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: data?.data?.is_complete
                    ? 'MerchantStack'
                    : 'OneTimeSetup',
                },
              ],
            });
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Login Api Error');
        if (status === 422) {
          SnackbarHandler.errorToast(data?.message);

          return navigation.navigate('OtpVerify', { prevData: data });
        }
        if (status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: data.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const registerMutation = useMutation(AuthService.register, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      console.log(variables, '>>>>>>>>>>>>>');
      queryClient.clear();
      if (responseData) {
        console.log(responseData, 'responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          navigation.navigate('OtpVerify', { prevData: data });
          SnackbarHandler.successToast(data?.message);
          // dispatch({
          //   type: 'IS_VISIBLE',
          //   payload: {
          //     message: data.message,
          //     status: 'danger',
          //   },
          // });
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const verifyotpMutation = useMutation(AuthService.verifyotp, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, 'Otp Api responseeeee');
        if (status === 200 || true) {
          Helper.setData('user', data?.data);
          Helper.setData('token', data?.data?.jwtToken);
          Helper.token = data?.data?.jwtToken;
          Helper.user = data?.data;
          dispatch({ type: 'UPDATE_USER', payload: data?.data });
          if (data?.data?.account_type === 'Customer') {
            if (!data?.data?.billing_address) {
              return navigation.navigate('CustomerAddress')
             }
             if(!data?.data?.contact_person){
               return navigation.navigate('CustomerContact')
             }
            navigation.reset({
              index: 0,
              routes: [{ name: 'CustomerStack' }],
            });
          } else {
            navigation.reset({
              index: 0,
              routes: [{ name: 'OneTimeSetup' }],
            });
          }
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Otp Error responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const completeMerchantMutation = useMutation(AuthService.completeProfile, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      // console.log(variables,">>>>>>>>>>>>>")
      if (responseData) {
        console.log(responseData, 'completeProfile responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          Helper.setData('user', data?.data);
          Helper.setData('token', data?.data?.jwtToken);
          Helper.token = data?.data?.jwtToken;
          Helper.user = data?.data;
          dispatch({ type: 'UPDATE_USER', payload: data?.data });
          navigation.reset({
            index: 0,
            routes: [{ name: 'MerchantStack' }],
          });
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const changepasswordMutation = useMutation(AuthService.changepassword, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      // console.log(variables,">>>>>>>>>>>>>")
      queryClient.clear();
      if (responseData) {
        console.log(responseData, 'completeProfile responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          navigation.goBack();
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const resetPasswordMutation = useMutation(AuthService.resetPassword, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      queryClient.clear();
      if (responseData) {
        console.log(responseData, 'resetPassword responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const forgotPasswordMutation = useMutation(AuthService.forgotPassword, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      queryClient.clear();
      if (responseData) {
        console.log(responseData, 'forgotPassword responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          navigation.navigate('Forgotpassword', { prvData: data?.data });
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const updateProfileMutation = useMutation(AuthService.updateProfile, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      queryClient.clear();
      if (responseData) {
        console.log(responseData, 'update responseeeee');
        const { status, data } = responseData;
        if (status === 200 || true) {
          dispatch({ type: 'UPDATE_USER', payload: data?.data });
          Helper.setData('user', data?.data);
          Helper.user = data?.data;
          navigation.goBack();
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        console.log(error?.response, 'responseeeee');
        if (error?.response?.status !== 200) {
          dispatch({
            type: 'IS_VISIBLE',
            payload: {
              message: error?.response?.data?.message,
              status: 'danger',
            },
          });
          try {
            AsyncStorage.clear();
          } catch (_error) { }
        }
      } else {
      }
    },
  });

  const logout = useCallback(() => {
    AuthService.logout();
    dispatch({ type: 'UPDATE_USER', payload: {} });
    Helper.token = null;
    Helper.account_type = null;
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
    SnackbarHandler.successToast('Logout Success');
  }, []);

  return {
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    verifyotp: verifyotpMutation.mutate,
    completeProfile: completeMerchantMutation.mutate,
    changepassword: changepasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    updateProfile: updateProfileMutation.mutate,
    forgotPassword: forgotPasswordMutation.mutate,
    logout,
    loading:
      loginMutation.isLoading ||
      registerMutation.isLoading ||
      verifyotpMutation.isLoading ||
      completeMerchantMutation.isLoading ||
      changepasswordMutation.isLoading ||
      resetPasswordMutation.isLoading ||
      updateProfileMutation.isLoading ||
      forgotPasswordMutation.isLoading,
  };
}

export default useAuthMutation;
