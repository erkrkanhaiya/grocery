import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { GButton, } from '../../common';
import ResendOTP from '../../common/ResendOTP';
import OTPScreen from '../../Components/OtpScreens/OtpScreen';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import AuthService from '../../Services/AuthService/AuthService';
import { firebaseOtp } from '../../helpers/apiesmethod';


export default function Otpverify({ navigation, route }) {
    const [Otp, setOtp] = useState('');
    const [confirm, setconfirm] = useState(route?.params?.confirm);
    const [spinner, setspinner] = useState(false);
    const [resend, setresend] = useState(false);
    const { full_name, mobile_number, email, password, country_code, } = route?.params?.prevData

    console.log(route?.params, ' route?.params')


    async function reSendOtp() {
        setresend(true)
        firebaseOtp(mobile_number)
            .then((res) => {
                setresend(false)
                if (res) {
                    setconfirm(res)
                    GlobalHandler.successMessage('Otp sent')
                }
            })
    }



    function nextScreen() {
        if (route?.params?.forgotpassword) {
            navigation.navigate('ChangePassword', { forgotpassword: true , mobile_number })
        } else if (route?.params?.updatemobile) {
            navigation.goBack()
        } else {
            const apidata = { name: full_name, email, password, country_code, mobile_number, otp: Otp, }
            AuthService.register(apidata, (response) => {
                setspinner(false)
                // console.log(response, 'apieeeee')
                // Helper.setData('userData', response?.data)
                // Helper.userInfo = response?.data
                GlobalHandler.successMessage('Sign Up Success, Please Login')
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            })
        }


    }


    async function OtpVerify() {
        try {
            setspinner(true)
            let data = await confirm.confirm(Otp);
            console.log(data, 'firebaseResponse')
            nextScreen()
        } catch (error) {
            console.log(error)
            GlobalHandler.errorMessage(`Invalid Otp!`)
        }
        setspinner(false)
    }


    return (
        <View style={{ flex: 1 }}>
            <Text>{mobile_number}</Text>
            <OTPScreen otp={Otp} setOtp={setOtp} />
            <View style={{ padding: 20, paddingTop: 0 }}>
                <View style={{ marginBottom: 20, }}>
                    <ResendOTP
                        resend={() => reSendOtp()}
                        isLoading={resend}
                    />
                </View>
                <GButton
                    height={50}
                    width={'100%'}
                    borderRadius={5}
                    textcolor={'#fff'}
                    _loading={spinner}
                    // backgroundColor={spinner ? 'grey' : colors.red}
                    title={`Confirm`}
                    onPress={() => {
                        OtpVerify();
                    }}
                />
            </View>
        </View>
    )
}
