import React, { Component } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { colors } from '../../constant';
import InputSpinner from "react-native-input-spinner";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { products } from '../../fakeData/productlist';
import { productItem, youSave } from '../../common';
import LinearGradient from 'react-native-linear-gradient';
import { ModalView } from '../../common/Modal';
import { Button } from 'react-native-paper';
import { Helper } from '../../lib';

// import { Helper } from '../../lib';  

const NotificationList = ({ item, onSubtract, onAdd, itemAdd, modalOn }) => {
    return (
        <View style={{ marginTop: 1, flexDirection: 'row', paddingHorizontal: 5, backgroundColor: colors.white, paddingVertical: 10 }}>


            <View style={{ flex: 1.5, borderWidth: 0.5, padding: 5, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialCommunityIcons color={'green'} size={23}
                    name='record-circle-outline'
                    style={{
                        position: 'absolute',
                        right: 1,
                        top: 2
                        //  marginRight: 3, marginLeft: 8
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

                    {item?.varient && (<TouchableOpacity
                        onPress={modalOn}
                        style={{

                            borderWidth: 1,
                            borderColor: '#ddd',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: '35%',
                            flexDirection: 'row'
                        }}>
                        <Text>Varient</Text>
                        <MaterialIcons name="arrow-drop-down" size={25} />
                    </TouchableOpacity>)}

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
                                    paddingHorizontal: 10,
                                    paddingVertical: 3,
                                }}>
                                    <Text style={{
                                        color: colors.white
                                    }}>Add</Text>
                                    <MaterialIcons name="add-box" size={30} color={colors.white} />
                                </View>
                            </LinearGradient>)}

                            {item?.isadd && (<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesome5 name="minus-square" size={32}
                                    disabled={!item?.isadd}
                                    onPress={onSubtract} color={'#21D4FD'} />
                                <Text style={{ paddingHorizontal: 15, textAlign: 'center' }}>{item.quantity}</Text>
                                <FontAwesome5 name="plus-square" size={32} onPress={onAdd} color={'#21D4FD'} />
                            </View>)}


                        </View>
                    </View>
                </View>

            </View>
        </View>
    )

}



export default class Productlist extends Component {
    state = {
        products,
        modalVisible: false,
        item: '',
        index: '',
        cartArr: []
    };

    onSubtract = (item, index) => {
        const products = [...this.state.products];

        if (products[index].quantity <= 1) {
            products[index] = { ...products[index], isadd: false };
            this.state.cartArr.pop(products[index])

            products[index].quantity = 0;
        } else {
            products[index].quantity -= 1;

        }
        this.setState({ products });
    }

    onAdd = (item, index) => {
        const products = [...this.state.products];
        if (products[index].quantity < 10) {
            products[index].quantity += 1;
        }
        this.setState({ products });
    }


    itemAdd = (item, index) => {
        const products = [...this.state.products];
        products[index].quantity += 1;
        products[index] = { ...products[index], isadd: true };
        this.state.cartArr.push(products[index])
        this.setState({ products, modalVisible: false });
    }



    modalOff() {
        this.setState({ modalVisible: false, })
    }

    modalOn(i, index) {
        this.setState({ modalVisible: true, item: i, index: index })
    }


    onPressCart() {
        this.props.navigation.navigate('Cart', { prevData: this.state.cartArr })
        // if (Helper.userInfo) {
        //     return this.props.navigation.navigate('Cart', { prevData: this.state.cartArr })
        // } else {
        //     // return this.props.navigation.navigate('Login')
        // }
    }

    render() {
        const { products, modalVisible, item, index } = this.state;
        let totalQuantity = 0;
        let totalPrice = 0;
        products.forEach((item) => {
            totalQuantity += item.quantity;
            totalPrice += item.quantity * item.mrp_price;
        })

        console.log(this.state, "Productlist")
        return (
            <View style={{ flex: 1 }}>

                <ModalView
                    modalVisible={modalVisible}
                    modalOff={this.modalOff}
                    onClose={() => this.modalOff()}
                    item={this.state.item}

                    onSubtract={() => this.onSubtract(item, index)}
                    onAdd={() => this.onAdd(item, index)}
                    itemAdd={() => this.itemAdd(item, index)}
                >
                </ModalView>

                <FlatList
                    data={this.state.products}
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

                {/* <TouchableOpacity onPress={() => this.itemAdd()}>
                    <Text>dddd</Text>
                </TouchableOpacity> */}

                {totalQuantity > 0 && (<View style={{
                    flexDirection: 'row', justifyContent: 'space-between', borderRadius: 3,
                    marginHorizontal: 2, backgroundColor: 'tomato', paddingVertical: 5, paddingHorizontal: 10
                }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, }}>
                        <AntDesign name="shoppingcart" size={35} onPress={() => { }} color={colors.white} />
                        <View style={{ paddingLeft: 15, flexDirection: 'column', }}>
                            <Text style={{ fontWeight: 'bold', color: colors.white }}>Items: {totalQuantity}</Text>
                            <Text style={{ fontWeight: 'bold', color: colors.white }}>Price: {totalPrice}</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Button icon="arrow-right-bold"
                            mode="contained"
                            color='red'
                            onPress={() => this.onPressCart()}>
                            View cart
                        </Button>
                    </View>
                </View>)}

            </View>
        )
    }
}
