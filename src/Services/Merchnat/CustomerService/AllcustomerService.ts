import { ITEMS } from '../../../Constants/ResponseTypes';
import { tokenfetcher } from '../../../Helpers';

class AllCustomerService {
  queryKeys = {
    fetch: 'fetchcustomers',
    fetchMany: 'fetchManycustomers',
    fetchemail:'fetchemail'
  };

  fetchMany = async ({ pageParam = 1 }) => {
    return tokenfetcher({
      url: 'get-all-customers?page=' + pageParam + '&email=' ,
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

  fetchemail = async (email: string) => {
    return tokenfetcher({
      url: `search-customer-by-email?email=${email}` ,
    });
  };

  updateCustomer = (data: any) => {
    return tokenfetcher({
      url: '/update-customer',
      data,
      method: 'POST',
    });
  };


  deleteCustomer = (data: any) => {
    return tokenfetcher({
      url: '/delete-customer',
      data,
      method: 'POST',
    });
  };

  globalCustomer = (data: any) => {
    return tokenfetcher({
      url: `search-customer-by-email?email=${data}`,
      method: 'GET',
    });
  };


}

export default new AllCustomerService();
