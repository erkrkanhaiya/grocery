/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import images from 'src/assets/images';
import Col from 'src/Components/Shared/Col/Col';
import Row from 'src/Components/Shared/Row/Row';
import Spacer from 'src/Components/Shared/Spacer/Spacer';
import Typography from 'src/Components/Shared/Typography/Typography';
import scaler from 'src/utils/scaler';

function EarningCard(props: any) {
  // console.log('props => ', props);
  const { data } = props;
  const theme = useTheme();
  const styles = StyleSheet.create({
    rowAlignment: {
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    container: {
      height: scaler(168),
      width: scaler(319),
      borderRadius: scaler(10),
      padding: scaler(10),
      backgroundColor: theme.colors.white,
      alignSelf: 'center',
      justifyContent: 'space-between',
    },
  });
  return (
    <Col flex={0} style={styles.container}>
      <Row flex={0} style={styles.rowAlignment}>
        <TouchableOpacity style={{ flexDirection: 'row' }}>
          <Typography
            type={'regular'}
            color={theme.colors.black}
            fontSize={scaler(12)}>
            Select Date{' '}
          </Typography>
          <Image
            source={images.dropdown}
            style={{
              alignSelf: 'center',
              height: scaler(5),
              top: 2,
              marginLeft: 2,
            }}
          />
        </TouchableOpacity>
        <Typography
          type={'regular'}
          color={theme.colors.black}
          fontSize={scaler(12)}>
          Earnings (HKD)
        </Typography>
      </Row>
      <Spacer />
      <Row flex={0} style={styles.rowAlignment}>
        <Typography type={'regular'} fontSize={scaler(12)}>
          3rd
        </Typography>
        <Typography
          type={'medium'}
          color={theme.colors.black}
          fontSize={scaler(12)}>
          49 HKD
        </Typography>
      </Row>
      <Spacer />
      <Row flex={0} style={styles.rowAlignment}>
        <Typography type={'regular'} fontSize={scaler(12)}>
          March
        </Typography>
        <Typography
          type={'medium'}
          color={theme.colors.black}
          fontSize={scaler(12)}>
          150 HKD
        </Typography>
      </Row>
      <Spacer />
      <Row flex={0} style={styles.rowAlignment}>
        <Typography type={'regular'} fontSize={scaler(12)}>
          YTD
        </Typography>
        <Typography type={'regular'} fontSize={scaler(12)}>
          Only show 60 days
        </Typography>
      </Row>
      <Spacer />
      <Row flex={0} style={styles.rowAlignment}>
        <Typography type={'regular'} fontSize={scaler(12)}>
          3rd
        </Typography>
        <Typography type={'regular'} fontSize={scaler(12)}>
          4
        </Typography>
      </Row>
    </Col>
  );
}

export default EarningCard;
