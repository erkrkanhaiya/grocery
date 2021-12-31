
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useCallback, useLayoutEffect } from 'react';
import { useQuery } from 'react-query';
import AllTemplateService from '../AllHomeService';
import { useFocusEffect } from '@react-navigation/native';


function defaultTemplateQuery() {
  const navigation = useNavigation();

  const userQuery = useQuery(
    AllTemplateService.queryKeys.fetchDefault,
    () => AllTemplateService.fetchDefault(),
    {
      onError: () => {
        navigation.goBack();
      },
    },
  );
  const { refetch, data, isLoading: loading } = userQuery;
  const defaultteamplatedata = AllTemplateService.extract(data?.data);


  // useLayoutEffect(() => {
  //   refetch();
  // }, [refetch]);

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

  return { defaultteamplatedata, loading };
}

export default defaultTemplateQuery;