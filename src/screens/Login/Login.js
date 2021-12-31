import React, { Component } from 'react';
import {
    ImageBackground,
    TouchableOpacity,
    View,
    Image,
    SafeAreaView,
    TouchableHighlight,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Text, TextInput, Checkbox } from 'react-native-paper';
import { GButton } from '../../common/Button';
// import { User } from '../../lib/Api';
// import Validations from '../../lib/Validations';
// import DeviceInfo from 'react-native-device-info';
import images from '../../assets/images';
import { colors } from '../../constant';
import auth from '@react-native-firebase/auth';
import { validatePhoneNumber } from '../../utils/validations';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import AuthService from '../../Services/AuthService/AuthService';
import Validations from '../../utils/validationfunctions';
import Helper from '../../lib/Helper';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            visiblepassword: true,
            login: {
                mobile_number: '',
                password: '',
                device_type: '',//Helper.device_type,
                device_token: '',//Helper.device_token,
                validators: {
                    mobile_number: { required: true, emoji: false },
                    password: { required: true, emoji: false },
                },
            },
        }
    }



    // const[number, setNumber] = useState('')
    // const[confirm, setConfirm] = useState(null);


    // mobile_number


    async onPressSignIn() {
        const isValid = Validations.validateform(this.state.login);
        if (isValid) {
            const apidata = {
                mobile_number: this.state.login.mobile_number,
                password: this.state.login.password
            }
            this.setState({ spinner: true })
            AuthService.login(apidata, (response) => {
                console.log(response, 'response')
                if (response.status) {
                    const storeData = { ...response?.data, access_token: response.access_token }
                    Helper.setData('userData', storeData)
                    Helper.userInfo = storeData
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'DrawerStack' }],
                    });
                }
                else {
                    GlobalHandler.errorMessage(`${response.msg}`);
                    this.setState({ spinner: false })
                }
            })
        }

        // Helper.showSnack('check msg')
        // GlobalHandler.errorMessage('develpment')

        // this.props.navigation.dispatch(StackActions.replace('DrawerStack'));

        // // DrawerStack
        // this.props.navigation.navigate("Otpverify", {
        //     // screen: "Home",
        //     // screen: "Otpverify",
        //     // 
        //     // params: { user: "Alex" },
        // });


        // const phonenumber = '+91' + this.state.login.mobile_number
        // auth().signInWithPhoneNumber(phonenumber).then((res) => {
        //     if (res) {
        //         return this.setState({ confirmation })
        //     }

        // }).catch((err) => Sna)

        // if (confirmation) {
        //     setConfirm(confirmation);
        //     props.navigation.navigate('OTP', { 'confirm': confirmation })
        // }
    }

    onForgotPress() {
        this.props.navigation.navigate("Forgotpassword");
    }

    onRegisterPress() {
        this.props.navigation.navigate("Signup");
    }


    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: colors.white }}>
                <KeyboardAwareScrollView
                    bounces={false}
                    style={{}}
                    contentContainerStyle={{ justifyContent: 'center' }}>
                    {/* <Text
                        style={{
                            marginTop: 15,
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: colors.black,
                            marginLeft: 25
                        }}>
                        Login
                    </Text> */}

                    <View style={{ paddingHorizontal: 10, marginHorizontal: 13 }}>
                        {/* <Card style={{ paddingHorizontal: 10, marginHorizontal: 13, top: -25 }}> */}
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ marginTop: 4, fontSize: 14, color: colors.black }}>
                                Mobile Number
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Enter Mobile Number"
                                placeholderTextColor={colors.black}
                                style={{ backgroundColor: colors.white, }}
                                keyboardType={'numeric'}
                                // autoFocus={true}
                                // style={{height:45}}
                                value={`${this.state.login.mobile_number}`}
                                onChangeText={text => this.setValues('mobile_number', text)}
                                returnKeyType="done"
                                theme={{
                                    colors: {
                                        placeholder: colors.greysun,
                                        text: 'black',
                                        primary: 'black',
                                        underlineColor: 'transparent',
                                        background: colors.greysun,
                                    },
                                }}
                            />
                        </View>


                        <View style={{ marginTop: 10 }}>
                            <Text style={{ marginTop: 4, fontSize: 14, color: colors.black }}>
                                Password
                            </Text>
                            <TextInput
                                placeholder="Password"
                                mode="outlined"
                                placeholderTextColor={colors.black}
                                style={{ backgroundColor: colors.white }}
                                value={this.state.login.password}
                                onChangeText={text => this.setValues('password', text)}
                                secureTextEntry={this.state.visiblepassword}
                                // ref={ref => (this.email = ref)}
                                // onSubmitEditing={() => this.mpin.focus()}
                                returnKeyType="next"
                                right={<TextInput.Icon name={!this.state.visiblepassword ? 'eye-outline' : 'eye-off-outline'}
                                    onPress={() => this.setState({ visiblepassword: !this.state.visiblepassword })}
                                />}
                                theme={{
                                    colors: {
                                        placeholder: colors.greysun,
                                        text: 'black',
                                        primary: 'black',
                                        underlineColor: 'transparent',
                                        background: colors.greysun,
                                    },
                                }}
                            />
                        </View>

                        {/* <View style={{ marginTop: 20 }}>
                            <TextInput
                                mode='outlined'
                                placeholder='Mobile'
                                placeholderTextColor='#000'
                                style={{ backgroundColor: colors.screencolor }}
                                // style={{height:45}}
                                // value={this.state.login.email}
                                // onChangeText={text => this.setValues('email', text)}
                                ref={(ref) => (this.email = ref)}
                                onSubmitEditing={() => this.mobile_number.focus()}
                                returnKeyType='next'
                            />
                        </View> */}
                        <View style={{ marginVertical: 20, alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => this.onForgotPress()}
                                style={{ width: '40%', alignItems: 'flex-end', paddingVertical: 5 }}>
                                <Text style={{ fontSize: 14, color: colors.black, marginRight: 5 }}>
                                    Forgot Password
                                </Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ marginTop: 0, }}>
                            <GButton
                                height={50}
                                width={'100%'}
                                borderRadius={5}
                                textcolor={'#fff'}
                                _loading={this.state.spinner}
                                // backgroundColor={colors.buttoncolor}
                                title={`Login`}
                                onPress={() => {
                                    this.onPressSignIn();
                                }}
                            />
                            {/* <GButton
                height={50}
                width={'100%'}
                borderRadius={5}
                textcolor={'#fff'}
                backgroundColor={this.state.time_remaining ? colors.buttoncolor : colors.green}
                title={` ${this.state.time_remaining ? this.state.time_remaining : 'Get Otp'} `}
                onPress={() => {
                  this.setState({ time_remaining: 3 })
                  // this.onPressSignIn();
                }}
              /> */}
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 20,
                            justifyContent: 'space-between',
                            marginHorizontal: 20
                        }}>
                        <View style={{ flexDirection: 'row' }}>

                            <View>
                                <Text style={{ color: colors.black }}>
                                    I have read and understood the
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    Terms and Privacy Policy
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: colors.buttoncolor, paddingHorizontal: 18, borderRadius: 5 }}>
                            <TouchableOpacity
                                onPress={() => this.onRegisterPress()}>
                                <Text
                                    style={{
                                        color: colors.black,
                                        fontSize: 16,
                                    }}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* <View style={{ marginTop: 20, alignItems: 'flex-end' }}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Forgotpassword')} underlayColor={'#ddd'}>
                                <Text style={{ color: colors.appthemcolor }}>Reset password</Text>
                            </TouchableHighlight>
                        </View> */}

                    {/* <View style={{ marginTop: 35, alignItems: 'center', marginBottom: 20, flex: 1 }}>
                            <GButton
                                height={50}
                                width={300}
                                borderRadius={5}
                                textcolor={'#fff'}
                                backgroundColor={colors.appthemcolor}
                                title='Login'
                                onPress={() => {
                                    // this.onPressLogin()

                                }}
                            />
                            <Text style={{ marginVertical: 15 }}>Or</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text>Not have an account? </Text>
                                <TouchableOpacity onPress={() =>
                                    this.props.navigation.navigate('Createaccount')}><Text style={{ color: colors.appthemcolor, fontWeight: 'bold', fontSize: 16 }}>Sign Up</Text></TouchableOpacity>
                            </View>
                        </View> */}

                    <View style={{ height: 25 }} />


                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpassword')}>
                            <Text style={{ fontSize: 18, color: colors.white }}>
                                -Forgot Password-
                            </Text>
                        </TouchableOpacity>
                    </View>



                    <Text style={{ textAlign: 'center' }}>Bv:12.29.01</Text>
                </KeyboardAwareScrollView>
            </View>
        );
    }
    setValues(key, value) {
        this.setState(prevState => ({
            login: {
                ...prevState.login,
                [key]: value,
            },
        }));
    }
}
