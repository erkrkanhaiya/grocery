import ImageCropPicker from 'react-native-image-crop-picker';
import { Platform, Dimensions } from 'react-native';
import Helper from './Helper';
import {
    check,
    request,
    PERMISSIONS,
    openSettings,
} from 'react-native-permissions';

export default class CameraController {
    static async open(cb, isCrop) {
        Helper.cameraAlert(
            'Select image from.',
            'Camera',
            'Gallery',
            'Cancel',
            (status) => {
                // alert(status)
                if (status == 'Camera') {
                    CameraController.checkPremission(
                        PERMISSIONS.ANDROID.CAMERA,
                        PERMISSIONS.IOS.CAMERA,
                        cb,
                        isCrop,
                        'Camera',
                    );
                } else if (status == 'Gallery') {
                    CameraController.checkPremission(
                        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                        PERMISSIONS.IOS.PHOTO_LIBRARY,
                        cb,
                        isCrop,
                        'Gallery',
                    );
                }
            },
        );
    }

    static checkPremission = async (
        androidType,
        iosType,
        cb,
        isCrop,
        launchType,
    ) => {
        await check(
            Platform.select({
                android: androidType,
                ios: iosType,
            }),
        ).then((result) => {
            if (result === 'granted') {
                console.log('already allow the camera');
                this.selecteImage(cb, isCrop, launchType);
                return;
            }
            if (result === 'blocked' || result === 'unavailable') {
                Helper.permissionConfirm(
                    'Access to the camera has been prohibited please enable it in the Settings app to continue.',
                    (status) => {
                        if (status) {
                            openSettings().catch(() => {
                                console.warn('cannot open settings');
                            });
                        }
                    },
                );
                return;
            }
            request(
                Platform.select({
                    android: androidType,
                    ios: iosType,
                }),
            ).then((status) => {
                if (status === 'granted') {
                    console.log('You can use the camera');
                    this.selecteImage(cb, isCrop, launchType);
                } else {
                    console.log('camera permission denied');
                }
            });
        });
    };

    static selecteImage(cb, isCrop, launchType) {
        if (launchType === 'Camera') {
            if (isCrop) {
                ImageCropPicker.openCamera({
                    width: 1300,
                    height: 800,
                    cropping: true,
                    mediaType: 'photo',
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            } else {
                ImageCropPicker.openCamera({
                    cropping: true,
                    mediaType: 'photo',
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            }
        } else {
            if (isCrop) {
                ImageCropPicker.openPicker({
                    width: 1300,
                    height: 800,
                    cropping: true,
                    mediaType: 'photo',
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            } else {
                ImageCropPicker.openPicker({
                    cropping: true,
                    mediaType: 'photo',
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            }
        }
    }

    static selecteVideo(cb, isCrop, launchType) {
        if (launchType === 'Camera') {
            if (isCrop) {
                ImageCropPicker.openCamera({
                    width: 1300,
                    height: 800,
                    multiple: true,
                    title: 'Video Picker',
                    mediaType: 'image/video',
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            } else {
                ImageCropPicker.openCamera({
                    title: 'Video Picker',
                    mediaType: 'image/video',
                    multiple: true,
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            }
        } else {
            if (isCrop) {
                ImageCropPicker.openPicker({
                    width: 1300,
                    height: 800,
                    title: 'Video Picker',
                    mediaType: 'image/video',
                    multiple: true,
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            } else {
                ImageCropPicker.openPicker({
                    title: 'Video Picker',
                    mediaType: 'image/video',
                    multiple: true,
                })
                    .then((response) => {
                        cb(response);
                    })
                    .catch((e) => {
                        if (e.message === 'Cannot find image data') {
                            Helper.showToast('Please select a valid file.');
                        }
                    });
            }
        }
    }
}

// import ImagePicker from 'react-native-image-picker';
// import { Platform } from "react-native";
// import { check, request, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';
// import { Helper } from './Helper';

// export class CameraController {

//     static async open(cb) {
//         Helper.cameraAlert("Select image from...", "Camera", "Gallery", "Cancel", (value) => {
//             if (value == 'Camera') {
//                 CameraController.checkPremission(PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.IOS.CAMERA, cb, "Camera");
//             } else if (value == 'Gallery') {
//                 CameraController.checkPremission(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.IOS.PHOTO_LIBRARY, cb, "Gallery");

//             }
//         });
//     }

//     static selecteImage(cb, launchType) {
//         var options = {
//             title: 'Select type',
//             quality: 0.2,
//             // storageOptions: {
//             //     skipBackup: true,
//             //     path: 'images',
//             // },
//         };

//         if (launchType === "Camera") {
//             ImagePicker.launchCamera(options, (response) => {
//                 if (response.didCancel) {
//                     // console.log('-----User cancelled image picker');
//                 } else if (response.error) {
//                     // console.log('-------ImagePicker Error: '+ response.error);
//                 } else {
//                     response.uri = Platform.OS === "android" ? response.uri : response.uri.replace("file://", "");
//                     cb(response);
//                 }
//             });
//         } else {
//             ImagePicker.launchImageLibrary(options, (response) => {
//                 if (response.didCancel) {
//                     // console.log('-----User cancelled image picker');
//                 } else if (response.error) {
//                     // console.log('-------ImagePicker Error: '+ response.error);
//                 } else {
//                     response.uri = Platform.OS === "android" ? response.uri : response.uri.replace("file://", "");
//                     cb(response);
//                 }
//             });
//         }
//     }

//     static checkPremission = async (androidType, iosType, cb, launchType) => {
//         await check(Platform.select({
//             android: androidType,
//             ios: iosType
//         })).then(result => {
//             // console.log(result, "CResult")
//             if (result === "granted") {
//                 console.log('already allow the location');
//                 this.selecteImage(cb, launchType);
//                 return;
//             }
//             if (result === "blocked" || result === "unavailable") {
//                 Helper.permissionConfirm("Access to the "+launchType+" has been prohibited; please enable it in the Settings app to continue.", ((status) => {
//                     console.log(status, "sssssss")
//                     if (status) {
//                         openSettings().catch(() => {
//                             console.warn('cannot open settings')
//                         });
//                     }
//                 }));
//                 return;
//             }
//             request(
//                 Platform.select({
//                     android: androidType,
//                     ios: iosType
//                 })
//             ).then((status) => {
//                 if (status === "granted") {
//                     console.log('You can use the location');
//                     this.selecteImage(cb, launchType);
//                 } else {
//                     console.log('location permission denied');
//                 }
//             });
//         });
//     }

// }
