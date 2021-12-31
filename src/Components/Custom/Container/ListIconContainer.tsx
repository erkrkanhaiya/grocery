/* eslint-disable react-native/no-inline-styles */
import React, { useMemo } from 'react';
import { StyleSheet, Image } from 'react-native';
import Col from 'src/Components/Shared/Col/Col';
import scaler from 'src/utils/scaler';
type Props = {
  icon: any,
  style?: {}
}
function ListIconContainer(props: Props) {
  const { icon, style } = props;
  const styles = useMemo(
    () =>
      StyleSheet.create({
        iconBackground: {
          height: scaler(32),
          width: scaler(32),
          borderRadius: scaler(5),
          marginRight: scaler(10),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E5EAED',
        },
      }),
    [],
  );

  return (
    <Col flex={0} style={styles.iconBackground}>
      <Image source={icon} style={style} />
    </Col>
  );
}

export default ListIconContainer;
