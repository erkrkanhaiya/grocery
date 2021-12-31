/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Pressable, Dimensions } from 'react-native';
import images from 'src/Assets/images';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
const { width } = Dimensions.get('window');

export default function EarningHeading() {
  return (
    <Row
      flex={0}
      style={{
        width: width - 40,
        height: scaler(70),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Typography type={'medium'} color={'#000'} fontSize={scaler(16)}>
        Your Earnings
      </Typography>
      <Row
        flex={0}
        style={{
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        {/* <Typography type={'regular'} fontSize={scaler(10)}>
          View in{' '}
        </Typography>
        <Pressable>
          <Typography type={'regular'} color={'#0F9ED7'} fontSize={scaler(14)}>
            Table
          </Typography>
        </Pressable>
        <Image
          source={images.chevronDown}
          style={{alignSelf: 'center', top: 2, marginLeft: 2}}
        /> */}
      </Row>
    </Row>
  );
}
