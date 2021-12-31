import React, { useState } from 'react'
import { View, Text, ScrollView, FlatList, TextInput } from 'react-native'
import { colors } from '../../constant'
import {
    Button,
    List, Switch, Card, Headline,
} from 'react-native-paper';
import { ADDRESS, ADDRESSCHECKOUT } from '../../fakeData/address';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';



export default function PlaceOrder({ navigation }) {

    const [cod, setcod] = useState(false)

    function _onPress(params) {
        if (!cod) {
            return alert('Select payment mod')
        } else {
            navigation.navigate('Thanku')
        }
    }



    function _onPresschnage(params) {
        // navigation.navigate('Thanku')
    }



    const NotificationList = ({ item, navigation }) => {
        return (
            <View style={{ flexDirection: 'row', paddingHorizontal: 5, backgroundColor: colors.white, paddingBottom: 10 }}>
                <View style={{ flex: 3.0, paddingLeft: 5, marginTop: 10 }}>
                    <View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <Text style={{ fontWeight: 'bold' }}>{item.name.toUpperCase()}</Text>

                            <View style={{
                                borderWidth: 0.5, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
                                marginRight: 10
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 8 }}>{item.label}</Text>
                            </View>
                        </View>
                        {/* <View style={{ marginVertical: 5 }} /> */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', flex: 2 }}>
                                <Text style={{
                                    fontSize: 15
                                }}>{item.address}</Text>
                                <Text style={{
                                    fontSize: 15
                                }}>{`${item.city} ${item.dist} ${item.state}, ${item.zip_code}`}</Text>
                                <View style={{ height: 4 }} />
                                <Text style={{
                                    fontStyle: 'italic'
                                }}>Mobile Number : {item.mobile}</Text>
                            </View>

                            <View style={{
                                flex: 1, justifyContent: 'center', alignItems: 'flex-end',
                                flexDirection: 'row',
                                // backgroundColor: 'red'
                            }}>
                                {/* <Text>CHNAGE</Text> */}


                                <Button
                                    mode="contained"
                                    // color='red'
                                    onPress={() => _onPresschnage()}>
                                    Change
                                </Button>

                                {/* <FontAwesome color={{}} size={25} name='edit' style={{}}
                                    onPress={() => navigation.navigate('Addnewaddress')}

                                />
                                <View style={{ width: 50 }} />
                                <FontAwesome color={{}} size={25} name='trash' style={{}}

                                    onPress={() => alert('Delete')}
                                /> */}

                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <ScrollView style={{}}>
                <View style={{ backgroundColor: colors.white, paddingHorizontal: 10, }}>
                    <Text style={{ fontSize: 15, paddingTop: 10, color: colors.black }}>SELECT ADDRESS</Text>
                    <FlatList
                        data={ADDRESSCHECKOUT}
                        contentContainerStyle={{ marginTop: 0 }}
                        renderItem={({ item, index }) => <NotificationList item={item} navigation={navigation} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <View style={{ height: 5 }} />

                <View style={{ backgroundColor: colors.white, }}>
                    <Text style={{ padding: 10, color: colors.black }}>PAYMNET METHOD</Text>

                    <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                        <List.Item
                            style={{ paddingVertical: 12 }}
                            title="Cash on delivery (COD)"
                            titleStyle={{ color: colors.black }}
                            onPress={() => { setcod(!cod) }}
                            right={() => <List.Icon color={colors.black} icon={!cod ? 'circle-outline' : "circle-slice-8"} style={{ marginRight: 10 }} />}
                        // right={()=><List.Icon
                        //     na
                        // />}
                        />
                    </Card>

                    {cod && (<Text style={{ padding: 10 }}>Cash on delivery available between 9 AM - 5 PM.</Text>)}

                </View>

                <View style={{ height: 5 }} />
                <View style={{ backgroundColor: colors.white, paddingBottom: 20 }}>
                    <Text style={{ padding: 10, color: colors.black }}>SHOPING NOTE (optional)</Text>
                    <TextInput
                        // mode="outlined"
                        placeholder="Enter your text"
                        placeholderTextColor={colors.black}
                        style={{
                            backgroundColor: colors.white,
                            height: 130,
                            borderWidth: 0.5,
                            paddingHorizontal: 10,
                            marginHorizontal: 15
                        }}
                        multiline
                        // value={this.state.login.mobile_number}
                        // onChangeText={text => this.setValues('mobile_number', text)}
                        returnKeyType="done"
                    // theme={{
                    //     colors: {
                    //         placeholder: colors.greysun,
                    //         text: 'black',
                    //         primary: 'black',
                    //         underlineColor: 'transparent',
                    //         background: colors.greysun,
                    //     },
                    // }}
                    />
                </View>
                {/* 
                <View style={{ backgroundColor: colors.white, }}>
                    <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                        <List.Item
                            style={{ paddingVertical: 12 }}
                            title="Pay via Qr"
                            titleStyle={{ color: colors.black }}
                            onPress={() => { }}
                        />
                    </Card>
                </View> */}

                <View style={{ height: 5 }} />

            </ScrollView>




            <View style={{
                flexDirection: 'row', justifyContent: 'space-between',
                borderRadius: 3,
                marginHorizontal: 1, backgroundColor: 'tomato',
                paddingVertical: 10, paddingHorizontal: 10
            }}>
                <View style={{ justifyContent: 'center' }}>
                    <View style={{ paddingLeft: 0, flexDirection: 'column', alignItems: 'center' }}>
                        {/* <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 13 }}>
                            Pay <Text style={{ fontWeight: 'normal', fontSize: 14, color: colors.white }}>
                            </Text>
                        </Text> */}
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', color: colors.white, marginLeft: 10 }}>{`Pay Rs: 45,120 amount on Delivery`}</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button
                        mode="contained"
                        color='red'
                        onPress={() => _onPress()}>
                        Place Order
                    </Button>
                </View>
            </View>

        </View>
    )
}
