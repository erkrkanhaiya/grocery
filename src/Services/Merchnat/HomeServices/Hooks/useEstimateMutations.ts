import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import EstimateService from '../EstimateServices';
import { StackActions } from '@react-navigation/native';


function estimateMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // const itemMutation = useMutation(EstimateService.getAllItems, {
  //   onSuccess: (responseData: AxiosResponse<any>) => {
  //     queryClient.clear();
  //     if (responseData) {
  //       const {status, data} = responseData;
  //       console.log(status, data, ' Item Api Response');
  //       if (status === 200 || true) {
  //         dispatch({type: 'ALL_ITEM', payload: data?.data});
  //       }
  //     }
  //   },

  //   onError: (error: any) => {
  //     if (error?.response) {
  //       const {status, data} = error?.response;
  //       console.log(status, data, 'Login Api Error');
  //       if (status !== 200) {
  //         dispatch({
  //           type: 'IS_VISIBLE',
  //           payload: {
  //             message: data.message,
  //             status: 'danger',
  //           },
  //         });
  //         try {
  //           AsyncStorage.clear();
  //         } catch (_error) {}
  //       }
  //     } else {
  //     }
  //   },
  // });

  const addEstimateMutation = useMutation(EstimateService.addEstimate, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.navigate('EstimateDetail', { prevData: { id: data?.data?.id } })

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

  const estimateDetailsMutation = useMutation(EstimateService.estimateDetails, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200 || true) {
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

  const sendEstimateMutation = useMutation(EstimateService.sendEstimate, {
    onSuccess: (responseData: AxiosResponse<any>, varibales) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
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





  const createInvoiceMutation = useMutation(EstimateService.createInvoice, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
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



  const deleteEstiamteMutation = useMutation(EstimateService.deleteEstimate, {
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


  const selfAcceptEstiamteMutation = useMutation(EstimateService.selfAcceptEstimate, {
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


  const updateEstiamteMutation = useMutation(EstimateService.updateEstimate, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.dispatch(StackActions.pop(2))
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
    addEstimate: addEstimateMutation.mutate,
    estimateDetails: estimateDetailsMutation.mutate,
    sendEstiamte: sendEstimateMutation.mutate,
    createInvoice: createInvoiceMutation.mutate,
    deleteEstimate: deleteEstiamteMutation.mutate,
    selfAccept: selfAcceptEstiamteMutation.mutate,
    updateEstimate: updateEstiamteMutation.mutate,
    loading:
      addEstimateMutation.isLoading || estimateDetailsMutation.isLoading || sendEstimateMutation.isLoading ||
      createInvoiceMutation.isLoading || deleteEstiamteMutation.isLoading || selfAcceptEstiamteMutation.isLoading || updateEstiamteMutation.isLoading,
  };
}

export default estimateMutation;
