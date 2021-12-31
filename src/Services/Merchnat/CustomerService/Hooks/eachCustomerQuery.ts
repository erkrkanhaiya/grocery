import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import AllCustomerService from '../AllcustomerService';

function searchCustomerQuery(email) {
  const navigation = useNavigation();

  const globalCustomer = useQuery(
    AllCustomerService.queryKeys.fetchemail,
    () => AllCustomerService.fetchemail(email),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const { remove, data, isLoading: loading } = globalCustomer;
  const globalcustomer = data;

  useLayoutEffect(() => {
    remove();
  }, [remove]);



  return { globalCustomer, globalcustomer, loading };
}

export default searchCustomerQuery;
