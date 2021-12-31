import { useMutation } from 'react-query';
import PaymentService from '../PaymentServices';
import { queryClient } from '../../../../Constants/Config';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';



function usePaymentMutation() {
  const navigation = useNavigation();
  const dispatch = useDispatch();


  const usereleasepaymentMutation = useMutation(PaymentService.release, {
    onSuccess: (responseData: AxiosResponse<any>, req) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' PaymentService Api Response');
        if (status === 200 || true) {
          // itemMutation.mutate();
          SnackbarHandler.successToast(data?.message);
          if (req.home) {
            return null
          }
          return navigation.goBack();
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
    releasepayment: usereleasepaymentMutation.mutate,
    paymentloading: usereleasepaymentMutation.isLoading,
  };
}

export default usePaymentMutation;
