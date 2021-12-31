import { ITEMS } from './../../Constants/ResponseTypes';
import { tokenfetcher } from '../../Helpers';

class UserService {
  queryKeys = {
    fetch: 'fetchitems',
    fetchMany: 'fetchManyitems',
  };

  fetchMany = async ({ pageParam = 1 }, sortVal, isFilter) => {
    return tokenfetcher({
      url: `all-items?page=${pageParam}&${isFilter ? 'status' : 'sort_by'}=${sortVal}`,
    });
  };

  extract = (responseData: any): ITEMS => {
    return responseData?.data;
  };

  extractMany = (pages: Array<any> = []): Array<ITEMS> => {
    return pages.map((_) => _.data?.data?.data).reduce((a, b) => a.concat(b), []);
  };

  fetchManyNext = (lastPage: any) => {
    console.log({ lastPage });
    const CurrentPage = Number(lastPage.data.data.current_page);
    const LastPage = Number(lastPage.data.data.last_page);
    console.log(CurrentPage, LastPage)
    if (LastPage >= CurrentPage) {
      return CurrentPage + 1
    }


    // const page = parseInt(
    //   lastPage.config.url.substr(lastPage.config.url.length - 1),
    //   10,
    // );
    // const nextPage = page + 1;
    // const totalPages = 10;
    // if (totalPages > nextPage) {
    //   return nextPage;
    // }
  };

  fetchManyPrevious = (lastPage: any) => {
    // const page = parseInt(
    //   lastPage.config.url.substr(lastPage.config.url.length - 1),
    //   10,
    // );
    // const previousPage = page - 1;
    // if (previousPage > 1) {
    //   return page - 1;
    // }
  };

  fetch = async (userId: string) => {
    return tokenfetcher({
      url: '/users/' + userId,
    });
  };

  add = (data: any) => {
    return tokenfetcher({
      url: '/users',
      data,
      method: 'POST',
    });
  };
}

export default new UserService();

// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import {
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   View,
//   ImageBackground,
// } from 'react-native';
// import Container from 'src/Components/Shared/Container/Container';
// import Spacer from 'src/Components/Shared/Spacer/Spacer';
// import scaler from 'src/Utils/Shared/scaler';
// import CustomModal from 'src/Components/Custom/CustomModal/CustomModal';
// import Row from 'src/Components/Shared/Row/Row';
// import {
//   chatFeed,
//   logo_dark,
//   newsFeed,
//   resultFeed,
//   videoCamera,
// } from 'src/Assets/Images';
// import useApiFetchInfinite from 'src/Hooks/Shared/useApiFetchInfinite';
// import { ActivityIndicator, Badge } from 'react-native-paper';
// import Toggle from 'src/Components/Shared/Toggle/Toggle';
// import Typography from 'src/Components/Shared/Typography/Typography';
// import Center from 'src/Components/Shared/Center/Center';
// import FeedList from 'src/Components/Custom/FeedList/FeedList';
// import { useFocusEffect, useIsFocused } from '@react-navigation/native';
// import useNotification from 'src/Hooks/Custom/useNotification';
// import ChatStateHandler, {
//   useChatState,
// } from 'src/StateHandlers/ChatStateHandler';

// function FeedScreen({ navigation }: any) {
//   const [boostModal, setBoostModal] = useState(false);
//   const isFocused = useIsFocused();
//   const [{ count }]: any = useChatState();

