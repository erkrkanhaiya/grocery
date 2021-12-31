import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {AxiosResponse} from 'axios';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/core';
import AllCustomerService from '../AllcustomerService';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import {queryClient} from '../../../../Constants/Config';

function useCustomerMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const updateCustomerMutation = useMutation(
    AllCustomerService.updateCustomer,
    {
      onSuccess: (responseData: AxiosResponse<any>) => {
        queryClient.clear();
        if (responseData) {
          const {status, data} = responseData;
          if (status === 200 || true) {
            SnackbarHandler.successToast(data?.message);
            // navigation.navigate('AllItems');
          }
        }
      },

      onError: (error: any) => {
        if (error?.response) {
          const {status, data} = error?.response;
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
            } catch (_error) {}
          }
        } else {
        }
      },
    },
  );

  const deleteCustomerMutation = useMutation(
    AllCustomerService.deleteCustomer,
    {
      onSuccess: (responseData: AxiosResponse<any>) => {
        queryClient.clear();
        if (responseData) {
          const {status, data} = responseData;
          if (status === 200 || true) {
            SnackbarHandler.successToast(data?.message);
            navigation.goBack();
          }
        }
      },

      onError: (error: any) => {
        if (error?.response) {
          const {status, data} = error?.response;
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
            } catch (_error) {}
          }
        } else {
        }
      },
    },
  );

  const globalCustomerMutation = useMutation(
    AllCustomerService.globalCustomer,
    {
      onSuccess: (responseData: AxiosResponse<any>) => {
        queryClient.clear();
        if (responseData) {
          const {status, data} = responseData;
          if (status === 200 || true) {
            if (data?.data) {
              dispatch({type: 'SEARCH_CUSTOMER', payload: data?.data});
              SnackbarHandler.successToast(data?.message);
            } else {
              SnackbarHandler.errorToast('No Customer Found!');
            }

            // navigation.goBack();
          }
        }
      },

      onError: (error: any) => {
        if (error?.response) {
          const {status, data} = error?.response;
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
            } catch (_error) {}
          }
        } else {
        }
      },
    },
  );

  return {
    // getAllitem: itemMutation.mutate,
    // addItem: addItemMutation.mutate,
    globalCustomer: globalCustomerMutation.mutate,
    updateCustomer: updateCustomerMutation.mutate,
    deleteCustomer: deleteCustomerMutation.mutate,
    loading:
      // itemMutation.isLoading ||
      // addItemMutation.isLoading ||
      updateCustomerMutation.isLoading || deleteCustomerMutation.isLoading,
  };
}

export default useCustomerMutation;
