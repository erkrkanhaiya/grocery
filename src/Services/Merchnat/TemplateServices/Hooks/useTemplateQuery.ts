
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useCallback, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import AllTemplateService from '../AllHomeService';
import { useFocusEffect } from '@react-navigation/native';


function useTemplateQuery(type) {
  const navigation = useNavigation();

  const userQuery = useQuery(
    AllTemplateService.queryKeys.fetch,
    () => AllTemplateService.fetch(type),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const { refetch, data, isLoading: loading } = userQuery;
  const teamplatedata = AllTemplateService.extract(data?.data);


  useEffect(() => {
    refetch();
  }, [type])

  useLayoutEffect(() => {
    refetch();
  }, [refetch]);

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

  return { teamplatedata, loading };
}

export default useTemplateQuery;