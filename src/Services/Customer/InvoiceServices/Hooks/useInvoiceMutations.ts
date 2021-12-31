import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import InvoiceService from '../InvoiceServices';

function invoiceMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addInvoiceMutation = useMutation(InvoiceService.addInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Invoice Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.navigate('InvoiceDetail', { prevData: { id: data?.data?.id } })
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const { status, data } = error?.response;
        console.log(status, data, 'Invoice Api Error');
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

  const invoiceDetailsMutation = useMutation(InvoiceService.invoiceDetails, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          // itemMutation.mutate();
          SnackbarHandler.successToast(data?.message);
          // navigation.navigate('AllItems');
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



  const deleteCustomerInvoiceMutation = useMutation(InvoiceService.customerDeleteInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          // itemMutation.mutate();
          SnackbarHandler.successToast(data?.message);
          navigation.goBack();
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







  return {
    // getAllitem: itemMutation.mutate,
    addInvoice: addInvoiceMutation.mutate,
    invoiceDetails: invoiceDetailsMutation.mutate,
    deleteCustomerInvoice: deleteCustomerInvoiceMutation.mutate,
    loading:
      // itemMutation.isLoading ||
      addInvoiceMutation.isLoading || invoiceDetailsMutation.isLoading || deleteCustomerInvoiceMutation.isLoading
    // deleteItemMutation.isLoading,
  };
}

export default invoiceMutation;
