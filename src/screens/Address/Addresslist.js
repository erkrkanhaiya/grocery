import React from 'react'
import { View, Text, ScrollView, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { GButton } from '../../common/Button';
import { colors } from '../../constant';
import { ADDRESS } from '../../fakeData/address';




const NotificationList = ({ item, navigation }) => {
    return (
        <View style={{ marginTop: 5, flexDirection: 'row', paddingHorizontal: 5, backgroundColor: colors.white, paddingVertical: 10 }}>
            <View style={{ flex: 3.0, paddingLeft: 10 }}>
                <View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>

                        <View style={{
                            borderWidth: 0.5, padding: 5, justifyContent: 'center', alignItems: 'center', borderRadius: 5,
                            marginRight: 10
                        }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 8 }}>{item.label}</Text>
                        </View>
                    </View>
                    <View style={{ marginVertical: 5 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', flex: 2 }}>
                            <Text style={{
                                fontSize: 15
                            }}>{item.address}</Text>
                            <Text style={{
                                fontSize: 15
                            }}>{`${item.city} ${item.dist} ${item.state}, ${item.zip_code}`}</Text>
                            <View style={{ height: 8 }} />
                            <Text style={{
                                fontStyle: 'italic'
                            }}>Mobile Number : {item.mobile}</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
                            <FontAwesome color={{}} size={25} name='edit' style={{}}
                                onPress={() => navigation.navigate('Addnewaddress')}

                            />
                            <View style={{ width: 50 }} />
                            <FontAwesome color={{}} size={25} name='trash' style={{}}

                                onPress={() => alert('Delete')}
                            />

                        </View>
                    </View>
                </View>
            </View>
        </View>
    )

}


export default function Addresslist({ navigation }) {
    return (
        <View style={{ flex: 1 }}>

            <ScrollView style={{}}>

                <Text style={{
                    marginVertical: 4, fontSize: 14, color: colors.black,
                    paddingHorizontal: 10
                }}>
                    DEFAULT ADDRESS
                </Text>

                <FlatList
                    data={ADDRESS}
                    contentContainerStyle={{ marginTop: 0 }}
                    renderItem={({ item, index }) => <NotificationList item={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />



            </ScrollView>



            <GButton
                height={50}
                width={'100%'}
                // borderRadius={5}
                textcolor={'#fff'}
                // backgroundColor={colors.buttoncolor}
                title={`Add New Address`}
                onPress={() => navigation.navigate('Addnewaddress')} />
            {/* <Ionicons color={{}} size={25} name='ios-add-circle-outline' style={{ marginRight: 3, marginLeft: 8 }} />
                <Text>ADD NEW ADDRESS</Text> */}




        </View>
    )
}
