/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ImageBackground, Image, Alert } from 'react-native';
import { useTheme } from 'react-native-paper';
import images from 'src/assets/images';
import ActionButton from 'src/Components/Custom/ActionButton/ActionButton';
import Col from 'src/Components/Shared/Col/Col';
import Overlay from 'src/Components/Shared/Overlay/Overlay';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';

interface requestItem {
  id: string;
  name: string;
  sport: string;
  location: string;
  time: any;
  icon: any;
  accepted: boolean;
  rejected: boolean;
}
interface requestProps {
  data: requestItem;
}
function ClassRequestCard(props: requestProps) {
  const { data } = props;
  const theme = useTheme();
  return (
    <Col flex={0}>
      <ImageBackground
        source={images.upcomingClassBackground}
        style={{
          height: scaler(180),
          width: scaler(360),
          borderRadius: scaler(10),
          backgroundColor: 'rgb(2,1,1)',
          alignSelf: 'center',
        }}
        imageStyle={{
          height: scaler(180),
          width: scaler(360),
          borderRadius: scaler(10),
        }}
        resizeMode="cover">
        <Overlay
          style={{
            flex: 1,
            borderRadius: scaler(10),
          }}>
          <Col
            flex={0}
            style={{
              position: 'absolute',
              bottom: scaler(10),
              left: scaler(10),
            }}>
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

          <Row
            flex={0}
            style={{
              width: scaler(150),
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: scaler(35),
              right: scaler(10),
            }}>
            {data.accepted || data.rejected ? null : (
              <ActionButton
                icon={images.reject}
                title={'Reject'}
                titleColor={'red'}
                onPress={() => console.log('rejected')}
              />
            )}
            {data.accepted || data.rejected ? null : (
              <ActionButton
                icon={images.accept}
                title={'Accept'}
                titleColor={'green'}
                onPress={() => console.log('accepted')}
              />
            )}
          </Row>
          <Col
            flex={0}
            style={{
              position: 'absolute',
              bottom: scaler(10),
              right: scaler(10),
            }}>
            <Typography type={'regular'} color="#fff" fontSize={scaler(10)}>
              {data.time}
            </Typography>
          </Col>
        </Overlay>
      </ImageBackground>
    </Col>
  );
}

export default ClassRequestCard;
