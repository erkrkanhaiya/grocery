import {useMutation} from 'react-query';
import CovidService from '../HomeService';
import {queryClient} from '../../../../Constants/Config';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import {useNavigation} from '@react-navigation/core';


function useHomeMutation() {
  const navigation = useNavigation();

  const userAddMutation = useMutation(CovidService.add,{
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
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
        const {status, data} = error?.response;
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
          } catch (_error) {}
        }
      } else {
      }
    },
  });

  return {
    add: userAddMutation.mutate,
    loading: userAddMutation.isLoading,
  };
}

export default useHomeMutation;
