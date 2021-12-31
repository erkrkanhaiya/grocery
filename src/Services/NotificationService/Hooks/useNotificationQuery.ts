import { useCallback, } from 'react';
import { useInfiniteQuery } from 'react-query';
import Notification from '../NotificationService';
import { useFocusEffect } from '@react-navigation/native';


function useAllNotificationQuery() {
  const usersInfiniteQuery = useInfiniteQuery(
    Notification.queryKeys.fetchMany,
    ({ pageParam }) => Notification.fetchMany({ pageParam },),
    {
      getNextPageParam: Notification.fetchManyNext,
      getPreviousPageParam: Notification.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;

  const allList = Notification.extractMany(data?.pages);



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
    allList,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useAllNotificationQuery;
