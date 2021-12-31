import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, ToastAndroid } from 'react-native';
import { Styles } from './Styles';
import ErrorBoundary from './ErrorBoundry';
import CustomText from './CustomText';
import CustomTextInput from './CustomTextInput';
import FullButtonComponent from './FullButtonComponent';
import { isAndroid } from '../../utils/stylesmethod';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import { StackActions } from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';


const OTPScreen = function (props) {

    const OtpVerify = async () => {
        try {
            const code = otpArray.join("");
            let data = await confirm.confirm(code);
            GlobalHandler.successMessage('Verify Success')
            navigation.dispatch(StackActions.replace('DrawerStack'));
        } catch (error) {
            GlobalHandler.errorMessage('Invalid Otp!')
        }
    }

    // useEffect(() => {
    //     signInWithPhoneNumber();
    // }, [])

    // async function signInWithPhoneNumber() {
    //     try {
    //         const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    //         setConfirm(confirmation);
    //         console.log(confirm, 'confirm')
    //     } catch (e) {
    //         alert(JSON.stringify(e));
    //     }
    // }



    return (
        // <ErrorBoundary screenName={'OTPScreen'}>
        <View style={{ padding: 20, paddingTop: 10, right: 1 }}>
            <OTPTextView
                // ref={(e) => (this.input1 = e)}
                // style={{width: '100%', paddingTop: 28}}
                inputCount={6}
                autofocus={false}
                defaultValue={props?.otp}
                tintColor={'#3B83FC'}
                // code={otp}
                handleTextChange={(val) => props?.setOtp(val)}
                containerStyle={
                    {
                        // borderColor: '#3B83FC',
                        // borderWidth: 2,
                        // backgroundColor: '#3B83FC',
                        // borderRadius: 10,
                        // color: '#3B83FC',
                    }
                }
                textInputStyle={{
                    // borderColor: '#3B83FC',
                    borderColor: '#3B83FC',
                    borderWidth: 1,
                    // backgroundColor: '#3B83FC',
                    borderRadius: 10,
                    color: '#3B83FC',
                }}
            />
        </View>
        // </ErrorBoundary>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
        paddingTop: 130,
    },
    submitButtonText: {
        color: "white",
    },
    otpText: {
        // color: '#000',
        // fontSize: 18,
        // width: '100%',
    },
});

export default OTPScreen;