import { useLayoutEffect, useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import AllEstimateService from '../AllEstimateService';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';


function useEstimateQuery() {
  const navigation = useNavigation();

  const usersInfiniteQuery = useInfiniteQuery(
    AllEstimateService.queryKeys.fetchMany,
    AllEstimateService.fetchMany,
    {
      getNextPageParam: AllEstimateService.fetchManyNext,
      getPreviousPageParam: AllEstimateService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    remove,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;

  const estimates = AllEstimateService.extractMany(data?.pages);

 

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );

  // useEffect(() => {
  //   if (navigation.isFocused()) {
  //     refetch(); // replace with your function
  //   }
  // }, [navigation.isFocused()]);

  return {
    estimates,
    loading,
    remove,
    refetch,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useEstimateQuery;
