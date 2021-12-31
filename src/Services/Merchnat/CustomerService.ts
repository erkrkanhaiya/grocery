import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../Helpers';
import { AppAtomInstance } from '../../Recoil/Atoms/appAtom';
import { useDispatch } from 'react-redux';
import Helper from '../../Helpers/Helper';

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

  addCustomer = (data: any) => {
    return tokenfetcher({
      url: 'add-customer',
      method: 'POST',
      data,
    });
  };


  addPerson = (data: any) => {
    return tokenfetcher({
      url: 'add-customer-contact',
      method: 'POST',
      data,
    });
  };

  getAllcustomer = (data: any) => {
    return tokenfetcher({
      url: 'get-all-customers',
      method: 'GET',
      data,
    });
  };

  addAddress = (data: any) => {
    return tokenfetcher({
      url: 'add-customer-address',
      method: 'POST',
      data,
    });
  };


  updateCustomer = (data: any) => {
    return tokenfetcher({
      url: 'update-customer',
      method: 'POST',
      data,
    });
  };

  

}

export default new CustomerService();

