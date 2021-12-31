import {useEffect} from 'react';
import iap from 'react-native-iap';
import {setIapValue} from '../../../HookState/iapState';

function useIAPInit() {
  useEffect(() => {
    (async () => {
      try {
        const allowed = await iap.initConnection();
        setIapValue(c => ({...c, status: allowed}));
      } catch (error) {
        console.log({error});
      }
    })();

    return () => {
      iap.endConnection();
      setIapValue(c => ({...c, status: false}));
    };
  }, []);
}

export default useIAPInit;
