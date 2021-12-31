import React, { Component } from 'react';
import { Helper } from './Helper';

import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import { check, request, PERMISSIONS, openSettings } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { Constant } from '../common';

export class LocationsPermission extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    static checkLocationPermission(cb) {
        check(Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        })).then(result => {
            if (result === "granted") {
                cb(true);
            }else if (result === "blocked" || result === "unavailable") {
                cb(false);
            }
        }); 
    }


    static async geoCurrentLocation(alert = 1, cb) {
        if (Constant.platform == 'android') {
            await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({ interval: 10000, fastInterval: 5000 }).then(data => {
                this.accessLocation(alert, cb)
            }).catch(err => {
                cb({ latitude: "", longitude: "" });
            });
        } else {
            this.accessLocation(alert, cb)
        }
    }

    static accessLocation(alert, cb) {
        check(Platform.select({
            android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        })).then(result => {
            if (result === "granted") {
                console.log('already allow the location');
                this.slectLatLong(cb);
                return;
            }
            if (result === "blocked" || result === "unavailable") {
                if (alert == 1) {
                    Helper.permissionConfirm("Access to the location has been prohibited please enable it in the Settings app to continue.", ((status) => {
                        if (status) {
                            openSettings().catch(() => {
                                console.warn('cannot open settings')
                            });
                        }
                    }));
                    return;
                }
            }
            request(
                Platform.select({
                    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
                })
            ).then((status) => {
                if (status === "granted") {
                    console.log('You can use the location');
                    this.slectLatLong(cb);
                } else {
                    cb({ latitude: "", longitude: "" });
                    console.log('location permission denied');
                }
            });
        });
    }

    static slectLatLong(cb) {
        Geolocation.getCurrentPosition((info) => {
            if (info && info.coords && info.coords.latitude) {
                let form = {
                    latitude: info.coords.latitude,
                    longitude: info.coords.longitude,
                }
                cb(form);
            }
        },
            (error) => this.errorCurrentLocation(error),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000, distanceFilter: 30 }
        );
    }
    static errorCurrentLocation(error) {
        console.log("Current location error-----", error.message)
        Helper.alert("Sorry, something is wrong \nPlease check your Device location Permission")
    }

}
