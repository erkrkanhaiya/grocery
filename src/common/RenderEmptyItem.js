import React from 'react';
import {View, Text} from 'react-native';
import {material} from 'react-native-typography';

export default function _renderEmptyItem(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{padding: 20}}>
        <View>
          <Text
            style={[
              material.caption,
              {
                fontFamily: 'SofiaPro-SemiBold',
                color: '#CC0000',
                marginLeft: 15,
              },
            ]}>
            No {props.title} Found !
          </Text>
        </View>
      </View>
    </View>
  );
}
