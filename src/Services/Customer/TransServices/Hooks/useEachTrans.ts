import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import AllTransService from '../AllTransService';

function useEachTransQuery() {
  const route = useRoute();
  const {prevData}: any = route.params;
  const navigation = useNavigation();


  const userQuery = useQuery(
    AllTransService.queryKeys.fetch,
    () => AllTransService.fetch(prevData?.id),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {remove, data, isLoading: loading} = userQuery;
  const eachtrans = AllTransService.extract(data?.data);

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

  return {eachtrans, loading};
}

export default useEachTransQuery;