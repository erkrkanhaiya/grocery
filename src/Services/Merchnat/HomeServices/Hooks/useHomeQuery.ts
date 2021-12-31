
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect,useCallback, useLayoutEffect} from 'react';
import {useQuery} from 'react-query';
import HomeService from '../AllHomeService';
import { useFocusEffect } from '@react-navigation/native';


function useHomeQuery() {
  const route = useRoute();
  const navigation = useNavigation();


  const userQuery = useQuery(
    HomeService.queryKeys.fetch,
    () => HomeService.fetch(),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const {refetch, data, isLoading: loading} = userQuery;
  const merchnatHomedata = HomeService.extract(data?.data);

  // useLayoutEffect(() => {
  //   remove();
  // }, [remove]);

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [refetch])
  );


  // useEffect(() => {
  //   if (user?.name) {
  //     navigation.setOptions({headerTitle: user.name});
  //   }
  //   return () => {
  //     navigation.setOptions({headerTitle: ''});
  //   };
  // }, [navigation, user?.name]);

  return {merchnatHomedata, loading};
}

export default useHomeQuery;