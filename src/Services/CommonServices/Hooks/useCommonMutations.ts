import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosResponse } from 'axios';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import { queryClient } from '../../../Constants/Config';
import { useMutation } from 'react-query';
import { useNavigation } from '@react-navigation/core';
import CommonService from '../commonServices';

function commonMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const contactUsMutation = useMutation(CommonService.contactUs, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' contactUs Api Response');
        if (status === 200 || true) {
          navigation.goBack()
          SnackbarHandler.successToast(data?.message);
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









  return {
    // getAllitem: itemMutation.mutate,
    contactusApi: contactUsMutation.mutate,
    loading:
      // itemMutation.isLoading ||
      contactUsMutation.isLoading,
    // deleteItemMutation.isLoading,
  };
}

export default commonMutation;
