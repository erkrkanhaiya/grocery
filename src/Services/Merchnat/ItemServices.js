import {tokenfetcher} from '../../Helpers';

class ItemServices {
  queryKeys = {};

  getAllItems = (data: any) => {
    return tokenfetcher({
      url: `all-items?page=${data}`,
      method: 'GET',
      data,
    });
  };

  addItem = (data: any) => {
    return tokenfetcher({
      url: 'add-item',
      method: 'POST',
      data,
    });
  };

  updateItem = (data: any) => {
    return tokenfetcher({
      url: 'update-item',
      method: 'POST',
      data,
    });
  };

  deleteItem = (data: any) => {
    return tokenfetcher({
      url: 'delete-item',
      method: 'POST',
      data,
    });
  };

  

  

}

export default new ItemServices();

