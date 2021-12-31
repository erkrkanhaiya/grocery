import { useCallback, } from 'react';
import { useInfiniteQuery } from 'react-query';
import UserService from '../UserService';
import { useFocusEffect } from '@react-navigation/native';


function useUsersQuery(sortVal, isFilter) {
  const usersInfiniteQuery = useInfiniteQuery(
    UserService.queryKeys.fetchMany,
    ({ pageParam }) => UserService.fetchMany({ pageParam }, sortVal, isFilter),
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



  const items = UserService.extractMany(data?.pages);


  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );


  // useLayoutEffect(() => {
  //   refetch();
  // }, [refetch]);

  return {
    items,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}
export default useUsersQuery;