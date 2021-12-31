import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import {
    Button,
    List, Switch, Card, Headline,
} from 'react-native-paper';
import images from '../../assets/images';
import { Myphoto } from '../../common';
import { colors } from '../../constant';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { MYORDER } from '../../fakeData/myorder';



export default function Myorder({ navigation }) {

    const NotificationList = ({ item, onSubtract, onAdd, itemAdd, modalOn }) => {
        return (
            <>
                <View style={{ backgroundColor: colors.white, padding: 10, }}>
                    <Text style={{ color: colors.black }}>ODER ID:- 478421450231</Text>


                    <View style={{ paddingHorizontal: 6 }}>
                        <View style={{ marginTop: 8 }} />

                        <View style={{ backgroundColor: colors.white, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>Order Placed</Text>
                            <Text>March 15, 2021 1.56PM</Text>
                        </View>
                        <View style={{ marginTop: 4 }} />
                        <View style={{ backgroundColor: colors.white, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{}}>Status</Text>
                            <Text>READY FOR DISPATCH</Text>
                        </View>

                        <View style={{ marginTop: 8 }} />


                        <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Orderdetails')
                                }}
                                activeOpacity={0.7}
                                style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                <Myphoto
                                    source={{
                                        uri: 'https://www.nestle.in/sites/g/files/pydnoa451/files/styles/brand_image/public/1_newmaggipackshot_inner2017_0.jpg?itok=sBN9ehVa'
                                    }}
                                    size={50}
                                    _style={{ marginRight: 10, }}
                                />
                                <View style={{ flex: 1 }}>
                                    <Text>Indai Gate Super Basmati Rice 1 Kg Indai Gate  Super Basmati Rice 1 Kg</Text>
                                </View>
                            </TouchableOpacity>


                            {/* <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Orderdetails')
                                }}
                                style={{
                                    borderWidth: 1, borderColor: '#ddd',
                                    borderRadius: 15, width: 75,
                                    alignItems: 'center', justifyContent: 'center',
                                    paddingVertical: 5
                                }}>
                                <Text>DETAILS</Text>
                            </TouchableOpacity> */}
                        </View>


                        <View style={{ marginTop: 11 }} />

                        {/* <Text style={{ marginTop: 10 }}>Total Pay: 854,1335</Text>
                    <Text style={{ marginTop: 5 }}>You save:45,00</Text> */}

                        <View style={{ backgroundColor: colors.white, marginTop: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>You save Rs: 45,00</Text>
                            <Text>Total Pay Rs: 854,1335</Text>
                        </View>

                    </View>

                </View>




                {/* <View style={{ backgroundColor: colors.white, padding: 10, marginTop: 1, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SimpleLineIcons name="location-pin"
                            size={22}
                            onPress={() => { }}
                            color={'#21D4FD'} />
                        <Text style={{ marginLeft: 10 }}>4734 Pride Avenu , NY, 10458, Bronx, Sugate factory road , banmankhi Purnia</Text>
                    </View>

                    <View style={{ marginVertical: 5 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <SimpleLineIcons
                            name="phone"
                            size={22}
                            onPress={() => { }}
                            color={'#21D4FD'} />
                        <Text style={{ marginLeft: 10 }}>+91 9529 74 1079</Text>
                    </View>
                </View> */}







                <View style={{ backgroundColor: colors.white, flexDirection: 'row-reverse', justifyContent: 'space-between', paddingBottom: 10 }}>
                    <Button
                        contentStyle={{}}
                        mode='text'
                        onPress={() => { }}
                    >
                        Cancel
                    </Button>

                    <Button
                        contentStyle={{}}
                        mode='text'
                        onPress={() => { }}
                    >
                        Track
                    </Button>
                </View>
            </>
        )
    }



    return (
        <View>


            <FlatList
                data={MYORDER}
                contentContainerStyle={{ marginTop: 0 }}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ marginTop: 8 }} />}
                renderItem={({ item, index }) =>
                    <NotificationList item={item}
                        onSubtract={() => this.onSubtract(item, index)}
                        onAdd={() => this.onAdd(item, index)}
                        itemAdd={() => this.itemAdd(item, index)}
                        modalOn={() => this.modalOn(item, index)}
                    />}
            />





        </View>
    )
}
