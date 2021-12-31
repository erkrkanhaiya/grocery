import { useLayoutEffect, useCallback, useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import AllTransService from '../AllTransService';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';



function useAllTrnasQuery(sortVal, isFilter, customerName) {

  const usersInfiniteQuery = useInfiniteQuery(
    AllTransService.queryKeys.fetchMany,
    ({ pageParam }) => AllTransService.fetchMany({ pageParam }, sortVal, isFilter, customerName),
    {
      getNextPageParam: AllTransService.fetchManyNext,
      getPreviousPageParam: AllTransService.fetchManyPrevious,
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

  const alltrnas = AllTransService.extractMany(data?.pages);

  useEffect(() => {
    refetch()
  }, [customerName])

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
    alltrnas,
    loading,
    remove,
    refetch,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useAllTrnasQuery;
