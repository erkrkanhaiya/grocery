import {useDispatch, useSelector} from 'react-redux';

import AsyncStorage from '@react-native-community/async-storage';
import {AxiosResponse} from 'axios';
import CardService from '../CardService';
import Helper from '../../../Helpers/Helper';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import {queryClient} from '../../../Constants/Config';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/core';

function useCardMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const cardMutation = useMutation(CardService.addCard, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' Card Api Response');
        // if (status === 200 || true) {
        //   Helper.setData('user', data?.data);
        //   Helper.setData('token', data?.data?.jwtToken);
        //   Helper.user = data?.data;
        //   dispatch({type: 'UPDATE_USER', payload: data?.data});
          SnackbarHandler.successToast(data?.message);
        //   navigation.goBack();
        // }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const {status, data} = error?.response;
        console.log(status, data, 'Add card Api Error');
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

  const deleteCardMutation = useMutation(CardService.deleteCard, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, 'Card delete Api Response');
        if (status === 200 || true) {
          dispatch({type: 'UPDATE_USER', payload: data?.data});
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const {status, data} = error?.response;
        console.log(status, data, 'Card delete Api Error');
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

  const addPrimaryMutation = useMutation(CardService.addPrimary, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' AddPrimary Api Response');
        if (status === 200 || true) {
          // dispatch({type: 'UPDATE_USER', payload: data?.data});
          SnackbarHandler.successToast(data?.message);
        }
      }
    },

    onError: (error: any) => {
      if (error?.response) {
        const {status, data} = error?.response;
        console.log(status, data, 'AddPrimary Api Error');
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
    addCard: cardMutation.mutate,
    deleteCard: deleteCardMutation.mutate,
    primaryCard: addPrimaryMutation.mutate,
    loading:
      cardMutation.isLoading ||
      deleteCardMutation.isLoading ||
      addPrimaryMutation.isLoading,
    isSuccess: deleteCardMutation.isSuccess,
  };
}

export default useCardMutation;
