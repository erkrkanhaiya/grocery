/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Col from 'src/Components/Shared/Col/Col';
import Row from 'src/Components/Shared/Row/Row';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';

const LiveTile = () => {
  return (
    <Row
      style={{
        position: 'absolute',
        top: scaler(10),
        right: scaler(10),
        height: scaler(23),
        width: scaler(50),
        borderRadius: scaler(5),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Col
        flex={0}
        style={{
          height: scaler(8),
          width: scaler(8),
          borderRadius: scaler(4),
          backgroundColor: 'red',
        }}
      />
      <Typography type={'regular'} color="red" fontSize={scaler(12)}>
        Live
      </Typography>
    </Row>
  );
};

export default LiveTile;
