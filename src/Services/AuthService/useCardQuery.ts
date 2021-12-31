import { useCallback, } from 'react';
import { useInfiniteQuery } from 'react-query';
import CardService from './CardService';
import { useFocusEffect } from '@react-navigation/native';


function useCardQuery(sortVal, isFilter) {
  const usersInfiniteQuery = useInfiniteQuery(
    CardService.queryKeys.fetchMany,
    ({ pageParam }) => CardService.fetchMany({ pageParam }, sortVal, isFilter),
    {
      getNextPageParam: CardService.fetchManyNext,
      getPreviousPageParam: CardService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;



  const cardlist = CardService.extractMany(data?.pages);


  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );


  // useLayoutEffect(() => {
  //   refetch();
  // }, [refetch]);

  return {
    cardlist,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}
export default useCardQuery;