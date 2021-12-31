import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../../Helpers';
import { useDispatch } from 'react-redux';
import Helper from '../../../Helpers/Helper';

class CustomerService {
  queryKeys = {};



  getCountry = (data: any) => {
    return tokenfetcher({
      url: 'get-countries',
      method: 'GET',
      data,
    });
  };

  getState = (data: any) => {
    return tokenfetcher({
      url: `get-states?country_id=${data}`,
      method: 'GET',
      data,
    });
  };


  addBilling = (data: any) => {
    return tokenfetcher({
      url: 'add-card',
      method: 'POST',
      data,
    });
  };



  addPerson = (data: any) => {
    return tokenfetcher({
      url: 'add-contact',
      method: 'POST',
      data,
    });
  };

 

  addAddress = (data: any) => {
    return tokenfetcher({
      url: 'add-address',
      method: 'POST',
      data,
    });
  };




  

}

export default new CustomerService();

