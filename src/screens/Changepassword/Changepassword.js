import React, { Component } from 'react'
import { ImageBackground, View, TouchableOpacity, Keyboard } from 'react-native'
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    List,
    Text,
    Headline,
    TextInput,
    IconButton,
} from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import images from '../../assets/images';
// import { Myicons } from '../../common/styles';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from "react-native-vector-icons/AntDesign"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from '../../constant';
import images from '../../assets/images';
import Validations from '../../utils/validationfunctions';
import { GlobalHandler } from '../../utils/SnackbarHandler';
import AuthService from '../../Services/AuthService/AuthService';
import { GButton } from '../../common';
// import Header from '../../common/Header';
// import colors from '../../assets/colors';
// import Helper from '../../lib/Helper';
// import Validations from '../../lib/Validations';
// import { User } from '../../lib/Api';

export default class ChangePassword extends Component {
    state = {
        fromWhere: this.props?.route.params,
        updatepassword: {
            current_password: '',
            new_password: '',
            confirm_password: '',
            validators: {
                // current_password: { required: true },
                new_password: { required: true, emoji: false, minLength: 6 },
                confirm_password: { required: true, emoji: false, matchWith: 'new_password', minLength: 6 },
            },
        }
    }

    onUpdatePress() {
        const { updatepassword } = this.state
        if (!updatepassword?.current_password) {
            return GlobalHandler.errorMessage('Current Password is require!')
        }
        const isValid = Validations.validateform(this.state.updatepassword);
        if (isValid) {
            const apidata = {
                oldPassword: updatepassword?.current_password,
                newPassword: updatepassword?.new_password
            }
            this.setState({ spinner: true })
            AuthService.chnagepassword(apidata, (response) => {
                this.setState({ spinner: false })
                if (response.status) {
                    this.props.navigation.goBack()
                    GlobalHandler.successMessage(`${response.msg}`);
                }
                else {
                    this.setState({ spinner: false })
                    GlobalHandler.errorMessage(`${response.msg}`);

                }
            })
        }
    }


    onChangePress() {
        const { updatepassword, fromWhere } = this.state
        const isValid = Validations.validateform(updatepassword);
        if (isValid) {
            const apidata = {
                mobile_number: fromWhere?.mobile_number,
                new_password: updatepassword?.new_password
            }
            this.setState({ spinner: true })
            AuthService._resetpassword(apidata, (response) => {
                this.setState({ spinner: false })
                if (response.status) {
                    this.props.navigation.reset({
                        index: 0,
                        routes: [{ name: 'Login' }],
                    });
                    GlobalHandler.successMessage(`${response.msg}`);
                }
                else {
                    this.setState({ spinner: false })
                    GlobalHandler.errorMessage(`${response.msg}`);


                }
            })
        }
    }


    render() {
        console.log(this.state, this.props, 'changepassword')
        const forgotpassword = !this.state.fromWhere?.forgotpassword
        return (
            <View
                style={{ flex: 1, backgroundColor: colors.screencolor }}>

                {/* <Header
                    onPressleft={() => this.props.navigation.goBack(null)}
                    title={'Update Password'}
                /> */}

                <KeyboardAwareScrollView bounces={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                    style={{
                        // height:height
                        marginHorizontal: 25
                    }}
                >
                    <View style={{ flex: 0.2 }} />
                    {forgotpassword && (<View>
                        <TextInput
                            mode="outlined"
                            placeholder="Current Password"
                            placeholderTextColor={colors.greysun}
                            style={{ backgroundColor: colors.screencolor, }}
                            // autoFocus={true}
                            secureTextEntry
                            value={this.state.updatepassword.current_password}
                            onChangeText={text => this.setValues('current_password', text)}
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
                    </View>)}

                    <View style={{ marginTop: 15 }}>
                        <TextInput
                            mode="outlined"
                            placeholder="New Password"
                            placeholderTextColor={colors.greysun}
                            style={{ backgroundColor: colors.screencolor, }}
                            secureTextEntry={!this.state.showpassword1}

                            // autoFocus={true}
                            // style={{height:45}}
                            value={this.state.updatepassword.new_password}
                            onChangeText={text => this.setValues('new_password', text)}
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
                            right={(
                                <TextInput.Icon
                                    //@ts-ignore
                                    name={this.state.showpassword1 ? 'eye-outline' : 'eye-off-outline'}
                                    onPress={() => { Keyboard.dismiss(), this.setState({ showpassword1: !this.state.showpassword1 }) }}
                                />
                            )}
                        />
                    </View>


                    <View style={{ marginTop: 15 }}>
                        <TextInput
                            mode="outlined"
                            placeholder="Confirm New Password"
                            placeholderTextColor={colors.greysun}
                            style={{ backgroundColor: colors.screencolor, }}
                            secureTextEntry={!this.state.showpassword2}
                            value={this.state.updatepassword.confirm_password}
                            onChangeText={text => this.setValues('confirm_password', text)}
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
                            right={(
                                <TextInput.Icon
                                    //@ts-ignore
                                    name={this.state.showpassword2 ? 'eye-outline' : 'eye-off-outline'}
                                    onPress={() => { Keyboard.dismiss(), this.setState({ showpassword2: !this.state.showpassword2 }) }}
                                />
                            )}
                        />
                        <Text style={{ marginTop: 8, color: colors.black }}>Password length should be 8 characters, at least 1 Number, 1 Special Character, 1 Upper case latter and 1 Charater </Text>
                    </View>

                    <View style={{ height: 30 }} />

                    <View style={{ marginTop: 10 }}>
                        {/* <Button
                            contentStyle={{ paddingVertical: 8, backgroundColor: colors.buttoncolor }}
                            mode="contained" onPress={() => {
                                if (!forgotpassword)
                                    return this.onChangePress()
                                else
                                    return this.onUpdatePress()
                            }
                            }>
                            Update
                        </Button> */}


                        <GButton
                            height={50}
                            width={'100%'}
                            borderRadius={5}
                            textcolor={'#fff'}
                            _loading={this.state.spinner}
                            // backgroundColor={colors.buttoncolor}
                            title={`Update Password`}
                            onPress={() => {
                                if (!forgotpassword)
                                    return this.onChangePress()
                                else
                                    return this.onUpdatePress()
                            }}
                        />
                    </View>





                </KeyboardAwareScrollView>

            </View>
            // {/* </View> */}
        )
    }
    setValues(key, value) {
        this.setState(prevState => ({
            updatepassword: {
                ...prevState.updatepassword,
                [key]: value,
            },
        }));
    }
}
