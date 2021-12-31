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

export default class Addnewaddress extends Component {
    state = {
        signup: {
            email: '',
            password: '',
            mobile_number: '',
            full_name: '',
            country_code: '+91',
            mpin: '',
            refer: '',
            device_type: '',//Helper.device_type,
            device_token: '',//Helper.device_token,
            validators: {
                full_name: { required: true, emoji: false },
                email: { required: true, email: true, emoji: false },
                mobile_number: { required: true, emoji: false },
                mpin: { required: true, emoji: false },
            },
        },
    };

    onPressSignup() {
        // const { signup } = this.state;

        // let obj = {
        //     request_url: 'register',
        //     post_data: {
        //         email: signup.email,
        //         password: signup.password,
        //         mpin: signup.mpin,
        //         name: signup.full_name,
        //         mobile: signup.mobile_number,
        //         refer_code: signup.refer,
        //         device_id: Helper.device_id,
        //     },
        // };
        // const isValid = Validations.validateform(signup);
        // if (isValid) {
        //     Helper.showLoader();
        //     User.login(obj).then(res => {
        //         Helper.hideLoader();
        //         if (res.success === 1) {
        //             this.props.navigation.navigate('Varification', {
        //                 prevData: { signup, fromWhere: 'register' },
        //             });

        //             // const resdata = JSON.parse(res.data)
        //             // Helper.apitoken = resdata.token;
        //             // Helper.setData('session_token', resdata.token)
        //             // this.props.navigation.reset({
        //             //     index: 0,
        //             //     routes: [{ name: 'Varification' }],
        //             // })
        //         } else {
        //             Helper.showToast(res.message);
        //         }
        //     });
        // }
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.screencolor }}>
                <KeyboardAwareScrollView bounces={false} style={{}}>

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


                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontSize: 14, color: colors.black }}>
                                Phone number
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Phone number"
                                keyboardType="number-pad"
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




                        <View style={{ marginTop: 30 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 14, color: colors.black }}>
                                        State
                                    </Text>
                                    <TextInput
                                        placeholder="State"
                                        mode="outlined"

                                        placeholderTextColor={colors.greysun}
                                        style={{ backgroundColor: colors.screencolor, flex: 1 }}
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

                                <View style={{ width: 10 }} />


                                <View style={{ width: '45%' }}>
                                    <Text style={{ fontSize: 14, color: colors.black }}>
                                        Distric
                                    </Text>
                                    <TextInput
                                        placeholder="Distric"
                                        mode="outlined"
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










                        <View style={{ marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 14, color: colors.black }}>
                                        City
                                    </Text>
                                    <TextInput
                                        placeholder="City"
                                        mode="outlined"
                                        placeholderTextColor={colors.greysun}
                                        style={{ backgroundColor: colors.screencolor, flex: 1 }}
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

                                <View style={{ width: 10 }} />


                                <View style={{ width: '45%' }}>
                                    <Text style={{ fontSize: 14, color: colors.black }}>
                                        Pin code
                                    </Text>
                                    <TextInput
                                        placeholder="Pin code"
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
                                Address
                            </Text>
                            <TextInput
                                placeholder="Full Address (House no, Ward no, Building,)"
                                mode="outlined"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                value={this.state.signup.password}
                                onChangeText={text => this.setValues('password', text)}
                                secureTextEntry
                                // ref={ref => (this.email = ref)}
                                // onSubmitEditing={() => this.mpin.focus()}
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
                                Near By
                            </Text>
                            <TextInput
                                mode="outlined"
                                placeholder="Landmark (Street, Area)"
                                placeholderTextColor={colors.greysun}
                                style={{ backgroundColor: colors.screencolor }}
                                // style={{height:45}}
                                // maxLength={4}
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
                        </View>



                        <Text style={{ fontSize: 14, color: colors.black, marginVertical: 15, }}>
                            Type of Address
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'
                            }}>


                            <TouchableOpacity style={{ padding: 8, backgroundColor: 'tomato', borderRadius: 10 }}>
                                <Text style={{ color: colors.gray }}>
                                    Home
                                </Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{ padding: 8, backgroundColor: 'tomato', borderRadius: 10 }}>
                                <Text style={{ color: colors.gray }}>
                                    Office
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ padding: 8, backgroundColor: 'tomato', borderRadius: 10 }}>
                                <Text style={{ color: colors.gray }}>
                                    Other
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ marginTop: 40, }}>
                            <GButton
                                height={50}
                                width={'100%'}
                                borderRadius={5}
                                textcolor={'#fff'}
                                backgroundColor={colors.buttoncolor}
                                title="Save Address"
                                onPress={() => {
                                    this.onPressSignup();
                                }}
                            />
                        </View>
                        <View style={{ marginBottom: 20, }} />
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
