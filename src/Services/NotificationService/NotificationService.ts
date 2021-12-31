import { ITEMS } from '../../Constants/ResponseTypes';
import { tokenfetcher } from '../../Helpers';

class NotificationService {
  queryKeys = {
    fetch: 'fetchlist',
    fetchMany: 'fetchManylist',
    updateListStatus:'updateListStatus'
  };

  fetchMany = async ({ pageParam = 1 }) => {
    return tokenfetcher({
      url: `notifications`,
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

  notificationslist = async (userId: string) => {
    return tokenfetcher({
      url: 'notifications',
    });
  };

  update = (data: any) => {
    return tokenfetcher({
      url: 'updatetoken',
      data,
      method: 'POST',
    });
  };

  onOff = (data: any) => {
    return tokenfetcher({
      url: 'updateNotifactionStatus',
      data,
      method: 'POST',
    });
  };


}

export default new NotificationService();