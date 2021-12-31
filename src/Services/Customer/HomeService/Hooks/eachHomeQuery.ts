import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import HomeService from '../HomeService';

function useHomeQuery() {
  const route = useRoute();
  const {prevData}: any = route.params;
  const navigation = useNavigation();

  const homeQuery = useQuery(
    HomeService.queryKeys.fetch,
    () => HomeService.fetch(prevData?.id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = homeQuery;
  const eachcovid = HomeService.extract(data?.data);

  useLayoutEffect(() => {
    remove();
  }, [remove]);

  // useEffect(() => {
  //   if (covid?.name) {
  //     navigation.setOptions({headerTitle: covid.name});
  //   }
  //   return () => {
  //     navigation.setOptions({headerTitle: ''});
  //   };
  // }, [navigation, covid?.name]);

  return {eachcovid, loading};
}

export default useHomeQuery;
