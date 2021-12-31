import { useLayoutEffect, useCallback } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import HomeService from '../HomeService';

function useHomeQuery() {
  const route = useRoute();
  // const {prevData}: any = route.params;
  // const navigation = useNavigation();

  const homeQuery = useQuery(
    HomeService.queryKeys.fetchSingle,
    () => HomeService.fetchSingle(),
    {
      onError: () => {
        // navigation.goBack();
      },
    },
  );
  const { remove, refetch, data, isLoading: loading } = homeQuery;
  const homeData = HomeService.extract(data?.data);

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );

  // useEffect(() => {
  //   if (covid?.name) {
  //     navigation.setOptions({headerTitle: covid.name});
  //   }
  //   return () => {
  //     navigation.setOptions({headerTitle: ''});
  //   };
  // }, [navigation, covid?.name]);

  return { homeData, remove, refetch, loading };
}

export default useHomeQuery;




