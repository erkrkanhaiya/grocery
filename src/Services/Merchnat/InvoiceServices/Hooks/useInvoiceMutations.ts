import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import InvoiceService from '../InvoiceServices';
import { StackActions } from '@react-navigation/native';

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


  const sendInvoiceMutation = useMutation(InvoiceService.sendInvoice, {
    onSuccess: (responseData: AxiosResponse<any>, varibales) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Invoice Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          if (varibales.fromList) {
            navigation.dispatch(StackActions.pop(1))
          } else {
            navigation.dispatch(StackActions.pop(2))

          }
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


  const deleteInvoiceMutation = useMutation(InvoiceService.deleteInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Invoice Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.dispatch(StackActions.pop(1))
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




  const updateInvoiceMutation = useMutation(InvoiceService.updateInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Invoice Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.dispatch(StackActions.pop(2))
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


  const selfAcceptEstiamteMutation = useMutation(InvoiceService.selfAcceptInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.goBack();
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
    // getAllitem: itemMutation.mutate,
    addInvoice: addInvoiceMutation.mutate,
    invoiceDetails: invoiceDetailsMutation.mutate,
    sendInvoice: sendInvoiceMutation.mutate,
    deleteInvoice: deleteInvoiceMutation.mutate,
    updateInvoice: updateInvoiceMutation.mutate,
    selfAccept: selfAcceptEstiamteMutation.mutate,
    sendINVloading: sendInvoiceMutation.isLoading,
    loading:
      addInvoiceMutation.isLoading || invoiceDetailsMutation.isLoading ||
      deleteInvoiceMutation.isLoading || updateInvoiceMutation.isLoading || selfAcceptEstiamteMutation.isLoading,
  };
}

export default invoiceMutation;
