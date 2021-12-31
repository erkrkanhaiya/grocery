import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {AxiosResponse} from 'axios';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import {queryClient} from '../../../Constants/Config';
import {useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/core';
import ItemServices from '../ItemServices';

function useItemMutation() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const itemMutation = useMutation(ItemServices.getAllItems, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          dispatch({type: 'ALL_ITEM', payload: data?.data});
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

  const addItemMutation = useMutation(ItemServices.addItem, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          itemMutation.mutate();
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

  const updateItemMutation = useMutation(ItemServices.updateItem, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          itemMutation.mutate();
          SnackbarHandler.successToast(data?.message);
          navigation.navigate('AllItems');
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

  const deleteItemMutation = useMutation(ItemServices.deleteItem, {
    onSuccess: (responseData: AxiosResponse<any>) => {
      queryClient.clear();
      if (responseData) {
        const {status, data} = responseData;
        console.log(status, data, ' Item Api Response');
        if (status === 200 || true) {
          itemMutation.mutate();
          SnackbarHandler.successToast(data?.message);
          navigation.navigate('AllItems');
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
    getAllitem: itemMutation.mutate,
    addItem: addItemMutation.mutate,
    updateItem: updateItemMutation.mutate,
    deleteItem: deleteItemMutation.mutate,
    loading:
      itemMutation.isLoading ||
      addItemMutation.isLoading ||
      updateItemMutation.isLoading ||
      deleteItemMutation.isLoading,
  };
}

export default useItemMutation;
