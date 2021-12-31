import React from 'react'
import { View, Text } from 'react-native'
import {
    Button,
    List, Switch, Card, Headline,
} from 'react-native-paper';
import { colors } from '../../constant';
import { useNavigation, useRoute } from '@react-navigation/core';

export default function Myaccount({ navigation }) {
    const route = useRoute()?.params;

    console.log(route, 'sss')
    return (
        <View>
            <View style={{ backgroundColor: colors.white, }}>
                {/* <Text style={{ padding: 10, color: colors.black }}>PAYMNET METHOD</Text> */}


                <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                    <List.Item
                        style={{ paddingVertical: 0 }}
                        title="Full name"
                        description={route?.name}
                        titleStyle={{ color: colors.black }}
                    />
                </Card>

                <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                    <List.Item
                        style={{ paddingVertical: 0 }}
                        title="Email Id"
                        description={route?.email}
                        titleStyle={{ color: colors.black }}
                    />
                </Card>


                <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                    <List.Item
                        style={{ paddingVertical: 0 }}
                        title="Phone number"
                        description={`+${route?.country_code} ${route?.mobile_number}` }
                        titleStyle={{ color: colors.black }}
                    />
                </Card>



                <Card style={{ borderWidth: 0.2, backgroundColor: colors.white }}>
                    <List.Item
                        style={{ paddingVertical: 0 }}
                        title="Chnage password"
                        titleStyle={{ color: colors.black }}
                        onPress={() => { navigation.navigate('ChangePassword') }}
                        right={() => <List.Icon color={colors.black} icon={"arrow-right-drop-circle-outline"} style={{ marginRight: 10 }} />}
                    />
                </Card>
            </View>
        </View>
    )
}
