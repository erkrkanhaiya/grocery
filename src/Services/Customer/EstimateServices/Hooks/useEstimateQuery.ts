import { useLayoutEffect, useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import AllEstimateService from '../AllEstimateService';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';


function useEstimateQuery(sortVal, isFilter) {

  const usersInfiniteQuery = useInfiniteQuery(
    AllEstimateService.queryKeys.fetchMany,
    ({ pageParam }) => AllEstimateService.fetchMany({ pageParam }, sortVal, isFilter),
    {
      getNextPageParam: AllEstimateService.fetchManyNext,
      getPreviousPageParam: AllEstimateService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;

  const allestimates = AllEstimateService.extractMany(data?.pages);

 

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
    allestimates,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useEstimateQuery;
