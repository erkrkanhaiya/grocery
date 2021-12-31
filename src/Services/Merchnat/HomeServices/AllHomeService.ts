import { HOME } from '../../../Constants/ResponseTypes';
import { tokenfetcher } from '../../../Helpers';

class AllEstimateService {
  queryKeys = {
    fetch: 'merchantHome',
    fetchMany: 'fetchManyestimate',
  };

  fetch = async () => {
    return tokenfetcher({
      url: 'merchant-home',
    });
  };

  
  fetchMany = async ({ pageParam = 1 }) => {
    return tokenfetcher({
      url: 'all-estimates?page=' + pageParam,
    });
  };

  extract = (responseData: any): HOME => {
    return responseData?.data;
  };

  extractMany = (pages: Array<any> = []): Array<HOME> => {
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

export default new AllEstimateService();
