import { useLayoutEffect, useCallback } from 'react';
import { useInfiniteQuery } from 'react-query';
import AllCustomerService from '../AllcustomerService';
import { useFocusEffect } from '@react-navigation/native';


function useCustomerQuery() {
  const usersInfiniteQuery = useInfiniteQuery(
    AllCustomerService.queryKeys.fetchMany,
    AllCustomerService.fetchMany,
    {
      getNextPageParam: AllCustomerService.fetchManyNext,
      getPreviousPageParam: AllCustomerService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;



  const allcustomer = AllCustomerService.extractMany(data?.pages);
  

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );

  return {
    allcustomer,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useCustomerQuery;




