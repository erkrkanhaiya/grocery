import React, { Component } from 'react';
import {
    ImageBackground,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, Text, TextInput, Checkbox } from 'react-native-paper';
// import images from '../../assets/images';
// import { Myicons } from '../../common/styles';
// import { HeaderLogo } from '../../common/Header';
// import Helper from '../../lib/Helper';
import { GButton } from '../../common/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { User } from '../../lib/Api';
// import Validations from '../../lib/Validations';
import { colors } from '../../constant';
import Validations from '../../utils/validationfunctions';
import auth from '@react-native-firebase/auth';
import AuthService from '../../Services/AuthService/AuthService';
import Axios, { AxiosRequestConfig } from 'axios';
import Helper from '../../lib/Helper_old';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import { firebaseOtp } from '../../helpers/apiesmethod';


export default class Signup extends Component {
    state = {
        spinner: false,
        signup: {
            email: '',
            mobile_number: '',
            full_name: '',
            country_code: '+91',
            password: '',
            // confirm_password: '',
            refer: '',
            device_type: '',//Helper.device_type,
            device_token: '',//Helper.device_token,
            validators: {
                full_name: { required: true, emoji: false },
                mobile_number: { required: true, emoji: false },
                email: { required: true, email: true, emoji: false },
                password: { required: true, emoji: false, minLength: 6 },
                // confirm_password: { required: true, emoji: false, matchWith: 'password' },
            },
        },
    };

    onPressSignup() {
        const isValid = Validations.validateform(this.state.signup);
        if (isValid) {
            const apidata = {
                mobile_number: this.state.signup.mobile_number
            }
            this.setState({ spinner: true })
            AuthService.checkUser(apidata, (response) => {
                if (response.status) {
                    firebaseOtp(this.state.signup.mobile_number)
                        .then((res) => {
                            console.log(res, 'signup firebase response')
                            this.setState({ spinner: false })
                            if (res) {
                                this.props.navigation.navigate("Otpverify", { confirm: res, prevData: this.state.signup })
                            }
                        })
                        .catch((err) => console.log(err))
                } else {
                    GlobalHandler.errorMessage(`${response.msg}`);
                    this.setState({ spinner: false })
                }

            })
        }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.screencolor }}>
                <KeyboardAwareScrollView bounces={false} style={{}}>
                    <Text
                        style={{
                            marginVertical: 15,
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: colors.black,
                            marginLeft: 25
                        }}>
                        New Registration
                    </Text>
                    <View style={{ paddingHorizontal: 10, marginHorizontal: 13 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Name
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Full name"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                // style={{ height: 45 }}
                                value={this.state.signup.full_name}
                                onChangeText={text => this.setValues('full_name', text)}
                                onSubmitEditing={() => this.mobile_number.focus()}
                                returnKeyType="next"
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

                        {/* <Text>Enter mobile numebr without country code</Text> */}

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Mobile
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            borderWidth: 1,
                                            marginRight: 10,
                                            borderColor: colors.greysun,
                                            alignItems: 'center',
                                            height: 55,
                                            borderRadius: 5,
                                            paddingHorizontal: 5,
                                        }}>
                                        <Text style={{ color: colors.greysun, fontSize: 16 }}>
                                            {this.state.signup.country_code}
                                        </Text>
                                        <AntDesign
                                            name="caretdown"
                                            size={15}
                                            color={colors.greysun}
                                            style={{ marginLeft: 13, marginRight: 5 }}
                                        />
                                    </View>
                                </View>

                                <View style={{ width: '75%' }}>
                                    <TextInput
                                        placeholder="Mobile"
                                        mode="outlined"
                                        keyboardType="number-pad"
                                        placeholderTextColor={colors.greysun}
                                        style={{ backgroundColor: colors.screencolor }}
                                        value={this.state.signup.mobile_number}
                                        onChangeText={text => this.setValues('mobile_number', text)}
                                        ref={ref => (this.mobile_number = ref)}
                                        onSubmitEditing={() => this.email.focus()}
                                        returnKeyType="next"
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
                            </View>
                        </View>

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Email
                            </Text>
                            <TextInput
                                placeholder="Email"
                                mode="outlined"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                value={this.state.signup.email}
                                onChangeText={text => this.setValues('email', text)}
                                ref={ref => (this.email = ref)}
                                onSubmitEditing={() => this.mpin.focus()}
                                returnKeyType="next"

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
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Password
                            </Text>
                            <TextInput
                                placeholder="Password"
                                mode="outlined"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                value={this.state.signup.password}
                                onChangeText={text => this.setValues('password', text)}
                                secureTextEntry={!this.state.visiblepassword}
                                // ref={ref => (this.email = ref)}
                                // onSubmitEditing={() => this.mpin.focus()}
                                returnKeyType="next"
                                right={<TextInput.Icon name={this.state.visiblepassword ? 'eye-outline' : 'eye-off-outline'}
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

                        {/* <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Mpin
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Mpin"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                // style={{height:45}}
                                maxLength={4}
                                keyboardType="number-pad"
                                value={this.state.signup.mpin}
                                onChangeText={text => this.setValues('mpin', text)}
                                ref={ref => (this.mpin = ref)}
                                onSubmitEditing={() => this.refer.focus()}
                                returnKeyType="next"
                                secureTextEntry
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
                        </View> */}

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Refer Code
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Refer Code (Optional)"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                // style={{height:45}}
                                value={this.state.signup.refer}
                                onChangeText={text => this.setValues('refer', text)}
                                ref={ref => (this.refer = ref)}
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

                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 15,
                                alignItems: 'center',
                            }}>
                            {/* <Checkbox
                                status={true ? 'checked' : 'unchecked'}
                                color={colors.blue}
                                onPress={() => {
                                    // setChecked(!checked);
                                }}
                            /> */}
                            <View>
                                <Text style={{ color: colors.black }}>
                                    I have read and understood the
                                </Text>
                                <Text style={{ color: colors.black }}>
                                    Terms and Privacy Policy
                                </Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 30, }}>
                            <GButton
                                height={50}
                                width={'100%'}
                                borderRadius={5}
                                textcolor={'#fff'}
                                _loading={this.state.spinner}
                                backgroundColor={colors.buttoncolor}
                                title="Register"
                                onPress={() => {
                                    this.onPressSignup();
                                }}
                            />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ marginVertical: 15, color: colors.lightgrysun }}>
                                    OR
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: colors.lightgrysun }}>
                                        Have an account?{'  '}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('Login')}>
                                        <Text
                                            style={{
                                                color: colors.black,
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                            }}> Login</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ height: 30 }} />
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        );
    }
    setValues(key, value) {
        this.setState(prevState => ({
            signup: {
                ...prevState.signup,
                [key]: value,
            },
        }));
    }
}
