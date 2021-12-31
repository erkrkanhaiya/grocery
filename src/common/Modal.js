import React, { Component, useState } from 'react';
import {
    Text,
    View,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Modal,
    Alert,
    Dimensions,
    ScrollView
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../constant';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


import LinearGradient from 'react-native-linear-gradient';



const dWith = Dimensions.get('screen').width

export const ModalView = (porps) => {
    console.log('porpsporpsporps', porps);

    const { item, onSubtract, onAdd, itemAdd, onClose } = porps

    const [state, setstate] = useState(0)





    const priceArr = [
        {
            _id: 1,
            mrp_price: '50',
            our_price: '30',
            quanti: '300 gm'
        },
        {
            _id: 2,
            mrp_price: '150',
            our_price: '40',
            quanti: '400 gm'
        },
        {
            _id: 3,
            mrp_price: '200',
            our_price: '20',
            quanti: '600 gm'
        },
        {
            _id: 4,
            mrp_price: '250',
            our_price: '10',
            quanti: '1000 gm'
        },
    ]


    const pricedetails = (val) => {
        return priceArr[state]
    }

    console.log(pricedetails(), state, "?????????????")



    return (
        <>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={porps?.modalVisible}
                    onRequestClose={() => {
                        // Alert.alert("Modal has been closed.");
                        // porps.modalOff2()
                    }}
                >


                    <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center' }} >

                        <View style={{
                            flex: 1,
                        }}
                        />


                        <View style={{
                            flex: 6,
                            backgroundColor: colors.white,
                            borderTopRightRadius: 18,
                            borderTopLeftRadius: 18,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignSelf: 'flex-end',
                                paddingHorizontal: 18,
                                paddingVertical: 15
                            }}>
                                <Entypo name="cross" size={40} color={colors.black} onPress={porps.onClose} />
                            </View>


                            <View style={{ paddingHorizontal: 8 }}>

                                <FlatList
                                    data={item?.image_Data}
                                    contentContainerStyle={{ marginTop: 0 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    pagingEnabled
                                    renderItem={({ item, index }) => (
                                        <View style={{ width: dWith, height: 200 }}>
                                            <Image
                                                source={{
                                                    uri: 'https://www.nestle.in/sites/g/files/pydnoa451/files/styles/brand_image/public/1_newmaggipackshot_inner2017_0.jpg?itok=sBN9ehVa'
                                                }}
                                                style={{ height: '100%', width: '100%', marginRight: 20 }}
                                                resizeMode="contain"
                                            />
                                        </View>


                                    )}

                                />
                                <View style={{ marginTop: 20 }} />
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item?.discription}</Text>


                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15, }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, }}>Our Rate:  Rs {pricedetails()?.our_price}</Text>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14, }}>Market Rate:  <Text style={{
                                        textDecorationLine: 'line-through'
                                    }}>Rs {pricedetails()?.mrp_price}</Text></Text>

                                </View>


                                <Text style={{ fontWeight: 'bold', marginBottom: 15 }}>Varient</Text>

                                <FlatList
                                    data={priceArr}
                                    contentContainerStyle={{ marginTop: 0 }}
                                    keyExtractor={item => item.id}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    // pagingEnabled
                                    renderItem={({ item, index }) => (
                                        <TouchableOpacity onPress={() => setstate(index)}
                                            style={{
                                                borderWidth: 1, borderColor: state === index ? 'green' : '#ddd',
                                                borderRadius: 4,
                                                paddingHorizontal: 15, paddingVertical: 10, marginRight: 25
                                            }}>
                                            <Text>{item.quanti}</Text>
                                        </TouchableOpacity>
                                    )} />
                            </View>


                            {/* <View style={{ flexDirection: 'row', marginTop: 10, flex: 0.7, justifyContent: 'space-around', alignItems: 'center' }}>
                                <Text>Add your quantity: </Text>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <FontAwesome5 name="minus-square" size={32} onPress={() => { }} color={'#21D4FD'} />
                                    <Text style={{ paddingHorizontal: 15, textAlign: 'center' }}>{item.quantity}</Text>
                                    <FontAwesome5 name="plus-square" size={32} onPress={() => { }} color={'#21D4FD'} />
                                </View>
                            </View> */}

                            <View style={{
                                position: 'absolute', bottom: 0, right: 0, left: 0,
                                //  backgroundColor: 'red',
                                flexDirection: 'row-reverse',


                            }}>




                                <LinearGradient
                                    // onTouchEnd=
                                    colors={['#21D4FD', '#21D4FD']}
                                    style={{
                                        flexDirection: 'row',
                                        flex: 0.5,
                                        borderTopLeftRadius: 20
                                    }}>
                                    <TouchableOpacity
                                        onPress={
                                            itemAdd
                                        }
                                        style={{
                                            flex: 1,
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            paddingHorizontal: 10,
                                            paddingVertical: 3,
                                        }}>

                                        <AntDesign name="shoppingcart" size={30} onPress={() => { }} color={colors.white} style={{ margin: 10 }} />
                                        <Text style={{
                                            color: colors.white
                                        }}>Add to cart</Text>
                                    </TouchableOpacity>
                                </LinearGradient>




                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 0.5,
                                    borderRadius: 5
                                }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <FontAwesome5 name="minus-square" size={35} onPress={onSubtract} color={'#21D4FD'} />
                                        <Text style={{ paddingHorizontal: 25, textAlign: 'center' }}>{item.quantity}</Text>
                                        <FontAwesome5 name="plus-square" size={35} onPress={onAdd} color={'#21D4FD'} />
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    )
}