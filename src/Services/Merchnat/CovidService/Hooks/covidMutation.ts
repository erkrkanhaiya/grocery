import { useMutation } from 'react-query';
import CovidService from '../CovidService';
import { queryClient } from '../../../../Constants/Config';
import SnackbarHandler from '../../../../Utils/Shared/SnackbarHandler';
import { useNavigation } from '@react-navigation/core';
import { StackActions } from '@react-navigation/native';


function useCovidMutation() {
  const navigation = useNavigation();

  const userAddMutation = useMutation(CovidService.add, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Covid Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          if (variables.forEdit) {
            return navigation.dispatch(StackActions.pop(2))
          }
          return navigation.dispatch(StackActions.pop(1))
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



  const deleteCovidMutation = useMutation(CovidService.deleteCovidform, {
    onSuccess: (responseData: AxiosResponse<any>, variables) => {
      queryClient.clear();
      if (responseData) {
        const { status, data } = responseData;
        console.log(status, data, ' Covid Api Response');
        if (status === 200 || true) {
          SnackbarHandler.successToast(data?.message);
          navigation.dispatch(StackActions.pop(1))

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
    add: userAddMutation.mutate,
    deleteCovid: deleteCovidMutation.mutate,
    loading: userAddMutation.isLoading || deleteCovidMutation.isLoading,
  };
}

export default useCovidMutation;
