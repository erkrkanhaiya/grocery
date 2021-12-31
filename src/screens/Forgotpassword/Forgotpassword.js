import React, { Component } from 'react'
import { View, } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Card, Text, TextInput } from 'react-native-paper';
import { GButton } from '../../common/Button';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import { colors } from '../../constant';
import Validations from '../../utils/validationfunctions';
import AuthService from '../../Services/AuthService/AuthService';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import { firebaseOtp } from '../../helpers/apiesmethod';


export default class Forgotpassword extends Component {
    state = {
        spinner: false,
        forgot: {
            mobile_number: '',
            validators: {
                mobile_number: { required: true, emoji: false, minLength: 10 },
            },
        },

    }


    async onPressForgot() {
        const isValid = Validations.validateform(this.state.forgot);
        if (isValid) {
            this.setState({ spinner: true })
            AuthService.checkUser({ mobile_number: this.state.forgot.mobile_number }, (response) => {
                if (!response.status) {
                    firebaseOtp(this.state.forgot.mobile_number)
                        .then((r) => {
                            this.setState({ spinner: false })
                            if (r) {
                                this.props.navigation.navigate('Otpverify', { confirm: r, forgotpassword: true, prevData: { mobile_number: this.state.forgot.mobile_number, } })
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                } else {
                    GlobalHandler.errorMessage(`${response.msg}`);
                    this.setState({ spinner: false })
                }
            })

        }





        // const { mobile } = this.state.forgot;
        // let obj = {
        //     request_url: 'forgotPassword',
        //     post_data: {
        //         mobile: mobile,
        //     },
        // };
        // const isValid = Validations.validateform(this.state.forgot);
        // if (isValid) {
        //     Helper.showLoader();
        //     User.home(obj).then(res => {
        //         Helper.hideLoader();
        //         if (res.success === 1) {
        //             Helper.showToast(res?.message)
        //             this.props.navigation.goBack()
        //         } else {
        //             Helper.showToast(res.message);
        //         }
        //     });
        // }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.screencolor }}>
                <KeyboardAwareScrollView
                    bounces={true}
                    style={{}}>

                    <View style={{ marginHorizontal: 18 }}>
                        {/* <Image
                            source={images.mobile_screen_new}
                            style={{ height: 150, width: 150 }}
                            resizeMode="contain"
                        /> */}

                        <View style={{ marginTop: 10 }}>
                            <Text style={{ marginTop: 4, fontSize: 14, color: colors.black }}>
                                You Mobile Number
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Enter Mobile Number"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor, }}
                                keyboardType={'numeric'}
                                // autoFocus={true}
                                // style={{height:45}}
                                value={this.state.forgot.mobile_number}
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


                        <View style={{ marginTop: 50, }}>
                            <View style={{}}>

                                <GButton
                                    height={50}
                                    width={'100%'}
                                    borderRadius={5}
                                    textcolor={'#fff'}
                                    backgroundColor={colors.buttoncolor}
                                    title="Forgot Password"
                                    _loading={this.state.spinner}
                                    onPress={() => {
                                        this.onPressForgot();
                                    }}
                                />



                            </View>

                        </View>







                    </View>




                </KeyboardAwareScrollView>

            </View>
        )
    }
    setValues(key, value) {
        this.setState((prevState) => ({
            forgot: {
                ...prevState.forgot,
                [key]: value,
            },
        }));
    }

}

const styles = {
    container: {
        height: 45,
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'red'
    },
    button: {
        height: 50,
        width: 280,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green
    },
}










