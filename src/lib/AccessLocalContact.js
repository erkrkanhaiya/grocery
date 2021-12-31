import React, { Component } from 'react';
import {Helper} from './Helper';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { check ,request,PERMISSIONS,openSettings} from 'react-native-permissions';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

export  class AccessLocalContact extends Component {

    static checkContactsPremission = async (cb) => {
        await check(Platform.select({
            android: PERMISSIONS.ANDROID.WRITE_CONTACTS && PERMISSIONS.ANDROID.READ_CONTACTS,
            ios: PERMISSIONS.IOS.CONTACTS
        })).then(result => {
            console.log(result,'result')
            if (result === "granted") {
                console.log('already allow the contacts');
                cb(true);
                return;
            }
            if (result === "blocked") {
                Helper.permissionConfirm("Access to the contacts has been prohibited please enable it in the Settings app to continue.", ((status) => {
                    if (status) {
                        openSettings().catch(() => {
                            console.warn('cannot open settings')
                        });
                    }
                }));
                return;
            }
            request(
                Platform.select({
                    android: PERMISSIONS.ANDROID.WRITE_CONTACTS && PERMISSIONS.ANDROID.READ_CONTACTS,
                    ios: PERMISSIONS.IOS.CONTACTS
                })
            ).then((status) => {
                if (status === "granted") {
                    console.log('You can use the contacts');
                    cb(true);
                } else {
                    console.log('contacts permission denied');
                }
            });
        });
    }

    static getAllContacts(data, cb) {
        Contacts.getAll((err, contacts) => {
            let allcontacts = [];
            for (let con of contacts) {

                // console.log('****************************All Contact Data: ', JSON.stringify(con))
                if (con.givenName && con.phoneNumbers[0] && con.phoneNumbers[0].number) {
                    allcontacts.push({
                        name: Platform.OS === "android" ? con.displayName : con.givenName + " " + con.familyName,
                        // number: con.phoneNumbers[0].number.split(' ').join(''),
                        number: this.phoneNumberCorrectFormate(con.phoneNumbers[0].number, data),
                        //country_code: defaultCode

                        country_code: ""
                    });
                    // if (con.phoneNumbers[0].number.startsWith('+')) {
                    //     allcontacts.push({
                    //         name: con.givenName,
                    //         number: con.phoneNumbers[0].number.replace('+', '').split(' ').join('')
                    //     });
                    // } else {
                    //     allcontacts.push({
                    //         name: con.givenName,
                    //         number: defaultCode + con.phoneNumbers[0].number.replace('+', '').split(' ').join('')
                    //     });
                    // }
                }
            }

            console.log('****************************All Contact List: ', JSON.stringify(allcontacts))


            cb(allcontacts);
        })
    }


    static phoneNumberCorrectFormate(strOldNumber, userDetails) {
        let strCheckContact = strOldNumber.toString()
        // console.log("strOldNumber---------", strOldNumber)
        // return strCheckContact.replace(/[^+0-9]/g, "")

        let correctContactNumber = strCheckContact.replace(/[^+0-9]/g, "")
        if (correctContactNumber.indexOf("+") == -1) {
            if (correctContactNumber.charAt(0).toString() == '0') {
                correctContactNumber = correctContactNumber.slice(1)
                if (correctContactNumber.charAt(0).toString() == '0') {
                    correctContactNumber = correctContactNumber.slice(1)
                }
            }
            correctContactNumber = userDetails.country_code + correctContactNumber
        }
        // console.log("correctContactNumber---------", correctContactNumber.replace(/[^0-9]/g, ""))

        return correctContactNumber.replace(/[^0-9]/g, "")
    }
}
