import React, { useState } from 'react'
import { View, Text, FlatList, Image, TextInput } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../constant'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, } from 'react-native-paper';
import { Myphoto, youSave } from '../../common';
import images from '../../assets/images';


export default function Cart({ navigation, route }) {

    const [codeError, setcodeError] = useState(false)

    const { prevData } = route?.params
    console.log(prevData, 'prevData');


    function _onPress() {
        navigation.navigate('PlaceOrder')
    }


    const NotificationList = ({ item, onSubtract, onAdd, itemAdd, modalOn }) => {
        return (
            <View style={{ backgroundColor: colors.white, paddingTop: 10 }}>
                <View style={{ marginTop: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1.0, borderWidth: 0.5, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons color={'green'} size={23}
                            name='record-circle-outline'
                            style={{
                                position: 'absolute',
                                right: 1,
                                top: 2
                            }}
                        />
                        <Image
                            source={{
                                uri: 'https://www.nestle.in/sites/g/files/pydnoa451/files/styles/brand_image/public/1_newmaggipackshot_inner2017_0.jpg?itok=sBN9ehVa'
                            }}
                            style={{ height: 100, width: 100, marginRight: 20 }}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={{ flex: 3.0, paddingLeft: 10 }}>
                        <View>
                            <Text>Indai Gate Super Basmati Rice 1 Kg Indai Gate  Super Basmati Rice 1 Kg</Text>

                            <View style={{ marginVertical: 5 }} />

                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flexDirection: 'column', flex: 1, }}>
                                    <Text style={{
                                        fontSize: 15
                                    }}>Our rate Rs. {item?.our_price}</Text>
                                    <View style={{ marginHorizontal: 5 }} />
                                    <Text style={{
                                        fontSize: 12
                                    }}>Market rate<Text style={{
                                        textDecorationLine: 'line-through',
                                    }}> Rs. {item.mrp_price}</Text></Text>
                                    <Text style={{
                                        color: 'green',
                                        fontStyle: 'italic'
                                    }}>You save : {youSave(item)}</Text>
                                </View>


                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                    {!item?.isadd && (<LinearGradient
                                        onTouchEnd={itemAdd}
                                        colors={['#21D4FD', '#21D4FD']}
                                        style={{
                                            flexDirection: 'row',
                                            flex: 0.5,
                                            borderRadius: 5
                                        }}>
                                        <View style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            // padding: 10,
                                            paddingVertical: 3,
                                        }}>
                                            <Text style={{
                                                color: colors.white
                                            }}>Add</Text>
                                            <MaterialIcons name="add-box" size={30}
                                                onPress={() => { }}
                                                color={colors.white} />
                                        </View>
                                    </LinearGradient>)}

                                    {item?.isadd && (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome5 name="minus-square" size={32}
                                            disabled={!item?.isadd}
                                            // onPress={onSubtract}
                                            onPress={() => { }}
                                            color={'#21D4FD'} />
                                        <Text style={{ padding: 15, textAlign: 'center' }}>{item.quantity}</Text>
                                        <FontAwesome5 name="plus-square" size={32}
                                            // onPress={onAdd} 
                                            onPress={() => { }}
                                            color={'#21D4FD'} />
                                    </View>)}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingTop: 15, flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 0.5, flex: 1 }}>
                        <TouchableOpacity>
                            <Text>Remove</Text>
                        </TouchableOpacity>
                        <Text>Rs. 80</Text>
                    </View>

                </View>
                {/* <Text>dd</Text> */}
            </View>
        )

    }




    return (
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <ScrollView style={{}}>


                <View style={{ backgroundColor: colors.white, padding: 10, }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>You Basket</Text>
                        {/* <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rs: 8540</Text> */}
                    </View>


                    <FlatList
                        data={prevData}
                        contentContainerStyle={{ marginTop: 0 }}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <NotificationList item={item}
                                onSubtract={() => this.onSubtract(item, index)}
                                onAdd={() => this.onAdd(item, index)}
                                itemAdd={() => this.itemAdd(item, index)}
                                modalOn={() => this.modalOn(item, index)}
                            />}
                    />

                </View>




                <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 5, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Apply Coupon</Text>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>VIEW ALL</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between',
                        marginTop: 10, alignItems: 'center', borderBottomWidth: 1,
                        borderColor: colors.gray,
                        marginBottom: 10
                    }}>
                        <Myphoto
                            source={images.offer}
                            size={30}
                            _style={{ marginHorizontal: 10, }}
                        />
                        <View style={{ flex: 1 }}>
                            <TextInput
                                // label="Password"
                                // left={<TextInput.Icon name="eye" />}
                                // right={() => <Text>ddd</Text>}
                                style={{}}

                            />
                        </View>

                        <Button
                            contentStyle={{}}
                            mode='text'
                            onPress={() => setcodeError(!codeError)}>
                            APPLY
                        </Button>
                    </View>
                    {codeError && (<Text style={{ color: colors.red, paddingLeft: 5 }}>Invalid coupon code!</Text>)}
                </View>



                <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 5 }}>
                    <View style={{}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Paymnet Details</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontSize: 16 }}>Market rate</Text>
                        <Text style={{ fontSize: 15, color: colors.red }}>Rs 15000</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontSize: 16 }}>Our rate</Text>
                        <Text style={{ fontSize: 15, color: colors.green }}>Rs 1000</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                        <Text style={{ fontSize: 16 }}>Delivery charge</Text>
                        <Text style={{ fontSize: 15, color: colors.green }}>Free</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 7 }}>
                        <Text style={{ fontSize: 16, color: colors.black }}>Total Amount</Text>
                        <View>
                            <Text style={{ fontSize: 16, color: colors.black, fontWeight: 'bold' }}>Rs 14000</Text>
                        </View>

                        {/* <Text style={{ fontSize: 16 }}>You save</Text>
                        <Text style={{ fontSize: 15, }}>Rs <Text style={{ color: colors.green }}>500</Text></Text> */}
                    </View>
                    <Text style={{ fontSize: 16, color: colors.green, fontWeight: 'bold', textAlign: 'right', marginVertical: 5 }}>You save Rs 500</Text>



                </View>


            </ScrollView>


            <View style={{
                flexDirection: 'row', justifyContent: 'space-between', borderRadius: 3,
                marginHorizontal: 1, backgroundColor: 'tomato', paddingVertical: 8, padding: 10
            }}>
                <View style={{}}>
                    <View style={{ paddingLeft: 10, flexDirection: 'column', }}>
                        <Text style={{ fontWeight: 'bold', color: colors.white, fontSize: 13 }}>Payable Amount <Text style={{ fontWeight: 'normal', fontSize: 14, color: colors.white }}>{`(${prevData.length} itmes)`}</Text></Text>
                        <Text style={{ fontWeight: 'bold', color: colors.white, marginLeft: 10 }}>Rs: 45,120</Text>
                    </View>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Button
                        icon="arrow-right-bold"
                        mode="contained"
                        color='red'
                        onPress={() => _onPress()}>
                        Check Out
                    </Button>
                </View>
            </View>
        </View>
    )
}
