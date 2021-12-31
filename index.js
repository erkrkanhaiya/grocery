/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src/index';
import { name as appName } from './app.json';
import firebase from '@react-native-firebase/app';
// import firestore from '@react-native-firebase/firestore';

const reactNativeFirebaseConfig = {
    apiKey: "AIzaSyDeiyHDauSEDrpcyUdvl0t7sLWnTjQuUnM",
    authDomain: "grocery-18e56.firebaseapp.com",
    projectId: "grocery-18e56",
    storageBucket: "grocery-18e56.appspot.com",
    messagingSenderId: "208435142324",
    appId: "1:208435142324:web:d28ced5c8dc383b91341e1",
    measurementId: "G-SHE3C4NH1X",
    databaseURL: "https://grocery-18e56-default-rtdb.firebaseio.com/"
};
// if (firebase.apps.length === 0) {
//     firebase.initializeApp(reactNativeFirebaseConfig);
// }

if (!firebase.apps.length) {
    firebase.initializeApp(reactNativeFirebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}
// firebase.initializeApp(reactNativeFirebaseConfig);

AppRegistry.registerComponent(appName, () => App);
