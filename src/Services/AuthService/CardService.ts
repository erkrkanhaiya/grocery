import {AppAtomInstance} from '../../../src/Recoil/Atoms/appAtom';
import AsyncStorage from '@react-native-community/async-storage';
import Helper from '../../Helpers/Helper';
import {fetcher, tokenfetcher} from '../../Helpers';
import {useDispatch} from 'react-redux';
import { ITEMS } from '../../Constants/ResponseTypes';

class CardService {
  queryKeys = {
    fetch: 'fetchcards',
    fetchMany: 'fetchManycards',
  };

  addCard = (data: any) => {
    return fetcher({
      url: 'customer/create/card',
      method: 'POST',
      data,
    });
  };
  deleteCard = (data: any) => {
    return fetcher({
      url: 'customer/remove/card', //  delete-card',
      method: 'POST',
      data,
    });
  };
  addPrimary = (data: any) => {
    return fetcher({
      url: 'customer/make/card/primary',
      method: 'POST',
      data,
    });
  };


  fetchMany = async ({ pageParam = 1 }, sortVal, isFilter) => {
    return tokenfetcher({
      url: `customer/list/card`,
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



}





export default new CardService();
