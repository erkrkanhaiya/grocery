import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../../Helpers';
import { AppAtomInstance } from '../../../Recoil/Atoms/appAtom';
import { useDispatch } from 'react-redux';
import Helper from '../../../Helpers/Helper';

class EstimateService {
  queryKeys = {};

  estimateDetails = (data: any) => {
    return tokenfetcher({
      url: `customer/estimate-details?estimate_id=${data}`,
      method: 'GET',
    //   data,
    });
  };

  


  acceptEstimate = (data: any) => {
    return tokenfetcher({
      url: 'customer/accept-reject-estimate',
      method: 'POST',
      data,
    });
  };


  deleteCustomerEstiamte = (data: any) => {
    return tokenfetcher({
      url: 'customer/delete-estimate',
      method: 'POST',
      data,
    });
  };

  


  

}

export default new EstimateService();

