/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground, Image } from 'react-native';
import images from 'src/assets/images';
import Col from 'src/Components/Shared/Col/Col';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';
import LiveTile from '../LiveTile/LiveTile';

function UpcomingClassCard(props: any) {
  const { data } = props;

  return (
    <Col flex={0}>
      <ImageBackground
        source={images.upcoming_class}
        style={{
          height: scaler(180),
          width: scaler(360),
          borderRadius: scaler(10),
          backgroundColor: 'rgb(2,1,1)',
          alignSelf: 'center',
        }}
        imageStyle={{ height: scaler(180), width: scaler(360) }}
        resizeMode="cover">
        <Col
          flex={0}
          style={{ position: 'absolute', bottom: scaler(10), left: scaler(10) }}>
          <Typography type={'medium'} color="#fff" fontSize={scaler(14)}>
            {data.name}
          </Typography>
          <Row style={{ marginVertical: scaler(3) }}>
            <Image source={data.icon} style={{ marginRight: scaler(5) }} />
            <Typography type={'regular'} color="#fff" fontSize={scaler(10)}>
              {data.sport}
            </Typography>
          </Row>
          <Row>
            <Image
              source={images.locationPin}
              style={{ marginRight: scaler(5) }}
            />
            <Typography type={'regular'} color="#fff" fontSize={scaler(10)}>
              {data.location}
            </Typography>
          </Row>
        </Col>
        <Col
          flex={0}
          style={{ position: 'absolute', bottom: scaler(10), right: scaler(10) }}>
          <Typography type={'regular'} color="#fff" fontSize={scaler(10)}>
            {data.time}
          </Typography>
        </Col>
        {data.isLive && <LiveTile />}
      </ImageBackground>
    </Col>
  );
}

export default UpcomingClassCard;
