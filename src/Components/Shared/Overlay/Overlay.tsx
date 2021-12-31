/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Col from '../Col/Col';

function Overlay(props: any) {
  const {style, children} = props;
  return (
    <Col style={[{backgroundColor: 'rgba(0,0,0,0.5)'}, style]}>{children}</Col>
  );
}

export default Overlay;
