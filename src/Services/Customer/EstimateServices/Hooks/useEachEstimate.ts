import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import AllEstimateService from '../AllEstimateService';

function useEachQuery() {
  const route = useRoute();
  const {prevData}: any = route.params;
  const navigation = useNavigation();


  const userQuery = useQuery(
    AllEstimateService.queryKeys.fetch,
    () => AllEstimateService.fetch(prevData?.id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = userQuery;
  const estimate = AllEstimateService.extract(data?.data);

  useLayoutEffect(() => {
    remove();
  }, [remove]);




  // useEffect(() => {
  //   if (user?.name) {
  //     navigation.setOptions({headerTitle: user.name});
  //   }
  //   return () => {
  //     navigation.setOptions({headerTitle: ''});
  //   };
  // }, [navigation, user?.name]);

  return {estimate, loading};
}

export default useEachQuery;