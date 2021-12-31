import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import CovidService from '../CovidService';

function useCovidQuery() {
  const route = useRoute();
  const {prevData}: any = route.params;
  const navigation = useNavigation();

  const covidQuery = useQuery(
    CovidService.queryKeys.fetch,
    () => CovidService.fetch(prevData?.id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = covidQuery;
  const eachcovid = CovidService.extract(data?.data);

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

export default useCovidQuery;
