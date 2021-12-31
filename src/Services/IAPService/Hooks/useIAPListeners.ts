import {useEffect} from 'react';
import {EmitterSubscription, Platform} from 'react-native';
import iap from 'react-native-iap';
import {useMutation} from 'react-query';
import { productIds,subscriptionIds } from './../../../Constants/iap';
import SnackbarHandler from '../../../Utils/Shared/SnackbarHandler';
import { setIapValue, useIapValue } from '../../../HookState/iapState';
import IAPService from '../IAPService';

function useIAPListeners() {
  const {status} = useIapValue();

  const iapConfirmationMutation = useMutation(IAPService.iapConfirm);

  useEffect(() => {
    let purchaseUpdatedListener: EmitterSubscription;
    let purchaseErrorListener: EmitterSubscription;

    if (status) {
      const allProductIds = [...subscriptionIds, ...productIds];
      purchaseUpdatedListener = iap.purchaseUpdatedListener(async event => {
        // call api here
        await iapConfirmationMutation.mutateAsync({});
        // only on api success
        setIapValue(c => ({...c, premium: true}));
        const currentProductId = allProductIds.find(
          _ => _.productId === event.productId,
        );
        if (event.transactionReceipt && currentProductId) {
          if (Platform.OS === 'ios') {
            if (event.transactionId) {
              await iap.finishTransactionIOS(event.transactionId);
            }
          } else if (Platform.OS === 'android') {
            if (event.purchaseToken) {
              if (currentProductId.consumable) {
                await iap.consumePurchaseAndroid(event.purchaseToken);
              } else {
                await iap.acknowledgePurchaseAndroid(event.purchaseToken);
              }
            }
          }
        }
      });
      purchaseErrorListener = iap.purchaseErrorListener(event => {
        console.log({event},"event");

        if (event.message) {
          SnackbarHandler.errorToast(event.message);
        }
      });
    }

    return () => {
      if (purchaseUpdatedListener) {
        purchaseUpdatedListener.remove();
      }
      if (purchaseErrorListener) {
        purchaseErrorListener.remove();
      }
    };
  }, [iapConfirmationMutation, status]);
}

export default useIAPListeners;
