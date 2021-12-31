import {Platform} from 'react-native';
import iap from 'react-native-iap';
import {useQuery} from 'react-query';
import { subscriptionIds,productIds } from '../../../Constants/iap';
import { useIapValue,setIapValue } from '../../../HookState/iapState';
import IAPService from '../IAPService';

function useIAPRestore() {
  const {status, premium} = useIapValue();

  useQuery(IAPService.queryKeys.iapStatus, IAPService.iapStatus, {
    onSuccess: () => {
      if (status && !premium) {
        (async () => {
          try {
            const purchases = await iap.getAvailablePurchases();
            console.log({purchases},"purchases");

            purchases.forEach(async purchase => {
              if (purchase.productId) {
                const allProductIds = [...subscriptionIds, ...productIds];
                // call api here

                // only on api success
                setIapValue(c => ({...c, premium: true}));
                const currentProductId = allProductIds.find(
                  _ => _.productId === purchase.productId,
                );
                if (purchase.transactionReceipt && currentProductId) {
                  if (Platform.OS === 'ios') {
                    // if (purchase.transactionId) {
                    //   await iap.finishTransactionIOS(purchase.transactionId);
                    // }
                  } else if (Platform.OS === 'android') {
                    if (purchase.purchaseToken) {
                      if (currentProductId.consumable) {
                        // await iap.consumePurchaseAndroid(
                        //   purchase.purchaseToken,
                        // );
                      } else {
                        await iap.acknowledgePurchaseAndroid(
                          purchase.purchaseToken,
                        );
                      }
                    }
                  }
                }
              }
            });
          } catch (error) {
            console.log({error});
          }
        })();
      }
    },
    enabled: status,
  });
}

export default useIAPRestore;
