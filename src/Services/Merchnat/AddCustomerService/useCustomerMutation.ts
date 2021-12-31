import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import Helper from '../../../Helpers/Helper';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import CustomerService from '../CustomerService';
import { StackActions } from '@react-navigation/native';


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


  const addCustomerMutation = useMutation(CustomerService.addCustomer, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' STate Api Response');
        if (status === 200 || true) {
          dispatch({ type: 'ADDED_CUSTOMER_DATA', payload: data?.data });
          // if (variables.button === 'address') {
          navigation.navigate('Addaddress', { prevData: data?.data })
          // } else {
          //   navigation.navigate('Contactperson')
          // }
          SnackbarHandler.successToast(data?.message);


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

  const allCustomerMutation = useMutation(CustomerService.getAllcustomer, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' getAllcustomer Api Response');
        if (status === 200 || true) {
          dispatch({ type: 'ALL_CUSTOMER', payload: data?.data });
          // SnackbarHandler.successToast(data?.message);
          // navigation.goBack()
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'getAllcustomer Api Error');
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

  const addPersonMutation = useMutation(CustomerService.addPerson, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Person Api Response');
        if (status === 200 || true) {
          allCustomerMutation.mutate();
          dispatch({ type: 'ADDED_CUSTOMER_DATA', payload: data?.data });
          SnackbarHandler.successToast(data?.message);
          if(Helper.create){

          }
          navigation.dispatch(StackActions.pop(3))

          // navigation.navigate('SelectCustomer')
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

  const addAddressMutation = useMutation(CustomerService.addAddress, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' getAllcustomer Api Response');
        if (status === 200 || true) {
          allCustomerMutation.mutate();
          dispatch({ type: 'ADDED_CUSTOMER_DATA', payload: data?.data });
          navigation.navigate('Contactperson', { prevData: data?.data })
          SnackbarHandler.successToast(data?.message);
          // navigation.goBack()
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'getAllcustomer Api Error');
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


  const updateCustomerMutation = useMutation(CustomerService.updateCustomer, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200 || true) {
          dispatch({ type: 'ADDED_CUSTOMER_DATA', payload: data?.data });
          SnackbarHandler.successToast(data?.message);
          navigation.goBack()
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
    addCustomer: addCustomerMutation.mutate,
    getAllCustomer: allCustomerMutation.mutate,
    addPerson: addPersonMutation.mutate,
    addAddress: addAddressMutation.mutate,
    updateCustomer: updateCustomerMutation.mutate,
    loading: countryMutation.isLoading || stateMutation.isLoading || addCustomerMutation.isLoading ||
      addPersonMutation.isLoading || addAddressMutation.isLoading || updateCustomerMutation.isLoading,
  };
}

export default useCustomerMutation;
