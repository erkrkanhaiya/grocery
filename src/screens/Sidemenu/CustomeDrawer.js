import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Images } from 'src/assest/images';
// import styles from 'src/navigation/sidemenu.style';
import Entypo from 'react-native-vector-icons/Entypo';
import { StackActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import { colors } from '../../constant';
import Helper from '../../lib/Helper';


export default function CustomeDrawer({ navigation }) {
    const user = Helper.userInfo
    function onLogoutPress() {
        Helper.setData('userData', null).then((res) => {
            navigation.dispatch(StackActions.replace('Login'));
        })
    }


    console.log(user)

    return (
        <View style={{ flex: 1 }}>
            <View style={{ borderBottomWidth: 1, borderColor: '#ddd', marginBottom: 10 }}>
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', margin: 1, paddingVertical: 15, justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Myaccount',user)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <EvilIcons color={{}} size={55} name='user' style={{ marginRight: 3, marginLeft: 8 }} />
                        <View>
                            <Text style={{ fontWeight: 'bold' }}>{user?.name}</Text>
                            <Text style={{ fontSize: 12 }}>{user?.email}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginRight: 20 }}>
                        <EvilIcons color={{}} size={30} name='close' style={{ marginRight: 3, marginLeft: 8 }}
                            onPress={() => navigation.toggleDrawer()} />
                    </View>
                </View>
            </View>


            {/* <View style={{ backgroundColor: "#ddd", height: 2, flex: 1 }} /> */}


            <View style={{ marginHorizontal: 20 }}>
                <View style={[styles.listItme, { marginLeft: 3 }]}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Myorder')
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <FontAwesome5 color={{}} size={20} name='clipboard-list' style={{ marginRight: 3, marginLeft: 8 }} />
                        <Text style={styles.textstyle}>My Order</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Addresslist')
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Ionicons color={{}} size={20} name='location' style={{ marginRight: 3, marginLeft: 8 }} />

                        <Text style={styles.textstyle}>Delivery Address</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Contactus')
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons color={{}} size={20} name='contacts' style={{ marginRight: 3, marginLeft: 8 }} />

                        <Text style={styles.textstyle}>Contact Us</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('FaQ')
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Ionicons color={{}} size={20} name='md-share-social-sharp' style={{ marginRight: 3, marginLeft: 8 }} />

                        <Text style={styles.textstyle}>Share</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PrivacyPolicy')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons color={{}} size={20} name='feedback' style={{ marginRight: 3, marginLeft: 8 }} />

                        <Text style={styles.textstyle}>Feedback</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('PrivacyPolicy')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome color={{}} size={20} name='question-circle' style={{ marginRight: 3, marginLeft: 8 }} />

                        <Text style={styles.textstyle}>F & Q</Text>
                    </TouchableOpacity>
                </View> */}



                <View style={[styles.listItme, { marginTop: 10 }]}>
                    <TouchableOpacity onPress={() => {
                        onLogoutPress()
                    }}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <MaterialIcons color={{}} size={23} name='directions-run' style={{ marginRight: 2, marginLeft: 8 }} />

                        {/* <Image
                            source={Images.notes}
                            style={styles.user}
                            resizeMode="contain"
                        /> */}
                        <Text style={styles.textstyle}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginVertical: 30, borderTopWidth: 1, borderColor: '#ddd', }} />

                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Slectlangugae')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons color={{}} size={20} name='ios-help-circle' style={{ marginRight: 3, marginLeft: 8 }} />
                        <Text style={styles.textstyle}>Help center</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Slectlangugae')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialIcons color={{}} size={20} name='privacy-tip' style={{ marginRight: 3, marginLeft: 8 }} />
                        <Text style={styles.textstyle}>Privacy & Policy</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Slectlangugae')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome color={{}} size={20} name='legal' style={{ marginRight: 3, marginLeft: 8 }} />
                        <Text style={styles.textstyle}>Legal</Text>
                    </TouchableOpacity>
                </View>




                {/* <View style={styles.listItme}>
                    <TouchableOpacity onPress={() => {
                        navigation.dispatch(StackActions.replace('AuthNavigator'));
                        // navigation.navigate('ChangePassword')
                    }}

                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={Images.logout}
                            style={styles.user}
                            resizeMode="contain"
                        />
                        <Text style={styles.textstyle}>logout</Text>
                    </TouchableOpacity>
                </View> */}
            </View>
            <View style={{ position: 'absolute', bottom: 0, alignItems: 'center', right: 0, left: 0, borderTopWidth: 0.5, paddingVertical: 10 }}>
                <Text>Made with love</Text>
                <Text>App version : 1.11.00.1</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listItme: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18
        // justifyContent: 'space-between'
    },
    container: {
        marginHorizontal: 15,
        // backgroundColor: 'yellow'  
    },
    user: {
        borderColor: colors.gray,
        height: 40,
        marginHorizontal: 10,
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        backgroundColor: 'red'
    },
    textstyle: {
        fontSize: 15,
        marginLeft: 10
        // fontFamily: fonts.regular
    },
    greyBox: {
        backgroundColor: colors.grey,
        height: 200, width: undefined,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 18,
        marginBottom: 30
    },
    logoImg: {
        height: 60,
        width: 60,
        marginBottom: 10
        // marginTop: height * 0.06,
    },
    username: {
        // fontFamily: fonts.bold,
    }
});
