import { useMutation } from 'react-query';
import Notification from '../NotificationService';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { queryClient } from '../../../Constants/Config';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
function useNotificationMutation() {
  const dispatch = useDispatch();


  const userUpdateMutation = useMutation(Notification.update, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, 'response ayeeeee');
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




  const onOffnotificationMutation = useMutation(Notification.onOff, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, 'response ayeeeee');
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

  return {
    updateDevice: userUpdateMutation.mutate,
    onOff: onOffnotificationMutation.mutate,
    loading: userUpdateMutation.isLoading || onOffnotificationMutation.isLoading,
  };
}

export default useNotificationMutation;
