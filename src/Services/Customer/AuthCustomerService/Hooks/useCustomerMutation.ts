import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import Helper from '../../../../Helpers/Helper';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import CustomerService from '../CustomerService';

function useCustomerMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const countryMutation = useMutation(CustomerService.getCountry, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Login Api Response');
        if (status === 200 || true) {
          dispatch({ type: 'GET_RAW_DATA', payload: data?.data });
          // SnackbarHandler.successToast(data?.message);
          // navigation.goBack()

        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Login Api Error');
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


  const stateMutation = useMutation(CustomerService.getState, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' STate Api Response');
        if (status === 200 || true) {
          dispatch({ type: 'UPDATE_RAW_DATA', payload: data?.data });
          // SnackbarHandler.successToast(data?.message);
          // navigation.goBack()

        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Login Api Error');
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






  const addCustomerPersonMutation = useMutation(CustomerService.addPerson, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200 || true) {
          Helper.setData('user', data?.data);
          Helper.setData('token', data?.data?.jwtToken);
          Helper.token = data?.data?.jwtToken;
          Helper.user = data?.data;
          dispatch({ type: 'UPDATE_USER', payload: data?.data });
          if (variables.userUpdate) {
            return navigation.goBack()
          }
          navigation.reset({
            index: 0,
            routes: [{ name: 'CustomerStack' }],
          });
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Person Api Error');
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

  const addCustomerAddressMutation = useMutation(CustomerService.addAddress, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' userAddress Api Response');

        if (status === 200 || true) {
          if (variables.userAddress) {
            Helper.setData('user', data?.data);
            Helper.user = data?.data;
            dispatch({ type: 'UPDATE_USER', payload: data?.data });
            return navigation.goBack()
          }
          navigation.navigate('CustomerContact')
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
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





  return {
    getallCountry: countryMutation.mutate,
    getCountryState: stateMutation.mutate,
    addCustomerPerson: addCustomerPersonMutation.mutate,
    addCustomerAddress: addCustomerAddressMutation.mutate,
    loading: countryMutation.isLoading || stateMutation.isLoading ||
      addCustomerPersonMutation.isLoading || addCustomerAddressMutation.isLoading,
  };
}

export default useCustomerMutation;
