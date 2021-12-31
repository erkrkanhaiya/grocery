import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { colors } from '../../constant'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Button, } from 'react-native-paper';
import { Myphoto, youSave } from '../../common';
import images from '../../assets/images';


export default function Orderdetails() {


    const NotificationList = ({ item, onSubtract, onAdd, itemAdd, modalOn }) => {
        return (
            <View style={{ backgroundColor: colors.white, paddingTop: 10 }}>
                <View style={{ marginTop: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 1.0, borderWidth: 0.5, padding: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
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
                                    }}>Quantity:- 1</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )

    }



    return (
        <ScrollView>


            <View style={{ backgroundColor: colors.white, paddingHorizontal: 15, paddingVertical: 10 }}>
                <View style={{ marginVertical: 5 }} />

                <Text style={{ right: 5, marginVertical: 5, color: colors.black }}>Price Details (3) Items</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Text style={{}}>Cart Total</Text>
                    <Text>Rs. 15420</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Text style={{}}>Cart Discount</Text>
                    <Text>Rs. 120</Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Text style={{}}>Sub Total</Text>
                    <Text>Rs. 120</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                    <Text style={{}}>Delivery Charge</Text>
                    <Text>Rs. 1200</Text>
                </View>
            </View>

            <View style={{ backgroundColor: colors.white, paddingHorizontal: 15, marginTop: 2, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 5, color: colors.black }}>Total</Text>
                    <Text>Rs. 1800</Text>
                </View>
                <Text>You save Rs. 40</Text>
            </View>





            <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 5, }}>
                <Text style={{ color: colors.black }}>Shipping Address</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, }}>
                    <SimpleLineIcons name="location-pin"
                        size={18}
                        onPress={() => { }}
                        color={'#21D4FD'} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ marginBottom: 2 }}>Kanhaiya Kumar</Text>
                        <Text>4734 Pride Avenu , NY, 10458, Bronx, Sugate factory road , banmankhi Purnia</Text>
                    </View>

                </View>

                <View style={{ marginVertical: 3 }} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <SimpleLineIcons
                        name="phone"
                        size={18}
                        onPress={() => { }}
                        color={'#21D4FD'} />
                    <Text style={{ marginLeft: 10 }}>+91 9529 74 1079</Text>
                </View>

                <View style={{ marginVertical: 8 }} />

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    marginHorizontal: 3, backgroundColor: '#ddd', borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 4
                }}>
                    <Text style={{ color: colors.black }} >Payment Method</Text>
                    <Text style={{ color: colors.black }}>COD</Text>
                </View>
            </View>



            <View style={{ backgroundColor: colors.white, paddingHorizontal: 15, }}>
                <FlatList
                    data={['', '', '']}
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


        </ScrollView>
    )
}
