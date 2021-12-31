import {useLayoutEffect,useCallback} from 'react';
import {useInfiniteQuery} from 'react-query';
import { useFocusEffect } from '@react-navigation/native';

import UserService from '../CovidService';

function useAllCovidQuery() {
  const usersInfiniteQuery = useInfiniteQuery(
    UserService.queryKeys.fetchMany,
    UserService.fetchMany,
    {
      getNextPageParam: UserService.fetchManyNext,
      getPreviousPageParam: UserService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;



  const allcovid = UserService.extractMany(data?.pages);
  // console.log(data, 'ddddddd', allcovid);


  // useLayoutEffect(() => {
  //   refetch();
  // }, [refetch]);

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );

  return {
    allcovid,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useAllCovidQuery;




