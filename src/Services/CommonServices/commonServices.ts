import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../Helpers';
import { useDispatch } from 'react-redux';

class CommonService {
  queryKeys = {};

  invoiceDetails = (data: any) => {
    return tokenfetcher({
      url: `invoice-details?invoice_id=${data}`,
      method: 'GET',
    //   data,
    });
  };

  contactUs = (data: any) => {
    return tokenfetcher({
      url: 'contact_us',
      method: 'POST',
      data,
    });
  };


  customerDeleteInvoice = (data: any) => {
    return tokenfetcher({
      url: 'customer/delete-invoice',
      method: 'POST',
      data,
    });
  };


  


  

}

export default new CommonService();

