import { useCallback, useEffect, useState } from 'react';
import { Linking, Platform } from 'react-native';
import iap, {
  getProducts,
  getSubscriptions,
  Product,
  Subscription,
} from 'react-native-iap';
// import {useIapValue} from 'src/HookState/iapState';
import { getSystemVersion, getBundleId } from 'react-native-device-info';
import { useIapValue } from '../../../HookState/iapState';
import { productIds, subscriptionIds } from '../../../Constants/iap';

function useIAPMethods() {
  const { status } = useIapValue();
  const [products, setProducts] = useState<Product[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  // const cancelSubscription = useCallback((sku?: string) => {
  //   if (Platform.OS === 'ios') {
  //     const osVersion = parseInt(getSystemVersion(), 10);
  //     if (osVersion > 12) {
  //       Linking.openURL('https://apps.apple.com/account/subscriptions');
  //     } else {
  //       Linking.openURL(
  //         'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/manageSubscriptions',
  //       );
  //     }
  //   } else {
  //     Linking.openURL(
  //       `https://play.google.com/store/account/subscriptions?package=${getBundleId()}&sku=${sku}`,
  //     );
  //   }
  // }, []);

  useEffect(() => {
    // (async () => {
    //   await iap.initConnection();
    const itemSkus = Platform.select({
      android: ['com.zani.app.onemonth', 'com.zani.app.oneyear'],
      ios: ['com.zani.app.one_month', 'com.zani.app.one_year'],
    })
    //   const products = await iap.getSubscriptions(itemSkus)
    //   console.log(products, '_++products');
    // })();
    // console.log(products, '_++++products');


    // async function fetchMyAPI() {
    //   await iap.initConnection();
    //   const itemSkus = Platform.select({
    //     android: ['com.zani.app.onemonth', 'com.zani.app.oneyear'],
    //     ios: ['com.zani.app.one_month', 'com.zani.app.one_year'],
    //   });
    //   const products = await iap
    //     .getSubscriptions(itemSkus)
    //     .then((res) => {
    //       console.log(res, 'resssss');
    //     })
    //     .catch((err) => console.log(err, 'errrrrr'));
    // }

    // fetchMyAPI();

    if (status) {
      (async () => {
        try {
          const _subscriptions = await iap.getSubscriptions(itemSkus);
          const new_subscriptions = _subscriptions.map((_) => {
            if (_.description.includes('year')) {
              return {
                ..._, dis: '200 Invoice 400 Estimate each month', each: '/ Year'
              }
            }
            return {
              ..._, dis: '200 Invoice 400 Estimate', each: '/ Month'
            }

          })
          setSubscriptions(new_subscriptions);
          console.log(_subscriptions, new_subscriptions, itemSkus, "A>>>>");
        } catch (error) {
          console.log({ error });
        }
      })();
    }

  }, [status]);

  // console.log(
  //   products,
  //   subscriptions, subscriptionIds, "?????"
  // );

  return {
    products,
    subscriptions,
    requestSubscription: (sku: string) => {
      if (status) {
        return iap.requestSubscription(sku);
      }
    },
    requestPurchase: (sku: string) => {
      if (status) {
        return iap.requestPurchase(sku);
      }
    },
    // cancelSubscription,
    getProducts,
    getSubscriptions,
  };
}

export default useIAPMethods;
