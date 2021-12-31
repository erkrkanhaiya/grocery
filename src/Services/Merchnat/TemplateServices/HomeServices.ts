import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../../Helpers';
import { AppAtomInstance } from '../../../Recoil/Atoms/appAtom';
import { useDispatch } from 'react-redux';
import Helper from '../../../Helpers/Helper';

class HomeService {
  queryKeys = {};

  estimateDetails = (data: any) => {
    return tokenfetcher({
      url: `estimate-details?estimate_id=${data}`,
      method: 'GET',
    //   data,
    });
  };

  addEstimate = (data: any) => {
    return tokenfetcher({
      url: 'create-estimate',
      method: 'POST',
      data,
    });
  };


  sendEstimate = (data: any) => {
    return tokenfetcher({
      url: 'send-estimate',
      method: 'POST',
      data,
    });
  };

  createInvoice = (data: any) => {
    return tokenfetcher({
      url: 'create-invoice',
      method: 'POST',
      data,
    });
  };

  
  deleteEstimate = (data: any) => {
    return tokenfetcher({
      url: 'delete-estimate',
      method: 'POST',
      data,
    });
  };


    
  selfAcceptEstimate = (data: any) => {
    return tokenfetcher({
      url: 'self-accept-estimate',
      method: 'POST',
      data,
    });
  };


  setDefaultInvoice = (data: any) => {
    return tokenfetcher({
      url: 'set-default-Template',
      method: 'POST',
      data,
    });
  };

  

}

export default new HomeService();