//   useFocusEffect(
//     useCallback(() => {
//       ChatStateHandler.getUnReadMessages();
//     }, []),
//   );
//   useNotification();
//   const {
//     data: _feedData,
//     status,
//     fetchMore,
//     refetch,
//     isLoading,
//   } = useApiFetchInfinite(['/mobile/v2/post/listing/0/'], {
//     getFetchMore: (lastData) => {
//       const nextPage = Number(lastData.data.data.page) + 1;
//       const totalPages = Number(lastData.data.data.lastPage);
//       if (totalPages >= nextPage) {
//         return nextPage;
//       } else {
//         return null;
//       }
//     },
//     enabled: true,
//   });
//   useEffect(() => {
//     refetch();
//   }, [isFocused, refetch]);
//   const styles = useMemo(
//     () =>
//       StyleSheet.create({
//         chatResult: {
//           height: scaler(20),
//           width: scaler(20),
//         },
//         tabRow: {
//           justifyContent: 'space-around',
//           height: scaler(50),
//           width: 'auto',
//           backgroundColor: 'white',
//           alignItems: 'center',
//         },
//         video: {
//           height: scaler(22),
//           width: scaler(30),
//         },
//         videoView: {
//           paddingVertical: scaler(3),
//         },
//         news: {
//           height: scaler(20),
//           width: scaler(21),
//         },
//         flastListContainer: {
//           backgroundColor: 'white',
//         },
//         logoStyle: {
//           width: scaler(95.92),
//           height: scaler(28),
//         },
//         iconRow: {
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: scaler(45),
//           backgroundColor: 'white',
//         },
//         badgeStyle: { top: scaler(-6), right: scaler(-7) },
//       }),
//     [],
//   );

//   const ListHeader = useCallback(() => {
//     return (
//       <Row style= { styles.tabRow } >
//       <TouchableOpacity onPress={ () => navigation.navigate('TopVideos') }>
//         <View style={ styles.videoView }>
//           <Image source={ videoCamera } style = { styles.video } />
//             </View>
//             < /TouchableOpacity>
//             < TouchableOpacity onPress = {() => navigation.navigate('News')
// }>
//   <Image source={ newsFeed } style = { styles.news } />
//     </TouchableOpacity>
//     < TouchableOpacity onPress = {() => navigation.navigate('FeedResults')}>
//       <Image source={ resultFeed } style = { styles.chatResult } />
//         </TouchableOpacity>
//         < TouchableOpacity onPress = {() => navigation.navigate('ChatList')}>
//           <ImageBackground source={ chatFeed } style = { styles.chatResult } >
//             <Badge visible={ count > 0 } style = { styles.badgeStyle } >
//               { count > 9 ? '9+' : count}
// </Badge>
//   < /ImageBackground>
//   < /TouchableOpacity>
//   < /Row>
//     );
//   }, [
//   count,
//   navigation,
//   styles.badgeStyle,
//   styles.chatResult,
//   styles.news,
//   styles.tabRow,
//   styles.video,
//   styles.videoView,
// ]);
// const finalFeedData = (_feedData || [])
//   .map(() => .data.data.data)
//   .reduce((a, b) => a.concat(b), []);
// return (
//   <Container backgroundColor= { '#EDEDF0'} statusBarBackgroundColor = { 'white'} >
//     <Row style={ styles.iconRow }>
//       <Image style={ styles.logoStyle } source = { logo_dark } />
//         </Row>
//         < ListHeader />
//         <Spacer size={ scaler(20) } />
//           < Toggle visible = {(_feedData || []).length > 0 && !isLoading}>
//             <FeedList
//           fetchMore={ fetchMore }
// finalFeedData = { finalFeedData }
// refetch = { refetch }
// status = { status }
//   />
//   </Toggle>
//   < Toggle visible = {(_feedData || []).length === 0 && !isLoading}>
//     <Center allAxis >
//     <Typography>No post found.< /Typography>
//       < /Center>
//       < /Toggle>
//       < Toggle visible = { isLoading } >
//         <ActivityIndicator color={ 'black' } />
//           < /Toggle>
//           < CustomModal
// text = {
//   'Boost points are a way to support your favorite player / clubs / groups or other content creators. Cheering supports partners and affiliates.'
//         }
// heading = { 'Cheer for your favourite content!'}
// visible = { boostModal }
// onDismiss = {() => setBoostModal(false)}
// btnOneText = { 'Get boost points'}
//   />
//   </Container>
//   );
// }

// export default FeedScreen;
