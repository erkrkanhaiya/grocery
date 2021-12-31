import * as React from 'react';
import { Keyboard } from 'react-native';
// import Helper from './Helper';
import SnackBar from 'react-native-snackbar-component'
import Helper from '../lib/Helper';
import { GlobalHandler } from './SnackbarHandler';


export default class Validations extends React.Component {
    static validateform(form, validations) {
        // Keyboard.dismiss();
        let isValidForm = true;
        let message = '';
        if (!validations) {
            validations = form.validators;
        }
        let customvalidator = {
            mobile_no: 'Mobile Number',
        };
        var emojiRegexp = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g;

        var noSpecialChar = /^[a-zA-Z0-9- ]*$/;

        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
        var numberRegex = /^\d+$/; // number

        var regex_symbols = /^[a-zA-Z0-9%*#]*$/  // /[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/;

        for (let val in validations) {
            if (!isValidForm) break;
            if (form[val]) {
                for (let i in validations[val]) {
                    var valData = validations[val][i];
                    if (i == 'required' && !form[val].toString().trim()) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        message = value + ' ' + 'is required';
                    } else if (
                        i == 'noSpecial' &&
                        noSpecialChar.test(form[val]) == false
                    ) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        message = 'Special character is not allowed in ' + value;
                    } else if (
                        (i == 'minLength' || i == 'minLengthDigit') &&
                        form[val].length < valData
                    ) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        var cStr =
                            i == 'minLengthDigit' ? ' ' + 'digit' : ' ' + 'characters';
                        message = value + ' ' + 'should be minimum ' + ' ' + valData + cStr;
                    } else if (
                        (i == 'maxLength' || i == 'maxLengthDigit') &&
                        form[val].length >= valData
                    ) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        var cStr =
                            i == 'maxLengthDigit' ? ' ' + 'digit' : ' ' + 'characters';
                        message =
                            value + ' ' + 'should be smaller than' + ' ' + valData + cStr;
                    } else if (i == 'matchWith' && form[val] != form[valData]) {
                        isValidForm = false;
                        let value = val.slice().split('_').join(' ');
                        let value2 = (valData.charAt(0).toUpperCase() + valData.slice(1))
                            .split('_')
                            .join(' ');
                        // message = value + " " + "and" + " " + value2 + " " + "should be same";
                        message = value2 + ' ' + 'and' + ' ' + value + ' ' + 'do not match';
                        console.log(message, value, value2, 'Validation', val, valData);
                    } else if (i == 'email' && reg.test(form[val]) == false) {
                        isValidForm = false;
                        message = 'Please enter valid email address';
                    } else if (i == 'numeric' && numberRegex.test(form[val]) == false) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        message = value + ' ' + 'should be number only';
                    } else if (i == 'emoji' && emojiRegexp.test(form[val]) == true) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        message = 'emoji is not allowed in ' + value;
                    } else if (i == 'passwordAlphanumeric' && regex_symbols.test(form[val]) !== false) {
                        isValidForm = false;
                        let value = (val.charAt(0).toUpperCase() + val.slice(1))
                            .split('_')
                            .join(' ');
                        message = 'Should contain at least 3 of a-z or A-Z and number and special character.' + value;
                    }
                    if (message) {
                        GlobalHandler.errorMessage(message)
                        break;
                    }
                }
            } else {
                let tempmsg;

                if (customvalidator[val]) {
                    tempmsg = customvalidator[val];
                } else {
                    tempmsg = (val.charAt(0).toUpperCase() + val.slice(1))
                        .split('_')
                        .join(' ');
                }
                GlobalHandler.errorMessage(tempmsg + ' ' + 'is required', 'error')
                isValidForm = false;
                break;
            }
        }
        return isValidForm;
    }
}
