import { useCallback, } from 'react';
import { useInfiniteQuery } from 'react-query';
import AllInvoiceService from '../InvoiceService';
import { useFocusEffect } from '@react-navigation/native';


function useInvoiceQuery(sortVal, isFilter) {
  const usersInfiniteQuery = useInfiniteQuery(
    AllInvoiceService.queryKeys.fetchMany,
    ({ pageParam }) => AllInvoiceService.fetchMany({ pageParam }, sortVal, isFilter),
    {
      getNextPageParam: AllInvoiceService.fetchManyNext,
      getPreviousPageParam: AllInvoiceService.fetchManyPrevious,
    },
  );

  const {
    refetch,
    data,
    isLoading: loading,
    fetchNextPage,
    fetchPreviousPage,
  } = usersInfiniteQuery;

  const allInvoices = AllInvoiceService.extractMany(data?.pages);



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
    allInvoices,
    loading,
    fetchNextPage,
    fetchPreviousPage,
  };
}

export default useInvoiceQuery;
