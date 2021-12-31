import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import InvoiceService from '../InvoiceService';

function useEachQuery() {
  const route = useRoute();
  const {prevData}: any = route.params;
  const navigation = useNavigation();


  const userQuery = useQuery(
    InvoiceService.queryKeys.fetch,
    () => InvoiceService.fetch(prevData?.id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = userQuery;
  const eachinvoice = InvoiceService.extract(data?.data);

  useLayoutEffect(() => {
    remove();
  }, [remove]);




  // useEffect(() => {
  //   if (user?.name) {
  //     navigation.setOptions({headerTitle: user.name});
  //   }
  //   return () => {
  //     navigation.setOptions({headerTitle: ''});
  //   };
  // }, [navigation, user?.name]);

  return {eachinvoice, loading};
}

export default useEachQuery;