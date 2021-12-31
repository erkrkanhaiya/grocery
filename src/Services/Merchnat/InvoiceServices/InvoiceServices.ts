import AsyncStorage from '@react-native-community/async-storage';
import { tokenfetcher } from '../../../Helpers';
import { AppAtomInstance } from '../../../Recoil/Atoms/appAtom';
import { useDispatch } from 'react-redux';
import Helper from '../../../Helpers/Helper';

class InvoiceService {
  queryKeys = {};

  invoiceDetails = (data: any) => {
    return tokenfetcher({
      url: `invoice-details?invoice_id=${data}`,
      method: 'GET',
    //   data,
    });
  };

  addInvoice = (data: any) => {
    return tokenfetcher({
      url: 'create-invoice',
      method: 'POST',
      data,
    });
  };


  sendInvoice = (data: any) => {
    return tokenfetcher({
      url: 'send-invoice',
      method: 'POST',
      data,
    });
  };

  
  deleteInvoice = (data: any) => {
    return tokenfetcher({
      url: 'delete-invoice',
      method: 'POST',
      data,
    });
  };

  updateInvoice = (data: any) => {
    return tokenfetcher({
      url: 'update-invoice',
      method: 'POST',
      data,
    });
  };


  selfAcceptInvoice = (data: any) => {
    return tokenfetcher({
      url: 'self-confirm-invoice',
      method: 'POST',
      data,
    });
  };


  

}

export default new InvoiceService();

