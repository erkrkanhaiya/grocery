import { fetcher } from './../../Helpers/index';
// import {fetcher} from 'src/Helpers';

class IAPService {
  queryKeys = {
    iapStatus: 'iapStatus',
  };

  iapStatus = async () => {
    return fetcher({
      url: '/iapstatus',
    });
  };

  iapConfirm = (data: any) => {
    return fetcher({
      url: '/confirmiap',
      method: 'POST',
      data,
    });
  };
}

export default new IAPService();
