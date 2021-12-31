import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import Header from '../../common/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Myphoto } from '../../common';
import { colors } from '../../constant';
import images from '../../assets/images';

export default function Notification({ navigation }) {

    React.useMemo(() => {
        // Header({
        //     ...navigation,
        //     // leftIcon: images.back,
        //     // leftClick: () => { this.goBack() },
        //     // backgroundColor: Colors.orange,
        //     title: 'Notification',
        // });
    })


    return (
        <View>
            <FlatList
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => 'key' + index}
                ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
                data={['', '']}
                // ListFooterComponent={() => <FooterComponnet navigation={this.props.navigation} />}
                contentContainerStyle={{
                    paddingBottom: 5,
                    // backgroundColor: '#fff'
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        // onPress={() => {
                        //     this.props.navigation.navigate('Coinschanges', { coin: item })
                        // }}
                        style={{ flex: 1, flexDirection: 'row', paddingVertical: 15, }}>
                        <Myphoto
                            source={images.arrow}
                            size={25}
                            _style={{ marginLeft: 15, marginTop: 3 }}
                        />
                        <View style={{ flex: 1, marginHorizontal: 15, }}>


                            <View>
                                <Text style={{ color: colors.black }}>Your order for LG 1.5 Ton 5 start Inverter is cancaled.Your refeund</Text>
                                <Text style={{ color: colors.black }}>2222</Text>
                            </View>
                        </View>

                        {/* <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Myphoto
                                    source={images.arrow}
                                    style={{
                                        width: 12, height: 12, tintColor: 'white'
                                    }} />
                                <Text style={{ color: colors.black }}>8888</Text>
                            </View>
                            <Text style={{ color: colors.black }}>%%%%</Text>
                        </View> */}

                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
